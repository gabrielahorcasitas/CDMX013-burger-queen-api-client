import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginView from './components/Login/LoginView'
import Partners from './components/Admin/Partners'
import Products from './components/Admin/Products'
import WaitersLayout from './components/Waiters/WaitersLayout'
import getData from './getData'
import Kitchen from './components/Kitchen/Kitchen'
import PreparedContainer from './components/Kitchen/PreparedContainer'
import OrdersReady from './components/Waiters/OrdersReady'
import ErrorLayout from './ErrorLayout'

const urlUsers = 'https://6372d80a348e947299fdd17b.mockapi.io/users'
const urlProducts = 'https://6372d80a348e947299fdd17b.mockapi.io/products'
const urlOrders = "https://6372d80a348e947299fdd17b.mockapi.io/orders";

export default function App() {
    const [user, setUser] = useState(null)

    const handleAccount = (userAuth) => {
        setUser(userAuth)
    }

    const routerNoAuth = createBrowserRouter([

        {
            path: '/',
            element: <LoginView handleAccount={handleAccount} />,
            loader: ({ request, params }) => {
                return getData(urlUsers)
            },
        },
        {
            path: '*',
            element: < ErrorLayout handleAccount={handleAccount} />,

        },
    ])

    const routerAuth = createBrowserRouter([

        {
            path: '/admin/partners',
            element: <Partners handleAccount={handleAccount} />,
            loader: ({ request, params }) => {
                return getData(urlUsers)
            }
        },
        {
            path: '/admin/products',
            element: <Products handleAccount={handleAccount} />,
            loader: ({ request, params }) => {
                return getData(urlProducts)
            },
        },
        {
            path: '/waiters/new_order',
            element: <WaitersLayout user={user} handleAccount={handleAccount} />,
            loader: ({ request, params }) => {
                return getData(urlProducts)
            },
        },
        {
            path: '/waiters/ready',
            element: <OrdersReady handleAccount={handleAccount} />,
            loader: ({ request, params }) => {
                return getData(urlOrders)
            },
        },
        {
            path: '/kitchen/active',
            element: <Kitchen handleAccount={handleAccount} />,
            loader: ({ request, params }) => {
                return getData(urlOrders)
            }
        },
        {
            path: '/kitchen/prepared',
            element: <PreparedContainer handleAccount={handleAccount} />,
            loader: ({ request, params }) => {
                return getData(urlOrders)
            }
        },
    ])



    return (
        <>
            {user ? <RouterProvider router={routerAuth} /> : <RouterProvider router={routerNoAuth} />}
        </>
    )
}
