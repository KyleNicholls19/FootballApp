import { useParams,Link } from 'react-router-dom';
import datajson from './NameConversion.json'
import React, { useState,useEffect } from 'react'
import { Flex, Center,Group,NavLink ,Stack} from '@mantine/core';
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
        const name = (datajson[params.league]).find((item) => item.url === params.name)

        return name.display
    }

    return(
        <>
        <Navbar></Navbar>

        <Stack align='stretch' className='stack'>
        <h1 className='league-title'>{displayName()}'s Fixtures</h1>

        <Flex direction='row' gap='lg' className='flex-link'>
            <Link to={`../table/${params.league}`} className='link'>  View Table  </Link>
            <Link to={`../table/${params.league}`} className='link'>  View Table  </Link>
        </Flex>

        {data.map((item) => (
            <>
            <h1 key={item.MatchDate} className='match-date'>{item.MatchDate}</h1>
                <div className='match' key={`${item.Team1}-${item.Team2}`}>
                    <div className='team1'>{item.Team1}</div>
                    <div className='time'>{item.Time}</div>
                    <div className='team2'>{item.Team2}</div>
                </div>
            </>
            
        ))}
        </Stack>


        
        </>
    )



}

export default TeamFixtures