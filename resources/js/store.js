import { getLocalUser } from "./helpers/Auth";
import { longStackSupport } from "q";
import Axios from "axios";

const user = getLocalUser();

export default {
    state: {
        current_user: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: []
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoading;
        },
        current_user(state) {
            return state.current_user;
        },
        customers(state) {
            return state.customers;
        },
        auth_error(state) {
            return state.auth_error;
        }
    },

    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        login_success(state, payload) {
            state.auth_error = null;
            state.isLoading = false;
            state.isLoggedIn = true;
            state.current_user = Object.assign({}, payload.user, {
                token: payload.access_token
            });
            localStorage.setItem("user", JSON.stringify(state.current_user));
        },
        login_failed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.current_user = null;
        },
        updateCustomers(state, payload) {
            state.customers = payload;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        getCustomers(context) {
            Axios.get("/api/customers", {
                headers: {
                    Authorization: `Bearer ${context.state.current_user.token}`
                }
            }).then(res =>
                context.commit("updateCustomers", res.data.customers)
            );
        }
    }
};
