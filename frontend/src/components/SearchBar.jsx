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
            //const name = names.find((item) => item.display === value)

            //navigate(`/fixtures/league/${name.url}`, {replace: true})
        }

    }

    return(
        <Select
        label='Search'
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