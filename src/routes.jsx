import { createBrowserRouter } from "react-router";
import Forget from "./pages/forget/Forget";
import RePass from "./pages/rePass/RePass";
import ErrorPage from "./pages/error/ErrorPage";
import MainLayout from "./Layout/MainLayout";
import Continue from "./pages/continue/Continue"
import Home from "./home/Home";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";

const routers = createBrowserRouter([
{
    path:'/',
    element:<MainLayout/> ,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Register/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/login',
            element:<Login/>

        },
        {
            path:'/register',
            element:<Register/>
        },
        {
             path:'/cart',
             element:<Cart/>
        },
        {
  path: "/Forget",
  element: <Forget />
},
  {
  path: "/RePass",
  element: <RePass />
},{
  path: "/Continue",
  element: <Continue />
}


    ],
}
]);
export default routers;

