import React, { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';

function TeamResults() {
    const params = useParams()
    const [data,setData] = useState([])


    async function getResults(name){
        const url = `http://127.0.0.1:5000/results/team/${name}`
        const response = await fetch(url)
        const data = await response.json()


        for (const key in data) {
            const newData = {
                MatchDate: Object.values(data[key])[0],
                Team1:Object.values(data[key])[1],
                Team2:Object.values(data[key])[2],
                Score1:Object.values(data[key])[3],
                Score2:Object.values(data[key])[4],
                Notes:Object.values(data[key])[5],
                FixtureType:Object.values(data[key])[6]}

            setData(d => [...d,newData])
        }

    }

    useEffect(() => {
        getResults(params.name)

        return (
            setData([])
        )

    },[params.name])




    return(
        <>
        {data.map((item)=> (
            <>
            <h1 key={item.MatchDate} className='match-date'>{item.MatchDate}</h1>

            <div className='match' key={`${item.Team1}-${item.Team2}`}>
                    <div className='team1'>{item.Team1}</div>
                    <div className='score-container'>
                        <div className='scores'>{item.Score1}</div>
                        <div className='scores'>{item.Score2}</div>
                    </div>                 
                    <div className='team2'>{item.Team2}</div>
                    <div className='fixture-type'>{item.FixtureType}</div>
                    <div className='notes'>{item.Notes}</div>
            </div>
            
            </>
        ))}
        </>
    )


}

export default TeamResults
