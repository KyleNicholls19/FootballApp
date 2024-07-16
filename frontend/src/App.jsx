import { useState,useEffect } from 'react'


function App() {

  const [table,setTable] = useState([]);

  useEffect(() => {
    getTable()
  },[])

  async function getTable() {
    const response = await fetch('http://127.0.0.1:5000/table')
    const data = await response.json()

    for (const key in data) {
      const newData = {Pos: Object.values(data[key])[0], Team: data[key].Team, Pl: data[key].Pl,W: data[key].W,D: data[key].D,L: data[key].L,F: data[key].F,
        A: data[key].A,GD: data[key].GD,Pts: data[key].Pts}

      setTable(table.push(newData))
      
    }


    console.log(table)
  }

  return (
    <>

    </>
  )
}

export default App
