import { useParams,Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar.jsx';
import { Flex, Center,Group,NavLink,Box,Stack } from '@mantine/core';
import  DisplayNameLeague  from '../Helpers.jsx'


function DisplayLeagueFixtures(){

    const params = useParams()


    return(
        <>
        <Navbar></Navbar>
    
        
        <Stack align='stretch' className='stack'>

        <h1 className='league-title'>{DisplayNameLeague(params.league)} Fixtures</h1>
        <Flex direction='row' gap='lg' className='flex-link'>
        <Link to={`../table/${params.name}`} className='link'>  View Table  </Link>
        <Link to={`../table/${params.name}`} className='link'>  View Table  </Link>
        </Flex>

        </Stack>
        
        </>
    )

}

export default DisplayLeagueFixtures