import React, { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { Flex, Center,Group,NavLink } from '@mantine/core';
import datajson from './NameConversion.json'

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

    const displayName = () =>{
        const name = (datajson[params.league]).find((item) => item.url === params.name)

        return name.display
    }


    return(
        <>
        <Navbar></Navbar>
        <h1>{displayName()}'s Results</h1>
        {data.map((item)=> (
            <p key={`${item.Team1}-${item.Team2}`}>{item.Team1} {item.Score1} {item.Score2} {item.Team2} {item.Notes}</p>
        ))}
        </>
    )


}

export default TeamResults
