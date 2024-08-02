import React, { useState,useEffect,useMemo } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Flex, Center } from '@mantine/core';
import Navbar from './Navbar.jsx';
import { useParams,Link } from 'react-router-dom';
import {names} from './NameConversion.json'
import GetTable from './GetTable.jsx';

function DisplayTable() {
    const params = useParams();

    const displayName = () =>{
        const name = names.find((item) => item.url === params.league)

        return name.display
    }

    return(
        <>
        <Navbar/>
        <Center>
        <h1>{displayName()} Table</h1>
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