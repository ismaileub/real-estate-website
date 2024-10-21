import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Components/Root/Root";
import HouseDetails from "../Components/House/HouseDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Userprofile from "../Pages/UserProfile/Userprofile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <div className="text-center mt-20 "> Page Not Found</div>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const response = await fetch('/data.json');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                }

            },
            {
                path: '/houseDetails/:id',
                element: <PrivateRoute>
                    <HouseDetails></HouseDetails>
                </PrivateRoute>,
                loader: async () => {
                    const response = await fetch('/data.json');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                }

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/userProfile',
                element: <PrivateRoute>
                    <Userprofile></Userprofile>
                </PrivateRoute>
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            }
        ]


    }
])

export default router;