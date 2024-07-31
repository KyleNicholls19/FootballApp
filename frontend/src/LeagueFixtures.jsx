import { useParams,Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react'
import Navbar from './Navbar.jsx';
import { Flex, Center,Group,NavLink,Box,Stack } from '@mantine/core';
import {names} from './NameConversion.json'
import { MantineProvider } from '@mantine/core'

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
                    <div className='teams'>{item.Team1}</div>
                    <div className='time'>{item.Time}</div>
                    <div className='teams'>{item.Team2}</div>
                </div>
                </>
                )
                
            }
            return ( 
            <>
            <div className='match' key={`${item.Team1}-${item.Team2}`}>
                <div className='teams'>{item.Team1}</div>
                <div className='time'>{item.Time}</div>
                <div className='teams'>{item.Team2}</div>
            </div>
            </>
            )
    
        }))
 
    }

    const displayName = () =>{
        const name = names.find((item) => item.url === params.name)

        return name.display
    }

    return(
        <>
        
        <Navbar></Navbar>

        <Link to={`../table/${params.name}`}>Table</Link>
        
        
        <Stack align='stretch' className='stack'>
        <h1>{displayName()} Fixtures</h1>
        {Group()}
        </Stack>
        
        
        </>

    )

}
export default LeagueFixtures