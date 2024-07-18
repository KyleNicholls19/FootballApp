import React, { useState,useEffect } from 'react'
import GetTable from './GetTable.jsx'
import NavBar from './NavBar.jsx'


function App() {


  return (
    <>
      <NavBar/>
      <GetTable league={'Bundesliga'}/>
    </>
  )
}

export default App
