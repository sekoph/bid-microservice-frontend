import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Auction from './pages/Auction'
import Users from './pages/Users'
import Products from './pages/Products'
import AuthLayout from './layouts/AuthLayout'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'


const router = createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout />,
        children:[
            {
                path:"/",
                element:<SignIn/>
            },
            {
                path:"SignUp",
                element:<SignUp/>
            }
        ]
    },
    {
        path:"/home",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<Dashboard />
            },
            {
                path:"auction",
                element:<Auction/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"users",
                element: <Users/>
            }
        ]
    }
])

export default router