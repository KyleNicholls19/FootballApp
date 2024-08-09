import { useParams,Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar.jsx';
import { Flex, Center,Group,NavLink,Box,Stack } from '@mantine/core';
import {names} from '../NameConversion.json'
import { MantineProvider } from '@mantine/core'


function DisplayLeagueFixtures(){

    const params = useParams()


    const displayName = () =>{
        const name = names.find((item) => item.url === params.name)

        return name.display
    }


    return(
        <>
        <Navbar></Navbar>
    
        
        <Stack align='stretch' className='stack'>

        <h1 className='league-title'>{displayName()} Fixtures</h1>
        <Flex direction='row' gap='lg' className='flex-link'>
        <Link to={`../table/${params.name}`} className='link'>  View Table  </Link>
        <Link to={`../table/${params.name}`} className='link'>  View Table  </Link>
        </Flex>

        </Stack>
        
        </>
    )

}

export default DisplayLeagueFixtures