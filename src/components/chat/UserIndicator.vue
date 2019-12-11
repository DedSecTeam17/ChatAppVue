<template>

    <div class="card bg-dark"  >
        <div class="card-body">
            <div class="row ">
                <div class="col-2">
                    <img :src="`https://i.pravatar.cc/150?u=${user._id}`" width="50" height="50"
                         class="img-fluid rounded-circle">
                </div>
                <div class="col-10">
                    <p style="color: wheat">{{user.userName}}</p>

                    <p  style="color: wheat; font-size: 10px"><i  class="fas fa-dot-circle" style="color: greenyellow"></i> online</p>

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