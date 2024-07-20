import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Home.jsx'
import PageNotFound from './PageNotfound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <PageNotFound/>,
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
