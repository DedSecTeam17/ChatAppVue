<template>
    <div id="users">
        <ul class="list-group">

            <li class="list-group-item" @click="selectGroup()">
                <div class="row">
                    <div class="col-4">
                        <img :src="`https://ui-avatars.com/api/?rounded=true&name=all`" width="50" height="50"
                             class="rounded-circle">
                    </div>
                    <div class="col-8">
                        <p>All users</p>
                    </div>
                </div>


            </li>

            <li class="list-group-item" @click="selectUser(user)" v-for="user in users" v-bind:key="user._id">
                <div class="row">
                    <div class="col-4">
                        <img :src="`https://ui-avatars.com/api/?rounded=true&name=${user.userName}`" width="50"
                             height="50"
                             class="rounded-circle">
                    </div>
                    <div class="col-8">
                        <p>{{user.userName}}</p>
                        <p v-if="user.online" style="color: gray; font-size: 10px">onLine </p>
                    </div>
                </div>


            </li>


        </ul>

    </div>
</template>

<script>
    export default {
        name: "UsersList",
        data() {
            return {}
        },
        props: {
            users: Array
        },
        methods: {
            selectUser(user) {
                this.$emit('selectUser', user);
            },
            selectGroup() {
                this.$emit('selectGroup',);
            }
        }
    }
</script>

<style scoped>
    #users {
        height: 600px;
        /*position: fixed;*/
        overflow-y: scroll;
    }

    li :hover {
        background-color: ghostwhite;
    }
</style>