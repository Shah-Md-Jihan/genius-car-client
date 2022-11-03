import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
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
        }
        ]
    }
]);

export default routes;