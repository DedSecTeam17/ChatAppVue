(function(e){function t(t){for(var a,n,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},r={app:0},i=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0582":function(e,t,s){},"0f9e":function(e,t,s){"use strict";var a=s("dd35"),r=s.n(a);r.a},"521d":function(e,t,s){"use strict";var a=s("0582"),r=s.n(a);r.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("router-view")],1)},i=[],n={name:"app",components:{}},o=n,c=s("2877"),l=Object(c["a"])(o,r,i,!1,null,null,null),u=l.exports,d=s("8c4f"),m=s("1dce"),p=s.n(m),h=s("d4ec"),v=s("bee2"),f=function(){function e(){Object(h["a"])(this,e)}return Object(v["a"])(e,null,[{key:"setToken",value:function(e){localStorage.setItem("token",e)}},{key:"setUser",value:function(e){localStorage.setItem("user",e)}},{key:"destroyToken",value:function(){localStorage.removeItem("token"),localStorage.removeItem("user")}},{key:"getUserToken",value:function(){return localStorage.getItem("token")}},{key:"getUser",value:function(){return JSON.parse(localStorage.getItem("user"))}},{key:"isAuth",value:function(){return null!==this.getUserToken()}}]),e}(),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("NavBar",{attrs:{online:this.online}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 mt-1"},["private"===this.chatType?s("div",[e.selectedUser?s("UserIndicator",{attrs:{user:this.selectedUser}}):e._e(),e.selectedUser?s("ChatMessages",{attrs:{messages:this.messages}}):e._e(),e.selectedUser?s("Composer",{on:{send:e.send}}):e._e()],1):s("div",["group"===this.chatType?s("div",[s("UserIndicator",{attrs:{user:{userName:"All",_id:1}}}),s("GroupChatMessages",{attrs:{messages:this.group_messages}}),s("Composer",{on:{send:e.send}})],1):s("div",[e._m(0)])])]),s("div",{staticClass:"col-md-4"},[s("UsersList",{attrs:{users:this.users},on:{selectUser:e.onSelectUser,selectGroup:e.selectGroup}})],1)])],1)},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{staticClass:"text-center mt-5",staticStyle:{color:"wheat"}},[s("i",{staticClass:"far fa-user"}),e._v(" Select contact to start chat with")])}],b=(s("99af"),s("c975"),s("d81d"),s("a434"),s("d3b7"),s("25f0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e._m(0),e._m(1),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("i",{staticClass:"far fa-user"}),e._v(" "+e._s(e.userName)+" "),s("span",{staticClass:"sr-only"},[e._v("(current)")])])])]),s("div",{staticClass:"mr-5"},[e.online?e._e():s("button",{staticClass:"btn btn-outline-success m-2 my-sm-0",attrs:{type:"submit"},on:{click:e.connectToChat}},[s("i",{staticClass:"fas fa-eye"}),e._v(" Connect to chat ")]),e.online?s("button",{staticClass:"btn btn-outline-danger m-2 my-sm-0",attrs:{type:"submit"},on:{click:e.disconnectToChat}},[s("i",{staticClass:"fas fa-eye-slash"}),e._v(" Disconnect ")]):e._e()]),s("button",{staticClass:"btn btn-outline-success m-2 my-sm-0",attrs:{type:"submit"},on:{click:e.logOut}},[s("i",{staticClass:"fas fa-sign-out-alt"}),e._v(" Log out")])])])}),C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-snapchat"}),e._v(" Shmarat")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],$=s("bc3a"),w=s.n($),y={name:"NavBar",props:{online:Boolean},data:function(){return{userName:f.getUser().userName}},methods:{connectToChat:function(){w.a.get("https://sust-chat-app.herokuapp.com/users/connected",{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(){})).catch((function(){}))},disconnectToChat:function(){w.a.get("https://sust-chat-app.herokuapp.com/users/disconnected",{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(){})).catch((function(){}))},logOut:function(){var e=this;w.a.get("https://sust-chat-app.herokuapp.com/users/disconnected",{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(){f.destroyToken(),e.$router.push("/signIn")})).catch((function(){}))}}},U=y,k=Object(c["a"])(U,b,C,!1,null,"0fadbc3c",null),S=k.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"users"}},[s("ul",{staticClass:"list-group bg-dark"},[s("li",{staticClass:"list-group-item bg-dark",on:{click:function(t){return e.selectGroup()}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("img",{staticClass:"rounded-circle",attrs:{src:"https://i.pravatar.cc/150?u=1",width:"50",height:"50"}})]),e._m(0)])]),e._l(e.users,(function(t){return s("li",{key:t._id,staticClass:"list-group-item bg-dark",on:{click:function(s){return e.selectUser(t)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("img",{staticClass:"rounded-circle",attrs:{src:"https://i.pravatar.cc/150?u="+t._id,width:"50",height:"50"}})]),s("div",{staticClass:"col-8"},[s("p",{staticStyle:{"font-weight":"bold",color:"wheat"}},[e._v(e._s(t.userName))]),t.online?s("p",{staticStyle:{color:"wheat","font-size":"10px"}},[s("i",{staticClass:"fas fa-dot-circle",staticStyle:{color:"greenyellow"}}),e._v(" online")]):e._e()])])])}))],2)])},T=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-8"},[s("p",{staticStyle:{color:"wheat"}},[s("i",{staticClass:"fas fa-users"}),e._v(" All users")])])}],E={name:"UsersList",data:function(){return{}},props:{users:Array},methods:{selectUser:function(e){this.$emit("selectUser",e)},selectGroup:function(){this.$emit("selectGroup")}}},j=E,N=(s("521d"),Object(c["a"])(j,x,T,!1,null,"13432ccf",null)),O=N.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{ref:"chat",staticClass:"chat"},[0===e.messages.length?s("div",[s("p",[e._v("No messages sent to this chat")])]):e._e(),e._l(e.messages,(function(t){return s("div",{key:t._id},[t.from===e.currentUserId?s("div",{staticClass:"mine messages"},[s("div",{staticClass:"message last"},[e._v(" "+e._s(t.message)+" ")]),s("p",{staticStyle:{"font-size":"xx-small",color:"wheat"}},[s("timeago",{attrs:{datetime:t.createdAt}})],1)]):s("div",{staticClass:"yours messages"},[s("div",{staticClass:"message last"},[e._v(" "+e._s(t.message)+" ")]),s("p",{staticStyle:{"font-size":"xx-small",color:"wheat"}},[s("timeago",{attrs:{datetime:t.createdAt}})],1)])])}))],2)])},A=[],L={name:"ChatMessages",data:function(){return{currentUserId:f.getUser()._id}},methods:{scrollToEnd:function(){var e=this;setTimeout((function(){e.$refs.chat.scrollTop=e.$refs.chat.scrollHeight-e.$refs.chat.clientHeight}),50)}},watch:{messages:function(){this.scrollToEnd()}},created:function(){this.currentUserId=f.getUser()._id},props:{messages:Array}},P=L,q=(s("0f9e"),Object(c["a"])(P,I,A,!1,null,"500ceaec",null)),M=q.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card bg-dark"},[s("div",{staticClass:"card-body"},[s("form",{staticClass:" row",on:{submit:function(t){return t.preventDefault(),e.send()}}},[s("div",{staticClass:" col-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text",id:"inputPassword2",placeholder:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._m(0)])])])},G=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-2"},[s("button",{staticClass:"btn btn-outline-primary btn-block ",attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-paper-plane"})])])}],D=s("b047"),F={name:"Composer",comments:{Picker:D["Picker"]},data:function(){return{message:""}},methods:{send:function(){this.$emit("send",this.message),this.message=""}}},B=F,H=Object(c["a"])(B,z,G,!1,null,"9b3f9384",null),J=H.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card bg-dark"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row "},[s("div",{staticClass:"col-2"},[s("img",{staticClass:"img-fluid rounded-circle",attrs:{src:"https://i.pravatar.cc/150?u="+e.user._id,width:"50",height:"50"}})]),s("div",{staticClass:"col-10"},[s("p",{staticStyle:{color:"wheat"}},[e._v(e._s(e.user.userName))]),e._m(0)])])])])},K=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticStyle:{color:"wheat","font-size":"10px"}},[s("i",{staticClass:"fas fa-dot-circle",staticStyle:{color:"greenyellow"}}),e._v(" online")])}],Q={name:"UserIndicator",props:{user:Object}},V=Q,W=Object(c["a"])(V,R,K,!1,null,"eddea996",null),X=W.exports,Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{ref:"chat",staticClass:"chat"},e._l(e.messages,(function(t){return s("div",{key:t._id},[t.message.from===e.currentUserId?s("div",{staticClass:"mine messages"},[s("div",{staticClass:"message last"},[e._v(" "+e._s(t.message.message)+" ")]),s("p",{staticStyle:{"font-size":"xx-small",color:"wheat"}},[s("timeago",{attrs:{datetime:t.message.createdAt}})],1)]):s("div",{staticClass:"yours messages"},[s("div",{staticClass:"message last"},[s("p",{staticStyle:{color:"gray","font-size":"10px"}},[e._v(" @ "+e._s(t.user.userName))]),e._v(" "+e._s(t.message.message)+" ")]),s("p",{staticStyle:{"font-size":"xx-small",color:"wheat"}},[s("timeago",{attrs:{datetime:t.message.createdAt}})],1)])])})),0)])},Z=[],ee={name:"GroupChatMessages",data:function(){return{currentUserId:f.getUser()._id}},methods:{scrollToEnd:function(){var e=this;setTimeout((function(){e.$refs.chat.scrollTop=e.$refs.chat.scrollHeight-e.$refs.chat.clientHeight}),50)}},watch:{messages:function(){this.scrollToEnd()}},created:function(){this.currentUserId=f.getUser()._id},props:{messages:Array}},te=ee,se=(s("8aaf"),Object(c["a"])(te,Y,Z,!1,null,"cb67b5da",null)),ae=se.exports,re=new Pusher("c43c8e473ffba0fd0a14",{cluster:"mt1",forceTLS:!0}),ie={name:"Index",components:{GroupChatMessages:ae,UserIndicator:X,Composer:J,ChatMessages:M,UsersList:O,NavBar:S},data:function(){return{message:"",messages:[],group_messages:[],chatType:"",online:f.getUser().online,users:[],selectedUser:null}},created:function(){this.getAllUsers(),this.listenForUsersConnections(),this.listenForUsersDisconnections()},methods:{send:function(e){this.message=e,"private"===this.chatType?this.addMessage():this.addMessageToGroupChat()},onSelectUser:function(e){this.chatType="private",this.selectedUser=e,this.getSelectedUserMessages(),this.listenForMessages()},selectGroup:function(){this.selectedUser=null,this.chatType="group",this.getGroupMessages(),this.listenForGroupMessages()},getAllUsers:function(){var e=this;w.a.get("https://sust-chat-app.herokuapp.com/users/index",{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(t){e.users=t.data})).catch((function(){}))},getSelectedUserMessages:function(){var e=this;w.a.post("https://sust-chat-app.herokuapp.com/chat/get_messages",{from:this.selectedUser._id.toString(),to:f.getUser()._id.toString()},{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(t){e.messages=t.data})).catch((function(){}))},getGroupMessages:function(){var e=this;w.a.get("https://sust-chat-app.herokuapp.com/group_chat/get_messages",{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(t){e.group_messages=t.data})).catch((function(){}))},addMessageToGroupChat:function(){this.group_messages.push({message:{message:this.message,from:f.getUser()._id,createdAt:Date.now()},user:{userName:f.getUser().userName,_id:f.getUser()._id}}),w.a.post("https://sust-chat-app.herokuapp.com/group_chat",{from:f.getUser()._id.toString(),message:this.message},{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(){})).catch((function(){}))},addMessage:function(){var e=this;this.messages.push({message:this.message,from:f.getUser()._id,createdAt:Date.now()}),w.a.post("https://sust-chat-app.herokuapp.com/chat",{from:f.getUser()._id.toString(),to:this.selectedUser._id.toString(),message:this.message},{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(){e.message=""})).catch((function(){}))},listenForMessages:function(){var e=this,t=re.subscribe("messages-".concat(f.getUser()._id,"-").concat(e.selectedUser._id));t.bind("send_message",(function(t){if(t.message.from!==f.getUser()._id){for(var s=!1,a=0;a<e.messages.length;a++)if(e.messages[a]._id===t["message"]._id){s=!0;break}s||e.messages.push(t["message"])}}))},listenForGroupMessages:function(){var e=this,t=re.subscribe("sust_group");t.bind("send_message",(function(t){if(t.message.message.from!==f.getUser()._id){for(var s=!1,a=0;a<e.group_messages.length;a++)if(e.group_messages[a].user._id===t["message"].user._id){s=!0;break}s||e.group_messages.push(t)}e.group_messages.push(t)}))},listenForUsersConnections:function(){var e=this,t=re.subscribe("attach_chat");t.bind("connected",(function(t){if(f.getUser()._id!==t["user"]._id){var s=e.users.map((function(e){return e._id===f.getUser()._id?e:null}));s[0]||e.users.push(t["user"])}else e.online=!0}))},listenForUsersDisconnections:function(){var e=this,t=re.subscribe("attach_chat");t.bind("disconnected",(function(t){if(f.getUser()._id!==t["user"]._id){var s=e.users.map((function(e){return e._id===t["user"]._id?e:null}));e.selectedUser&&e.selectedUser._id===t["user"]._id&&(e.selectedUser=null),e.users.splice(e.users.indexOf(s[0]),1)}else e.online=!1}))}}},ne=ie,oe=Object(c["a"])(ne,g,_,!1,null,"15bc48cc",null),ce=oe.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-4 offset-md-4"},[s("div",{staticClass:"card bg-dark"},[s("div",{staticClass:"card-body"},[e.showError?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.error_data)+" ")]):e._e(),s("h4",[e._v("Log in")]),s("div",{staticClass:"needs-validation"},[s("form",{staticClass:"needs-validation",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.email.$model,expression:"$v.email.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.email.$error,"is-valid":!e.$v.email.$invalid},attrs:{placeholder:"Email",id:"exampleInputEmail1",name:"email",type:"email"},domProps:{value:e.$v.email.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.email,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.email.email?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("invalid email")]),e.$v.email.required?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("Email required")])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.password.$model,expression:"$v.password.$model",modifiers:{trim:!0}}],staticClass:"form-control ",class:{"is-invalid":e.$v.password.$error,"is-valid":!e.$v.password.$invalid},attrs:{id:"exampleInputPassword1",placeholder:"Password",name:"password",type:"password"},domProps:{value:e.$v.password.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.password,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.password.minLength?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("min length is 4 character")]),e.$v.password.required?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("Password required")])]),s("button",{staticClass:"btn btn-info btn-block  text-center",attrs:{type:"submit"}},[this.isLoading?s("span",{staticClass:"spinner-border text-light",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):s("span",[e._v("Sign In")])]),s("router-link",{attrs:{to:"/signUp"}},[e._v("create new account")])],1)])])])])])])},ue=[],de=s("b5ae"),me={name:"SignIn",data:function(){return{password:"",email:"",showError:!1,error_data:"",isLoading:!1}},validations:{email:{required:de["required"],email:de["email"]},password:{required:de["required"],minLength:Object(de["minLength"])(4)}},methods:{submit:function(){this.$v.$touch(),this.$v.$invalid||(this.isLoading=!0,this.SignIn())},SignIn:function(){var e=this;w.a.post("https://sust-chat-app.herokuapp.com/auth",{email:this.email,password:this.password}).then((function(t){e.showError=!1,f.setToken(t.data["token"]),f.setToken(t.data["token"]),w.a.get("https://sust-chat-app.herokuapp.com/users",{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(){w.a.get("https://sust-chat-app.herokuapp.com/users/connected",{headers:{Authorization:"jwt ".concat(f.getUserToken())}}).then((function(t){f.setUser(JSON.stringify(t.data)),e.$router.push("/chat")})).catch((function(){}))})).catch((function(t){e.isLoading=!1,e.error_data=t,e.showError=!0}))})).catch((function(t){e.isLoading=!1,e.error_data=t,e.showError=!0}))}}},pe=me,he=Object(c["a"])(pe,le,ue,!1,null,"dc1deaf6",null),ve=he.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-4 offset-md-4"},[s("div",{staticClass:"card bg-dark"},[s("div",{staticClass:"card-body"},[e.showError?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.error_data)+" ")]):e._e(),s("h4",[e._v("New account")]),s("div",{staticClass:"needs-validation"},[s("form",{staticClass:"needs-validation",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.email.$model,expression:"$v.email.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.email.$error,"is-valid":!e.$v.email.$invalid},attrs:{placeholder:"Email",id:"exampleInputEmail1",name:"email",type:"email"},domProps:{value:e.$v.email.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.email,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.email.email?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("invalid email")]),e.$v.email.required?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("Email required")])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.userName.$model,expression:"$v.userName.$model",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.$v.userName.$error,"is-valid":!e.$v.userName.$invalid},attrs:{placeholder:"user name",id:"user_name",name:"userName",type:"email"},domProps:{value:e.$v.userName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.userName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.userName.required?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("user name required")])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.password.$model,expression:"$v.password.$model",modifiers:{trim:!0}}],staticClass:"form-control ",class:{"is-invalid":e.$v.password.$error,"is-valid":!e.$v.password.$invalid},attrs:{id:"exampleInputPassword1",placeholder:"Password",name:"password",type:"password"},domProps:{value:e.$v.password.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.password,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.password.minLength?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("min length is 4 character")]),e.$v.password.required?e._e():s("p",{staticClass:"invalid-feedback"},[e._v("Password required")])]),s("button",{staticClass:"btn btn-info btn-block  text-center",attrs:{type:"submit"}},[this.isLoading?s("span",{staticClass:"spinner-border text-light",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):s("span",[e._v("Sign Up")])]),s("router-link",{attrs:{to:"/signIn"}},[e._v("already have account ?")])],1)])])])])])])},ge=[],_e={name:"Register",data:function(){return{password:"",email:"",userName:"",showError:!1,error_data:"",isLoading:!1}},validations:{email:{required:de["required"],email:de["email"]},userName:{required:de["required"]},password:{required:de["required"],minLength:Object(de["minLength"])(4)}},methods:{submit:function(){this.$v.$touch(),this.$v.$invalid||(this.isLoading=!0,this.SignUp())},SignUp:function(){var e=this;w.a.post("https://sust-chat-app.herokuapp.com/users",{email:this.email,password:this.password,userName:this.userName,online:!1}).then((function(){e.showError=!1,e.$router.push("/signIn")})).catch((function(t){e.isLoading=!1,e.error_data=t,e.showError=!0}))}}},be=_e,Ce=Object(c["a"])(be,fe,ge,!1,null,"24530912",null),$e=Ce.exports,we=s("8682");s("1157");a["a"].config.productionTip=!1,a["a"].use(d["a"]),a["a"].use(p.a),a["a"].use(s("2c05"),{api_key:"c43c8e473ffba0fd0a14",options:{cluster:"mt1",forceTls:!0}}),a["a"].use(we["a"],{name:"Timeago",locale:"en",locales:{"zh-CN":s("f2d3"),ja:s("b805")}});var ye=[{path:"/chat",component:ce,meta:{requiresAuth:!0}},{path:"/SignIn",component:ve},{path:"/signUp",component:$e},{path:"*",component:ve}],Ue=new d["a"]({routes:ye,linkActiveClass:"active"});Ue.beforeEach((function(e,t,s){var a=e.matched.some((function(e){return e.meta.requiresAuth}));a?f.isAuth()?s():s("/SignIn"):f.isAuth()?s("/chat"):s()})),new a["a"]({router:Ue,render:function(e){return e(u)}}).$mount("#app")},"7a16":function(e,t,s){},"8aaf":function(e,t,s){"use strict";var a=s("7a16"),r=s.n(a);r.a},dd35:function(e,t,s){}});
//# sourceMappingURL=app.ef10dadf.js.map