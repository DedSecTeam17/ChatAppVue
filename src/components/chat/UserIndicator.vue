<template>

    <div class="card" >
        <div class="card-body">
            <div class="row ">
                <div class="col-2">
                    <img :src="`https://ui-avatars.com/api/?rounded=true&name=${user.userName}`" width="50" height="50"
                         class="img-fluid rounded-circle">
                </div>
                <div class="col-10">
                    <p>{{user.userName}}</p>
                    <p style="color: gray; font-size: 10px"> Online</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "UserIndicator",
        props : {
            user : Object
        }
    }
</script>

<style scoped>

</style>