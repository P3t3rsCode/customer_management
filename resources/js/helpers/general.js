import Axios from "axios";

export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requireAuth);
        const current_user = store.state.current_user;
        if (requiresAuth && !current_user) {
            next("/login");
        } else if (to.path == "/login" && current_user) {
            next("/");
        } else next();
    });

    Axios.interceptors.response.use(null, err => {
        console.log("interceptor");
        if (err.response.status == 401) {
            console.log("in the if");
            store.commit("logout");
            router.push("/");
        }
        return Promise.reject(err);
    });
}
