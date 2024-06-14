import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

let router = createBrowserRouter([

  {
    path: "/auth",
    lazy: async () => {
      let Auth = await import("@/pages/Auth")
      return { Component: Auth.default }
    },
  },
  {
    path: "/",
    lazy: async () => {
      let Dashboard = await import("@/layout/Dashboard")
      return { Component: Dashboard.default }
    },
    children: [
      {
        path: "home",
        lazy: async () => {
          let Home = await import("@/pages/Home")
          return { Component: Home.default }
        }
      },
      {
        path: "list",
        lazy: async () => {
          let List = await import("@/pages/List")
          return { Component: List.default }
        }
      },
      {
        path: "stats",
        lazy: async () => {
          let Stats = await import("@/pages/Stats")
          return { Component: Stats.default }
        }
      },
      {
        path: "search",
        lazy: async () => {
          let Search = await import("@/pages/Search")
          return { Component: Search.default }
        }
      },
      {
        path: "setting",
        lazy: async () => {
          let Setting = await import("@/pages/Settings")
          return { Component: Setting.default }
        }
      },
      {
        path: "notification",
        lazy: async () => {
          let Notification = await import("@/pages/Notification")
          return { Component: Notification.default }
        }
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}
export default App

