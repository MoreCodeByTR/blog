// import App from "./App"
const container = () => import("@/views/container")
const HelloWorld = () => import("@/views/HelloWorld")
const Snow = () => import("@/views/Snow")

const Home = () => import("@/views/Home")
const Login = () => import("@/views/Login")
const Article = () => import("@/views/Article")
const MarkDown = () => import("@/views/MarkDown")
const Notes = () => import("@/views/Notes")

const Navigation = () => import("@/views/navigation")
const Test = () => import("@/views/Test")

export default [
  {
    path: "/",
    component: container,
    children: [
      {
        path: "/test",
        component: Test,
      },
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
        path: "/markdown/:articleName",
        component: MarkDown,
      },
      {
        path: "/notes/:articleName",
        component: Notes,
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
