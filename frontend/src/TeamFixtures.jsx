import { useParams,Link } from 'react-router-dom';
import {teams,names} from './NameConversion.json'
import React, { useState,useEffect } from 'react'
import { Flex, Center,Group,NavLink } from '@mantine/core';
import Navbar from './Navbar.jsx';

function TeamFixtures() {
    const params = useParams()
    const [data,setData] = useState([])


    async function getFixtures(name){
        const url = `http://127.0.0.1:5000/fixtures/team/${name}`
        const response = await fetch(url)
        const data = await response.json()

        for (const key in data) {
            const newData = {MatchDate: Object.values(data[key])[0],Team1:Object.values(data[key])[1],Team2:Object.values(data[key])[2],Time:Object.values(data[key])[3],FixtureType:Object.values(data[key])[4]}
            setData(d => [...d,newData])
        }


    }

    useEffect(() => {
        getFixtures(params.name)

        return (
            setData([])
        )
    },[params.name])


    const displayName = () =>{
        const name = teams.find((item) => item.url === params.name)

        return name.display
    }

    return(
        <>
        <Navbar></Navbar>

        <Flex direction='column' align='center'>
        <h1>{displayName()}'s Fixtures</h1>
        {data.map((item) => (
            <>
            <h1 key={item.MatchDate} className='match-date'>{item.MatchDate}</h1>
            <p key={`${item.Team1}-${item.Team2}-${item.FixtureType}`}>{item.Team1} {item.Time} {item.Team2} {item.FixtureType}</p>
            </>
            
        ))}
        </Flex>


        
        </>
    )



}

export default TeamFixtures