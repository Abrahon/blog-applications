import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddBlog from "../../Pages/AddBlog/AddBlog";
import Blog from "../../Pages/Blog/Blog";
import BlogCard from "../../Pages/Blog/BlogCard";
import EditBlog from "../../Pages/Blog/EditBlog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>

            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addblog',
                element:<AddBlog></AddBlog>

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/blogcard',
                element:<BlogCard></BlogCard>
            },
            {
                path:'/editblog/:id',
                element:<EditBlog></EditBlog>
            }
        ]
    }
])