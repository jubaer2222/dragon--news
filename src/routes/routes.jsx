import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader:()=> fetch("/news.json")
            }
        ]
    },
   
    {
        path: "/news",
        element: <h2>News Layout</h2>
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>
    }
]);

export default router;