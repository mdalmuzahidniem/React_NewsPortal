import { useRoutes} from "react-router-dom"
import Home from "./component/pages/Home"

export default function Routes(){
    return useRoutes([
        {
            path:'/',
            element: <Home/>,
        }
    ]);
}