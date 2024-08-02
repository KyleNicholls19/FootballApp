import { useParams,Link } from 'react-router-dom';
import names from './NameConversion.json'
import React, { useState,useEffect } from 'react'
import { Flex, Center,Group,NavLink ,Stack} from '@mantine/core';
import Navbar from './Navbar.jsx';
import TeamFixtures from './TeamFixtures.jsx';
import GetTable from './GetTable.jsx';


function TeamOverview() {
    const params = useParams();

    return(
        <>
            <Navbar></Navbar>
            <TeamFixtures></TeamFixtures>
            <GetTable></GetTable>
        </>
    )
}


export default TeamOverview

