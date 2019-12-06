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
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>

            <div class="mr-5">
                <button class="btn btn-outline-success m-2 my-sm-0" type="submit" @click="connectToChat">Connect to
                    chat
                </button>
                <button class="btn btn-outline-success m-2 my-sm-0" type="submit" @click="disconnectToChat">
                    Disconnected
                </button>
            </div>

            <button class="btn btn-outline-success m-2 my-sm-0" type="submit" @click="logOut">Log out</button>


        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        methods: {
            connectToChat() {

            },
            disconnectToChat() {

            },
            logOut() {

            }
        }
    }
</script>

<style scoped>

</style>