// import App from "./App"
const container = () => import("@/views/container")
const HelloWorld = () => import("@/views/HelloWorld")
const Snow = () => import("@/views/Snow")

const Home = () => import("@/views/Home")
const Login = () => import("@/views/Login")
const Article = () => import("@/views/Article")

const Navigation = () => import("@/views/navigation")

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
        path: "/article",
        component: Article,
      },
      {
        path: "/navigation",
        component: Navigation,
      },
      {
        path: "/*",
        redirect: '/navigation',
        component: Snow,
      },
    ],
  },
]
