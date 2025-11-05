import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";

export const routes = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login />},
      {path: "/signup", element: <Signup />},
       {path: "/dashboard", element: <Dashboard />}
    ],
  },
]);
