<template>


   <div>

       <div class="chat"  >


           <div v-for="message in messages" v-bind:key="message">
               <div class="mine messages">
                   <div class="message last">
                       {{message.message}}
                   </div>
               </div>
               <div class="yours messages">
                   <div class="message">
                       Hey!
                   </div>
                   <div class="message">
                       You there?
                   </div>
                   <div class="message last">
                       Hello, how's it going?
                   </div>
               </div>
           </div>



       </div>

   </div>
</template>

<script>
    export default {
        name: "ChatMessages",
        props :{
            messages : Array
        }
    }
</script>

<style scoped>

    .chat {
        /*width: 300px;*/
        max-height: 400px;
        /*position: fixed;*/
        /*width: 500px;*/
        overflow-y: scroll;
        overflow-x: hidden;
        border: solid 1px #EEE;
        /*display: flex;*/
        /*flex-direction: column;*/
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
        background: white;
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
        background: white;
        border-bottom-left-radius: 10px;
    }


</style>