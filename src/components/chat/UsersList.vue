<template>
    <div id="users">
        <ul class="list-group bg-dark">

            <li class="list-group-item bg-dark" @click="selectGroup()">
                <div class="row">
                    <div class="col-4">
                        <img :src="`https://i.pravatar.cc/150?u=1`" width="50" height="50"
                             class="rounded-circle">
                    </div>
                    <div class="col-8">
                        <p style="color: wheat"> <i class="fas fa-users"></i> All users</p>
                    </div>
                </div>


            </li>

            <li class="list-group-item bg-dark" @click="selectUser(user)" v-for="user in users" v-bind:key="user._id">
                <div class="row">
                    <div class="col-4">
                        <img :src="`https://i.pravatar.cc/150?u=${user._id}`" width="50"
                             height="50"
                             class="rounded-circle">
                    </div>
                    <div class="col-8">
                        <p style="font-weight: bold;color: wheat">{{user.userName}}</p>
                        <p v-if="user.online" style="color: wheat; font-size: 10px"><i  class="fas fa-dot-circle" style="color: greenyellow"></i> online</p>
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
        overflow-y: auto;
    }

    li :hover {
        background-color: ghostwhite;
    }
</style>