import { Autocomplete, rem } from "@mantine/core"
import { IconSearch } from '@tabler/icons-react';


function SearchBar() {


    return(
        <Autocomplete
        placeholder="Search"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
        />
    )
}

export default SearchBar