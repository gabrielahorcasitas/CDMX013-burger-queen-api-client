import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginView from './components/Login/LoginView';
import Admin from './components/Admin/AdminView';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import WaitersLayout from './components/Waiters/WaitersLayout';
import axios from 'axios';
import Kitchen from './components/Kitchen/Kitchen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView/>,
    loader:({request,params}) => {
      return axios.get('https://6372d80a348e947299fdd17b.mockapi.io/users').then(response =>{
        return response.data;
      })
    }
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/waiters/new_order",
    element: <WaitersLayout/>,
    loader:({request,params}) => {
      return axios.get('https://6372d80a348e947299fdd17b.mockapi.io/products').then(response =>{
        return response.data;
      })
    }
  },
  {
    path: "/kitchen/active",
    element: <Kitchen/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
