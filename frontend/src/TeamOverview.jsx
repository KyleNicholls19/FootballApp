import { useParams,Link } from 'react-router-dom';
import names from './NameConversion.json'
import React, { useState,useEffect } from 'react'
import { Flex, Center,Group,NavLink ,Stack,Grid,ScrollArea,Box} from '@mantine/core';
import Navbar from './Navbar.jsx';
import TeamFixtures from './TeamFixtures.jsx';
import GetTable from './GetTable.jsx';


function TeamOverview() {
    const params = useParams();

    return(
        <>
            <Navbar></Navbar>

            <h1 className='overview-title'>{params.name} Overview</h1>

            <Group gap='xl' justify='center'>

            <ScrollArea h={500} w={500}>
                
                    <TeamFixtures></TeamFixtures>
                
                
            </ScrollArea>
                
            <ScrollArea h={500} w={900}> 

                <GetTable></GetTable>

            </ScrollArea>

            </Group>
                
           
        </>
    )
}


export default TeamOverview

