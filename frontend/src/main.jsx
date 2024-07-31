import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import Routes from './Routes.jsx'
import { MantineProvider } from '@mantine/core'


ReactDOM.createRoot(document.getElementById('root')).render(

  <MantineProvider defaultColorScheme='dark'>
    <RouterProvider router={Routes()}/>
  </MantineProvider>
)
