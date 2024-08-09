import { useParams,Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react'

function LeagueFixtures() {
    const params = useParams()
    const [data,setData] = useState([])


    async function getFixtures(name){
        const url = `http://127.0.0.1:5000/fixtures/league/${name}`
        const response = await fetch(url)
        const data = await response.json()


        for (const key in data) {
            const newData = {MatchDate: Object.values(data[key])[0],Team1:Object.values(data[key])[1],Team2:Object.values(data[key])[2],Time:Object.values(data[key])[3],}
            setData(d => [...d,newData])
        }

    }


    useEffect(() => {
        getFixtures(params.name)

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
                <h1 key={item.MatchDate} className='match-date'>{item.MatchDate}</h1>
                <div className='match' key={`${item.Team1}-${item.Team2}`}>
                    <div className='team1'>{item.Team1}</div>
                    <div className='time'>{item.Time}</div>
                    <div className='team2'>{item.Team2}</div>
                </div>
                </>
                )
                
            }
            return ( 
            <>
            <div className='match' key={`${item.Team1}-${item.Team2}`}>
                <div className='team1'>{item.Team1}</div>
                <div className='time'>{item.Time}</div>
                <div className='team2'>{item.Team2}</div>
            </div>
            </>
            )
    
        }))
 
    }


    return(
        <>       
        {Group()}               
        </>

    )

}
export default LeagueFixtures