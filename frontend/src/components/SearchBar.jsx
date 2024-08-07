import { Autocomplete, rem, Select } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';
import {names} from '../NameConversion.json';
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";


function SearchBar() {

    const leagueNames = names.map(item => item.display)
    const navigate = useNavigate()

    function handleSubmit(value){
        if (value){
            const name = names.find((item) => item.display === value)

            navigate(`/fixtures/league/${name.url}`, {replace: true})
        }

    }

    return(
        <Select
        placeholder="Search"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        data={leagueNames}
        limit={5}
        onChange={(value) => handleSubmit(value)}
        searchable
        clearable
        />
    )
}

export default SearchBar