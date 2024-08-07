import { Autocomplete, rem, Select } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';
import {names} from '../NameConversion.json';
import { useState } from "react";


function SearchBar() {

    const leagueNames = names.map(item => item.display)

    function handleSubmit(value){
        console.log(value)

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