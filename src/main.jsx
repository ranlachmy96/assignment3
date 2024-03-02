import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import GetAllCases from './pages/GetAllCases';
import DeleteCase from "./pages/DeleteCase";
import AddCase from "./pages/AddCase";
import UpdateCase from "./pages/UpdateCase";
import GetOneCase from "./pages/GetOneCase";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1>404 I am sorry Mario it's seems like the princes is in a different castle...</h1>
    },
    {
        path: '/pages/GetAllCases',
        element: <GetAllCases/>,
    },
    {
        path: '/pages/GetOneCase',
        element: <GetOneCase/>,
    },
    {
        path: '/pages/addCase',
        element: <AddCase/>,
    },
    {
        path: '/pages/UpdateCase',
        element: <UpdateCase/>,
    },
    {
        path: '/pages/DeleteCase',
        element: <DeleteCase/>,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
