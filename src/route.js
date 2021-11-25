// import App from "./App"
const container = () => import("@/views/container")
const HelloWorld = () => import("@/views/HelloWorld")
const Snow = () => import("@/views/Snow")

const Home = () => import("@/views/Home")
const Login = () => import("@/views/Login")

export default [
  {
    path: "/",
    component: container,
    children: [
      {
        path: "/hello",
        alias: "/hi",
        component: HelloWorld,
      },
      {
        path: "/snow",
        component: Snow,
      },
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/*",
        redirect: '/login',
        component: Snow,
      },
    ],
  },
]
