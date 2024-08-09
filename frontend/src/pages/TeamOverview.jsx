import { useParams,Link } from 'react-router-dom';
import names from '../NameConversion.json'
import React, { useState,useEffect } from 'react'
import { Flex, Center,Group,NavLink ,Stack,Grid,ScrollArea,Box} from '@mantine/core';
import Navbar from '../components/Navbar.jsx';
import TeamFixtures from '../components/TeamFixtures.jsx';
import GetTable from '../components/GetTable.jsx';
import TeamResults from '../components/TeamResults.jsx';


function TeamOverview() {
    const params = useParams();

    return(
        <>
            <Navbar></Navbar>

            <h1 className='overview-title'>{params.name} Overview</h1>

            <Group className='overview-table-results'>
            <Stack>
                <h1 className='title'>Fixtures</h1>
                <ScrollArea h={500} w={500}>
                    <TeamFixtures></TeamFixtures>
                </ScrollArea>
            </Stack>

            <Stack>
                <h1 className='title'>Results</h1>

                <ScrollArea h={500} w={500}>

                    <TeamResults></TeamResults>

                </ScrollArea>

            </Stack>
            

            </Group>

            <Stack>
                <h1 className='title'>League Table</h1>
            <ScrollArea h={500} w={900} className='table-overview'> 

                <GetTable></GetTable>

            </ScrollArea>

            </Stack>
                
           
        </>
    )
}


export default TeamOverview

