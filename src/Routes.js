import { Navigate,useRoutes} from "react-router-dom"
import Home from "./component/pages/Home"
import Page404 from "./component/pages/Page404";

export default function Routes(){
    return useRoutes([
        {
            path:'/home',
            element: <Home/>,
        },
        {
            path:'/',
            element: <Navigate to="/home" />,
        },
        {
            path: '*',
            element: <Navigate to="/404" />,
        },
        { 
            path: '404',
            element: <Page404/>, 
        },
    ]);
}