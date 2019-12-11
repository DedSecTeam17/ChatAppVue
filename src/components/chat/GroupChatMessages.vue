<template>


    <div>



        <div class="chat" ref="chat">


            <div v-for="message in messages" v-bind:key="message._id">
                <div v-if="message.message.from ===currentUserId"
                     class="mine messages">
                    <div class="message last">
                        {{message.message.message}}
                    </div>


                    <p style="font-size: xx-small; color: wheat">

                        <timeago :datetime="message.message.createdAt"></timeago>
                    </p>
                </div>


                <div v-else class="yours messages">
                    <div class="message last">
                        <p style="color: gray; font-size: 10px"> @ {{message.user.userName}}</p>
                        {{message.message.message}}
                    </div>

                    <p style="font-size: xx-small; color: wheat">

                        <timeago :datetime="message.message.createdAt"></timeago>
                    </p>

                </div>
            </div>


        </div>

    </div>
</template>

<script>
    import {UserSession} from "../../Services/user_session";

    export default {
        name: "GroupChatMessages",
        data() {
            return {
                currentUserId: UserSession.getUser()._id
            }
        },
        methods: {
            scrollToEnd() {
                setTimeout(() => {

                    this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight - this.$refs.chat.clientHeight;
                }, 50);
            }
        },
        watch: {
            messages() {
                this.scrollToEnd();
            }
        },
        created() {
            this.currentUserId = UserSession.getUser()._id;
        },
        props: {
            messages: Array
        }
    }
</script>

<style scoped>

    .chat {
        /*width: 300px;*/
        max-height: 400px;
        /*position: fixed;*/
        /*width: 500px;*/
        height: 400px;

        overflow-y: scroll;
        overflow-x: hidden;
        border: solid 1px #EEE;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .messages {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }

    .message {
        border-radius: 20px;
        padding: 8px 15px;
        margin-top: 5px;
        margin-bottom: 5px;
        display: inline-block;
    }

    .yours {
        align-items: flex-start;
    }

    .yours .message {
        margin-right: 25%;
        background-color: #eee;
        position: relative;
    }

    .yours .message.last:before {
        content: "";
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: -7px;
        height: 20px;
        width: 20px;
        background: #eee;
        border-bottom-right-radius: 15px;
    }

    .yours .message.last:after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: -10px;
        width: 10px;
        height: 20px;
        background: #24252a;
        border-bottom-right-radius: 10px;
    }

    .mine {
        align-items: flex-end;
    }

    .mine .message {
        color: white;
        margin-left: 25%;
        background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);
        background-attachment: fixed;
        position: relative;
    }

    .mine .message.last:before {
        content: "";
        position: absolute;
        z-index: 0;
        bottom: 0;
        right: -8px;
        height: 20px;
        width: 20px;
        background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);
        background-attachment: fixed;
        border-bottom-left-radius: 15px;
    }

    .mine .message.last:after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: -10px;
        width: 10px;
        height: 20px;
        background: #24252a;
        border-bottom-left-radius: 10px;
    }


</style>