import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Home} from '../pages/Home';
import {Courses} from '../pages/Courses';
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
                path : "/courses",
                element : <Courses/>
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
