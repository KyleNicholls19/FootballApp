import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Home.jsx'
import PageNotFound from './PageNotfound.jsx'
import GetTable from './GetTable.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: '/table/:leagueName',
    element: <GetTable/>
  }
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
