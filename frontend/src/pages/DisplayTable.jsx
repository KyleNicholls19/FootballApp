import React, { useState,useEffect,useMemo } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Flex, Center } from '@mantine/core';
import Navbar from '../components/Navbar.jsx';
import { useParams,Link } from 'react-router-dom';
import {names} from '../NameConversion.json'
import GetTable from '../components/GetTable.jsx';
import { DisplayNameLeague } from '../Helpers.jsx'

function DisplayTable() {
    const params = useParams();

    return(
        <>
        <Navbar/>
        <Center>
        <h1>{DisplayNameLeague(params.league)} Table</h1>
        <Link to={`../fixtures/league/${params.league}`}>Fixtures</Link>
        </Center>
        <Flex 
        mih={50}
        justify='center'
        align='center'
        wrap='wrap'
        >

        <GetTable></GetTable>


        </Flex>
        </>
    )

}

export default DisplayTable