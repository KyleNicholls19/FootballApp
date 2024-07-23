import { useParams,Link } from 'react-router-dom';
import {PremierLeagueTeams,names} from './NameConversion.json'
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
        const name = PremierLeagueTeams.find((item) => item.url === params.name)

        return name.display
    }

    return(
        <>
        <Navbar></Navbar>

        <NavLink        
        href="#required-for-focus"
        label="Competitions"
        childrenOffset={28}
        >
            {names.map((item) => (
                <NavLink component={Link} to={`/fixtures/league/${item.url}`} key={item.url} label={item.display}/>
              ))}

        </NavLink>
        <NavLink        
        href="#required-for-focus"
        label="Teams"
        childrenOffset={28}
        >
            {PremierLeagueTeams.map((item) => (
                <NavLink component={Link} to={`/fixtures/team/${item.url}`} key={item.url} label={item.display}/>
              ))}

        </NavLink>

        
        {data.map((item) => (
            <>
            <h1 key={item.MatchDate} className='match-date'>{item.MatchDate}</h1>
            <p key={`${item.Team1}-${item.Team2}-${item.FixtureType}`}>{item.Team1} {item.Time} {item.Team2} {item.FixtureType}</p>
            </>
            
        ))}


        
        </>
    )



}

export default TeamFixtures