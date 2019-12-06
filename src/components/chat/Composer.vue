<template>
    <div class="card">

        <div class="card-body">
            <form @submit.prevent="send()" class="form-inline row">
                <div class=" col-10">
                    <label for="inputPassword2" class="sr-only">message</label>
                    <input v-model="message" type="text" class="form-control" id="inputPassword2" placeholder="message">
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-outline-primary  ">Send</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Composer",
        data() {
            return {
                message: ''
            }
        },
        methods: {
            send() {
                this.$emit('send', this.message)
            }
        }
    }
</script>

<style scoped>

</style>