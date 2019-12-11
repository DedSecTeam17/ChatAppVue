<template>
    <div class="card bg-dark">

        <div class="card-body">
            <form @submit.prevent="send()" class=" row">
                <div class=" col-9">
                    <input v-model="message" type="text" class="form-control" id="inputPassword2" placeholder="message">

                </div>
                <div class="col-3">
                    <button type="submit" class="btn btn-outline-primary btn-block "><i class="fas fa-paper-plane"></i></button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
    import { Picker } from 'emoji-mart-vue'

    export default {
        name: "Composer",
        comments :{Picker },
        data() {
            return {
                message: ''
            }
        },
        methods: {
            send() {

                this.$emit('send', this.message);
                this.message='';

            }
        }
    }
</script>

<style scoped>

</style>