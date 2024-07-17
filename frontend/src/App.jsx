import React, { useState,useEffect } from 'react'
import GetTable from './GetTable.jsx'


function App() {


  return (
    <>
      <GetTable league={'Bundesliga'}/>
      <GetTable league={'PremierLeague'}/>
      <GetTable league={'SerieA'}/>
      <GetTable league={'Ligue1'}/>
      <GetTable league={'LaLiga'}/>
    </>
  )
}

export default App
