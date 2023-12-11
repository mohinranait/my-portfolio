import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const myRoutes = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout />,
        errorElement: <>Error page</>,
        children: [
            {
                path: '/',
                element : <Home />
            },
            {
                path: "/login",
                element : <Login />
            },
            {
                path: "/register",
                element : <Register />
            }
        ]
    }
])

export default myRoutes;