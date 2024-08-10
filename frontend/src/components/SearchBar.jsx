import { Autocomplete, rem, Select } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';
import dataset from '../NameConversion.json';
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";


function SearchBar() {

    const data = []

    dataset.names.forEach(league => {
        data.push(league.display)
        
        const leagueKey = league.url;
        if (dataset[leagueKey]) {
          dataset[leagueKey].forEach(team => {
            data.push(team.display)
          });
        }
      });
      


    const navigate = useNavigate()

    function handleSubmit(value){
        if (value){
            dataset.names.forEach(league => {
                if (league.display === value) { 
                    navigate(`/overview/league/${league.url}`, {replace: true})
                }
                else {
                    const leagueKey = league.url;
                    dataset[leagueKey].forEach(team => {
                        if (team.display === value) {
                            navigate(`/overview/team/${league.url}/${team.url}`, {replace: true})
                        }
                    })
                }
       
            })

        }

    }

    return(
        <Select
        placeholder="Search"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        data={data}
        limit={5}
        onChange={(value) => handleSubmit(value)}
        searchable
        clearable
        />
    )
}

export default SearchBar