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
        path: "plan",
        lazy: async () => {
          let Plan = await import("@/pages/Plan")
          return { Component: Plan.default }
        }
      },
      {
        path: "status",
        lazy: async () => {
          let Status = await import("@/pages/Status")
          return { Component: Status.default }
        }
      },
      {
        path: "audit",
        lazy: async () => {
          let Audit = await import("@/pages/Audit")
          return { Component: Audit.default }
        }
      },
      {
        path: "config",
        lazy: async () => {
          let Configuration = await import("@/pages/Configuration")
          return { Component: Configuration.default }
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

