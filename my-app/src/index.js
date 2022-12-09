import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginView from './components/Login/LoginView'
import Partners from './components/Admin/Partners'
import Products from './components/Admin/Products'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import WaitersLayout from './components/Waiters/WaitersLayout'
import getData from './getData'
import Kitchen from './components/Kitchen/Kitchen'
import PreparedContainer from './components/Kitchen/PreparedContainer'
import OrdersReady from './components/Waiters/OrdersReady'

const urlUsers = 'https://6372d80a348e947299fdd17b.mockapi.io/users'
const urlProducts = 'https://6372d80a348e947299fdd17b.mockapi.io/products'
const urlOrders = "https://6372d80a348e947299fdd17b.mockapi.io/orders";

const router = createBrowserRouter([
 
    {
        path: '/',
        element: <LoginView />,
        loader: ({ request, params }) => {
            return getData(urlUsers)
        },
    },
    {
        path: '/admin/partners',
        element: <Partners />,
        loader: ({ request, params }) => {
            return getData(urlUsers)
        }
    },
    {
        path: '/admin/products',
        element: <Products />,
        loader: ({ request, params }) => {
            return getData(urlProducts)
        },
    },
    {
        path: '/waiters/new_order',
        element: <WaitersLayout />,
        loader: ({ request, params }) => {
            return getData(urlProducts)
        },
    },
    {
        path: '/waiters/ready',
        element: <OrdersReady />,
        loader: ({ request, params }) => {
            return getData(urlOrders)
        },
    },
    {
        path: '/kitchen/active',
        element: <Kitchen />,
        loader: ({ request, params}) =>{
            return getData(urlOrders)
        }
    },
    {
        path: '/kitchen/prepared',
        element: <PreparedContainer />,
        loader: ({ request, params}) =>{
            return getData(urlOrders)
        }
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
