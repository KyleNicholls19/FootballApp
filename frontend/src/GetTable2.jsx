import React, { useState,useEffect,useMemo } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';

function GetTable(props) {
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
        },
        {
            accessorKey: 'Team',
            header: 'Team',
        },
        {
            accessorKey: 'Pl',
            header: 'Pl',
        },
        {
            accessorKey: 'W',
            header: 'W',
        },
        {
            accessorKey: 'D',
            header: 'D',
        },
        {
            accessorKey: 'L',
            header: 'L',
        },
        {
            accessorKey: 'F',
            header: 'F',
        },
        {
            accessorKey: 'A',
            header: 'A',
        },
        {
            accessorKey: 'GD',
            header: 'GD',
        },
        {
            accessorKey: 'Pts',
            header: 'Pts',
        },

    ])

    const buildTable = useMantineReactTable({
        columns,
        data,
        enableColumnActions: false,
        enableColumnFilters: false,
        enablePagination: false,        
    });
    return(
        <MantineReactTable table ={buildTable}/>
    );


  
}

export default GetTable