import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, Layout } from "../layout/Layout";
import HomeComp from "../pages/homepage/HomeComp";
import AboutComp from "../pages/about/AboutComp";
import EstateComp from "../pages/estate/EstateComp";
import EcomComp from "../pages/e_commerce/EcomComp";
import ProductComp from "../pages/product_page/ProductComp";
import JoinNetwork from "../pages/auth/JoinNetwork";
import SignIn from "../pages/auth/SignIn";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomeComp /> },
      { path: '/about', element: <AboutComp /> },
      { path: '/our-estate', element: <EstateComp /> },
      { path: '/marketplace', element: <EcomComp /> },
      { path: '/product', element: <ProductComp /> },
      { path: '/e-commerce', element: <EcomComp /> },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '/auth/join-network', element: <JoinNetwork /> },
      { path: '/auth/sign-in', element: <SignIn /> },
    ],
  },
]);