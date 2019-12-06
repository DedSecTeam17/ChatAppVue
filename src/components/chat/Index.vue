<template>
    <div>
        <NavBar></NavBar>


        <div class="row">

            <!--            users list -->
            <div class="col-md-2">
                <UsersList @selectUser="onSelectUser"   :users="this.users"></UsersList>
            </div>

            <div class="col-md-2">
                <!--                <UsersList></UsersList>-->
            </div>

            <!--            chat messages-->
            <div class="col-md-4 mt-1">
                <UserIndicator v-if="selectedUser"  :user="this.selectedUser"></UserIndicator>
                <ChatMessages v-if="selectedUser" :messages="[{message : 'hi there'},{message : 'hi there'},{message : 'hi there'}]"></ChatMessages>
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
                users : [],
                selectedUser : null
            }
        },
        created(){
          this.listenForUsersConnections();
          this.listenForUsersDisconnections();
        },

        methods: {
            send(composerMessage) {
                this.message = composerMessage;
            },
            onSelectUser(user){
                this.selectedUser=user;
            },
            //get all user
            getAllUsers(){

            },
            addMessage(){

            },
            setMyStatusOnline(){

            },
            setMyStatusOffline(){

            },
            listenForMessages(){
            },
            listenForUsersConnections(){
                var app = this;

                var channel = pusher.subscribe(`attach_chat`);
                channel.bind('connected', function(data) {
                    app.users.push(data['user']);


                    alert(JSON.stringify(data));

                });
            },
            listenForUsersDisconnections(){
                var app = this;

                var channel = pusher.subscribe(`attach_chat`);
                channel.bind('disconnected', function(data) {
                    alert(JSON.stringify(data));

                    var  intendedUser= app.users.map((user)=>{
                        if ( user._id===data['user']._id){
                            return user;
                        }else {
                            return  null;
                        }
                    });

                    app.users.splice(app.users.indexOf(intendedUser),1) ;

                });
            },

        }
    }
</script>

<style scoped>

</style>