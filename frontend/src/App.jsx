import { useState,useEffect } from 'react'


function App() {

  const [table,setTable] = useState();

  useEffect(() => {
    getTable()
  },[])

  async function getTable() {
    const response = await fetch('http://127.0.0.1:5000/table')
    const data = await response.json()

    for (const key in data) {
      for (const item in data[key]){
        console.log(data[key][item])
      }
    }

    //console.log(data)
  }

  return (
    <>

    </>
  )
}

export default App
