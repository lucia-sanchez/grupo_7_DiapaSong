import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Home} from '../pages/Home';
import {Products} from '../pages/Products';
import {Users} from '../pages/Users';
import {Chefs} from '../pages/Chefs';
import { Root } from "../components/Root";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Root/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/products",
                element : <Products/>
            },
            {
                path : "/users",
                element : <Users/>
            },
            {
                path : "/chefs",
                element : <Chefs/>
            }
        ]
    },
 
])

export const AppRouter = () => {
  return <RouterProvider router={router}/>;
};
