import App from "./App"
const container = () => import("@/components/container")
const HelloWorld = () => import("@/components/HelloWorld")
const Snow = () => import("@/components/Snow")

export default [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/hello",
        component: HelloWorld,
      },
      {
        path: "/snow",
        component: Snow,
      },
      {
        path: "/*",
        component: container,
      },
    ],
  },
]
