import React, { useState,useEffect,useMemo } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Flex, Center } from '@mantine/core';
import Navbar from './Navbar.jsx';
import { useParams,Link } from 'react-router-dom';
import {names} from './NameConversion.json'

function GetTable() {
    
    const {colorScheme} = useMantineTheme(); 
    const [data,setData] = useState([]); // state variable to store table data
    const params = useParams(); // takes in the league name from the url as a parameter

    async function getTable(league) {
      // gathers the data from the backend and turns it to json form
      const url = 'http://127.0.0.1:5000/table/' + league
      const response = await fetch(url)
      const data = await response.json()

      // reformates the json data to a more useable form  
      for (const key in data) {
        const newData = {Pos: Object.values(data[key])[0], Team: data[key].Team, Pl: data[key].Pl,W: data[key].W,D: data[key].D,L: data[key].L,F: data[key].F,
          A: data[key].A,GD: data[key].GD,Pts: data[key].Pts}

        
        setData(t => [...t,newData])
        
     
      }
    }

    useEffect(() => {
        getTable(params.league)
        // clears the data after creating the table
        return (
            setData([])
        )
    },[params.league])

    // creates the columns needed in the table
    const columns = useMemo(() => [
        {
            accessorKey: 'Pos',
            header: 'Pos',
            size: 50,
        },
        {
            accessorKey: 'Team',
            header: 'Team',
        },
        {
            accessorKey: 'Pl',
            header: 'Pl',
            size: 50,
        },
        {
            accessorKey: 'W',
            header: 'W',
            size: 50,
        },
        {
            accessorKey: 'D',
            header: 'D',
            size: 50,
        },
        {
            accessorKey: 'L',
            header: 'L',
            size: 50,
        },
        {
            accessorKey: 'F',
            header: 'F',
            size: 50,
        },
        {
            accessorKey: 'A',
            header: 'A',
            size: 50,
        },
        {
            accessorKey: 'GD',
            header: 'GD',
            size: 50,
        },
        {
            accessorKey: 'Pts',
            header: 'Pts',
            size: 50,
        },

    ])

    // creates the table itself with all data
    const buildTable = useMantineReactTable(
        {
        columns,
        data,
        enableColumnActions: false,
        enableColumnFilters: false,
        enablePagination: false,  
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        enableHiding: false,
        enableGlobalFilter:false,
        enableBottomToolbar:false,
        enableTopToolbar:false,
        initialState: {density: 'sm'},
        mantineTableProps: {
            withColumnBorders: true,
            withBorder: colorScheme === 'light',
            sx: { 

              'thead > tr': {      
                backgroundColor: 'inherit',      
              },     
              'thead > tr > th': {      
                backgroundColor: 'inherit',     
              },     
              'tbody > tr > td': {      
                backgroundColor: 'inherit',   
              },
              maxWidth: '20vw'
                
            },  
        },
        mantinePaperProps: {
            shadow: 'lg',
            borderRadius: '0',
        }   
         
    });

    // finds the display name of the league from the url name to display on top of the table
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
            <MantineReactTable table ={buildTable} />
        </Flex>
        </>

    );


  
}

export default GetTable