import React,{useState,useEffect} from 'react'

function App() {

  const [data,setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
    {setTimeout(()=> {
      (typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((data,i) => (
          <p key={i}>{data}</p>
        ))
      )
    },1000)}

    </div>
  )
}

export default App