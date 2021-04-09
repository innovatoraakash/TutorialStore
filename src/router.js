import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            alias: "/tutorials",
            name: "tutorials",
            component: () =>
                import ("./components/TutorialsList")
        },
        {
            path: "/login",
            name: 'login',
            description: "login",
            component: () =>
                import ("./components/authentication/Login")
        },
        {
            path: "/signup",
            description: "sighup",
            component: () =>
                import ("./components/authentication/Signup")
        },
        {
            path: "/forgetpass ",
            name: "forget",
            component: () =>
                import ("./components/authentication/ForgotPassword")
        },
        {
            path: "/tutorials/:id",
            description: "tutorial-details",
            component: () =>
                import ("./components/Tutorial")
        },
        {
            path: "/add",
            description: "add",
            component: () =>
                import ("./components/AddTutorial")
        }
    ]
})