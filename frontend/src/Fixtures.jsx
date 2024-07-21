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
    console.log(data)

    useEffect(() => {
        getFixtures(isLeague,params.name)

        return (
            setData([])
        )
    },[params.name])


    return(
        <>
        <Navbar></Navbar>
        <Link to={`../table/${params.name}`}>Table</Link>
        <ul>
        {data.map((item) => (
            <li>Match Date: {item.MatchDate}, {item.Team1} vs {item.Team2} at {item.Time}</li>

        ))}
        </ul>
        
        </>

    )

}

export default Fixtures