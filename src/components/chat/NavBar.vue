<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">ChatApp</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">{{userName}} <span class="sr-only">(current)</span></a>
                </li>
            </ul>

            <div class="mr-5">
                <button v-if="!online"  class="btn btn-outline-success m-2 my-sm-0" type="submit" @click="connectToChat">Connect to
                    chat
                </button>
                <button v-if="online" class="btn btn-outline-success m-2 my-sm-0" type="submit" @click="disconnectToChat">
                    Disconnected
                </button>
            </div>

            <button class="btn btn-outline-success m-2 my-sm-0" type="submit" @click="logOut">Log out</button>

        </div>
    </nav>
</template>

<script>
    import {UserSession} from "../../Services/user_session";
    import axios from 'axios';

    export default {
        name: "NavBar",
        props :{
            online : Boolean
        },
        data (){
          return {
              userName : UserSession.getUser().userName,
            }
        },
        methods: {
            connectToChat() {
                axios.get("https://sust-chat-app.herokuapp.com/users/connected", {
                    headers: {'Authorization': `jwt ${UserSession.getUserToken()}`},
                }).then(() => {
                    // console.log(res);
                    // this.showError = false;
                    // UserSession.setToken(res.data['token']);
                    // this.$router.push('/signIn');

                }).catch(() => {
                    // this.isLoading = false;
                    // this.error_data = err;
                    // this.showError = true;
                    // console.log(err)
                })

            },
            disconnectToChat() {
                axios.get("https://sust-chat-app.herokuapp.com/users/disconnected", {
                    headers: {'Authorization': `jwt ${UserSession.getUserToken()}`},
                }).then(() => {
                    // console.log(res);
                    // this.showError = false;
                    // UserSession.setToken(res.data['token']);
                    // this.$router.push('/signIn');

                }).catch(() => {
                    // this.isLoading = false;
                    // this.error_data = err;
                    // this.showError = true;
                    // console.log(err)
                })
            },
            logOut() {

                axios.get("https://sust-chat-app.herokuapp.com/users/disconnected", {
                    headers: {'Authorization': `jwt ${UserSession.getUserToken()}`},
                }).then(() => {

                    UserSession.destroyToken();
                    this.$router.push('/signIn');


                    // console.log(res);
                    // this.showError = false;
                    // UserSession.setToken(res.data['token']);
                    // this.$router.push('/signIn');

                }).catch(() => {
                    // this.isLoading = false;
                    // this.error_data = err;
                    // this.showError = true;
                    // console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>