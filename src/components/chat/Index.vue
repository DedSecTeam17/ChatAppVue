<template>
    <div>
        <NavBar :online="this.online"></NavBar>


        <div class="row">

            <!--            users list -->
            <div class="col-md-2">
                <UsersList @selectUser="onSelectUser" :users="this.users"></UsersList>
            </div>

            <div class="col-md-2">
                <!--                <UsersList></UsersList>-->
            </div>

            <!--            chat messages-->
            <div class="col-md-4 mt-1">
                <UserIndicator v-if="selectedUser" :user="this.selectedUser"></UserIndicator>
                <ChatMessages v-if="selectedUser"
                              :messages="this.messages"></ChatMessages>
                <Composer v-if="selectedUser" @send="send"></Composer>
            </div>


        </div>


    </div>
</template>

<script>
    import NavBar from "./NavBar";
    import UsersList from "./UsersList";
    import ChatMessages from "./ChatMessages";
    import Composer from "./Composer";
    import UserIndicator from "./UserIndicator";
    // import {UserSession} from "../../Services/user_session";
    import axios from 'axios';
    import {UserSession} from "../../Services/user_session";

    // eslint-disable-next-line no-undef
    var pusher = new Pusher('c43c8e473ffba0fd0a14', {
        cluster: 'mt1',
        forceTLS: true
    });
    export default {
        name: "Index",
        components: {UserIndicator, Composer, ChatMessages, UsersList, NavBar},
        data() {
            return {
                message: '',
                messages: [],
                online :UserSession.getUser().online,
                users: [],
                selectedUser: null
            }
        },
        created() {

            this.getAllUsers();
            this.listenForUsersConnections();
            this.listenForUsersDisconnections();
        },

        methods: {
            send(composerMessage) {
                this.message = composerMessage;
                this.addMessage();
            },
            onSelectUser(user) {
                this.selectedUser = user;
                this.getSelectedUserMessages();
                this.listenForMessages();
            },
            //get all user
            getAllUsers() {
                axios.get("https://sust-chat-app.herokuapp.com/users/index", {
                    headers: {'Authorization': `jwt ${UserSession.getUserToken()}`},
                }).then((res) => {
                    this.users = res.data;
                }).catch(() => {
                    // this.isLoading = false;
                    // this.error_data = err;
                    // this.showError = true;
                    // console.log(err)
                })
            },
            getSelectedUserMessages() {
                axios.post("https://sust-chat-app.herokuapp.com/chat/get_messages",
                    {
                        "from": this.selectedUser._id.toString(),
                        "to": UserSession.getUser()._id.toString()
                    },
                    {
                        headers: {'Authorization': `jwt ${UserSession.getUserToken()}`},

                    }).then((res) => {
                    this.messages = res.data;
                }).catch(() => {
                    // this.isLoading = false;
                    // this.error_data = err;
                    // this.showError = true;
                    // console.log(err)
                })
            },
            addMessage() {
                axios.post("https://sust-chat-app.herokuapp.com/chat",
                    {
                        "from": UserSession.getUser()._id.toString(),
                        "to": this.selectedUser._id.toString(),
                        "message": this.message
                    },
                    {
                        headers: {'Authorization': `jwt ${UserSession.getUserToken()}`},

                    }).then(() => {

                }).catch(() => {
                    // this.isLoading = false;
                    // this.error_data = err;
                    // this.showError = true;
                    // console.log(err)
                })
            },

            listenForMessages() {
                var app = this;

                var channel = pusher.subscribe(`messages-${UserSession.getUser()._id}-${app.selectedUser._id}`);
                channel.bind('send_message', function (data) {
                    // app.users.push();


                    app.messages.push(data['message']);

                });
            },
            listenForUsersConnections() {
                var app = this;

                var channel = pusher.subscribe(`attach_chat`);
                channel.bind('connected', function (data) {


                    if (UserSession.getUser()._id !== data['user']._id) {
                        //check if user already added
                        var intendedUser = app.users.map((user) => {
                            if (user._id === UserSession.getUser()._id) {
                                return user;
                            } else {
                                return null;
                            }
                        });


                        if (!intendedUser[0]){
                            app.users.push(data['user']);

                        }




                    }else {
                        app.online=true;

                    }


                    // alert(JSON.stringify(data));

                });
            },
            listenForUsersDisconnections() {
                var app = this;

                var channel = pusher.subscribe(`attach_chat`);
                channel.bind('disconnected', function (data) {



                    if (UserSession.getUser()._id !== data['user']._id) {
                        var intendedUser = app.users.map((user) => {
                            if (user._id === data['user']._id) {
                                return user;
                            } else {
                                return null;
                            }
                        });
                        if (app.selectedUser){
                            if (app.selectedUser._id === data['user']._id) {
                                app.selectedUser = null;
                            }
                        }

                        app.users.splice(app.users.indexOf(intendedUser[0]), 1);
                    }else {
                        app.online=false;

                    }

                });
            },

        }
    }
</script>

<style scoped>

</style>