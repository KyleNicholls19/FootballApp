import React, { useState,useEffect } from 'react'
import GetTable from './GetTable.jsx'
import NavBar from './NavBar.jsx'
import { MantineProvider } from '@mantine/core';


function App() {


  return (
    <>
      <MantineProvider defaultColorScheme='auto'>
        <NavBar/>
        <GetTable league={'Bundesliga'}/>
      </MantineProvider>
    </>
  )
}

export default App
