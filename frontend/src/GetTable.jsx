import React, { useState,useEffect,useMemo } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { useMantineTheme } from '@mantine/core';

function GetTable(props) {
    
    const {colorScheme} = useMantineTheme(); 
    const [data,setData] = useState([]);
    const league = props.league

    async function getTable(league) {
      const url = 'http://127.0.0.1:5000/table/' + league
      const response = await fetch(url)
      const data = await response.json()
  
      for (const key in data) {
        const newData = {Pos: Object.values(data[key])[0], Team: data[key].Team, Pl: data[key].Pl,W: data[key].W,D: data[key].D,L: data[key].L,F: data[key].F,
          A: data[key].A,GD: data[key].GD,Pts: data[key].Pts}

        
        setData(t => [...t,newData])
        
     
      }
    }

    useEffect(() => {
        getTable(league)
    },[])

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

    const buildTable = useMantineReactTable({
        columns,
        data,
        enableColumnActions: false,
        enableColumnFilters: false,
        enablePagination: false,  
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        enableHiding: false,
        enableGlobalFilter:false,
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
    });
    return(
        <MantineReactTable table ={buildTable} />
    );


  
}

export default GetTable