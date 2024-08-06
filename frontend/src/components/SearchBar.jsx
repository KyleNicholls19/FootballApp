import { Autocomplete, rem } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';
import data from '../NameConversion.json';
import { useState } from "react";


function SearchBar() {

    const [leagueNames,setLeagueNames] = useState([])

    const leagueSearch = data.names.map((item) =>{
        setLeagueNames([...l,item])
    })




    return(
        <Autocomplete
        placeholder="Search"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        data={[
            { group: 'Leagues', items: [leagueNames]}
        ]}
        limit={5}
        />
    )
}

export default SearchBar