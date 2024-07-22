import { useParams,Link } from 'react-router-dom';
import React, { useState,useEffect,useMemo } from 'react'
import Navbar from './Navbar.jsx';
import { Flex, Center,Group } from '@mantine/core';
import {names} from './NameConversion.json'

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
                <h1 key={item.MatchDate} className='match-date'>{item.MatchDate}</h1>
                <p key={`${item.Team1}-${item.Team2}`}>{item.Team1} {item.Time} {item.Team2}</p>
                </>
                )
                
            }
            return <p key={`${item.Team1}-${item.Team2}`}>{item.Team1} {item.Time} {item.Team2}</p>
    
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
        <Center>
        <Flex direction='column' align='center'>
        <h1>{displayName()} Fixtures</h1>
        {Group()}
        </Flex>
        </Center>
        
        
        </>

    )

}

export default Fixtures