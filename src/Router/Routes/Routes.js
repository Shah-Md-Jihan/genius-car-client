import Main from "../../Layouts/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Order from "../../Pages/Orders/Order";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/orders',
            element: <PrivateRoute><Order></Order></PrivateRoute>
        }
        ]
    }
]);

export default routes;