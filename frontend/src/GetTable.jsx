import React, { useState,useEffect } from 'react'

function GetTable() {
    const [table,setTable] = useState([]);

    async function getTable() {
      const response = await fetch('http://127.0.0.1:5000/table')
      const data = await response.json()
  
      for (const key in data) {
        const newData = {Pos: Object.values(data[key])[0], Team: data[key].Team, Pl: data[key].Pl,W: data[key].W,D: data[key].D,L: data[key].L,F: data[key].F,
          A: data[key].A,GD: data[key].GD,Pts: data[key].Pts}

        
        setTable(t => [...t,newData])
     
      }
    }

    useEffect(() => {
        getTable()
    },[])

    return(
        <>
        <div>
            <h2>League Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Team</th>
                        <th>Pl</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>F</th>
                        <th>A</th>
                        <th>GD</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((team) => (
                        <tr key={team.Pos}>
                        <td>{team.Pos}</td>
                        <td>{team.Team}</td>
                        <td>{team.Pl}</td>
                        <td>{team.W}</td>
                        <td>{team.D}</td>
                        <td>{team.L}</td>
                        <td>{team.F}</td>
                        <td>{team.A}</td>
                        <td>{team.GD}</td>
                        <td>{team.Pts}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>

    );


  
}

export default GetTable