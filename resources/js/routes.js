import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CustomersMain from "./components/Customers/Main";
import CustomersList from "./components/Customers/List";
import Customer from "./components/Customers/View";
import NewCustomer from "./components/Customers/New";
export const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/customers",
        component: CustomersMain,
        meta: {
            requireAuth: true
        },
        children: [
            {
                path: "/",
                component: CustomersList
            },
            {
                path: "new",
                component: NewCustomer
            },
            {
                path: ":id",
                component: Customer
            }
        ]
    }
];
