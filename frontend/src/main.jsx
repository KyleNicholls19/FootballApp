import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Routes from './Routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Routes()}/>
)
