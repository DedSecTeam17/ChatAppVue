import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import {UserSession} from "./Services/user_session";
import Index from "./components/chat/Index";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import 'jquery';
// import 'bootstrap/dist/js/bootstrap';
// // import 'bootstrap'
// // import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.use(require('vue-pusher'), {
    api_key: 'c43c8e473ffba0fd0a14',
    options: {
        cluster: 'mt1',
        forceTls: true,
    }
});

const routes = [
    {
        path: '/chat',
        component: Index,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/SignIn',
        component: SignIn
    },
    {
        path: '/signUp',
        component: SignUp
    },
    {
        path: '*',
        component: SignIn
    }

];

const router = new VueRouter({routes, linkActiveClass: "active",})

router.beforeEach(((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requireAuth) {
        if (UserSession.isAuth()) {
            next()
        } else {
            next('/SignIn')

        }
    } else {

        if (UserSession.isAuth()) {
            next('/chat')
        } else {

            next()

        }
    }
}));


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
