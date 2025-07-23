import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeComp from "../pages/home/HomeComp";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomeComp /> },
      { path: "/about", element: <HomeComp /> },
    ],
  },
]);