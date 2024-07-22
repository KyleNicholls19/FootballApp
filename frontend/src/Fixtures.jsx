import { useParams,Link } from 'react-router-dom';
import React, { useState,useEffect,useMemo } from 'react'
import Navbar from './Navbar.jsx';

function Fixtures() {
    const params = useParams()
    const [data,setData] = useState([])

    const isLeague = params.isLeague === 'league'? true : false

    async function getFixtures(isLeague, name){
        if (isLeague){
            const url = `http://127.0.0.1:5000/fixtures/league/${name}`
            const response = await fetch(url)
            const data = await response.json()

            for (const key in data) {
                const newData = {MatchDate: Object.values(data[key])[0],Team1:Object.values(data[key])[1],Team2:Object.values(data[key])[2],Time:Object.values(data[key])[3],}
                setData(d => [...d,newData])
            }
        }

    }


    useEffect(() => {
        getFixtures(isLeague,params.name)

        return (
            setData([])
        )
    },[params.name])


    let matchList = []
    function Group() {
        return(data.map((item) => {
            if(!matchList.includes(item.MatchDate)){
            
                matchList.push(item.MatchDate)
 
                return (
                <>
                <h1 key={item.MatchDate}>{item.MatchDate}</h1>
                <p key={`${item.Team1}-${item.Team2}`}>{item.Team1} vs {item.Team2} at {item.Time}</p>
                </>
                )
                
            }
            return <p key={`${item.Team1}-${item.Team2}`}>{item.Team1} vs {item.Team2} at {item.Time}</p>
    
        }))
 
    }



    return(
        <>
        <Navbar></Navbar>
        <Link to={`../table/${params.name}`}>Table</Link>
        
        {Group()}
        
        
        </>

    )

}

export default Fixtures