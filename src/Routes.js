import { Navigate,useRoutes} from "react-router-dom";
import Home from "./component/pages/Home/Home";
import Magazine from "./component/pages/Magazine/magazine";
import Page404 from "./component/pages/Page404/Page404";
import Business from "./component/pages/Business/Business";
import Sports from "./component/pages/Sports/Sports";
import Politics from "./component/pages/Politics/Politics";

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
            path:'/magazine',
            element: <Magazine/>,
        },
        {
            path:'/business',
            element: <Business/>,
        },
        {
            path:'/sports',
            element: <Sports/>,
        },
        {
            path:'/politics',
            element: <Politics/>,
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