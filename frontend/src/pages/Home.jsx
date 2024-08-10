import Navbar from "../components/Navbar.jsx"
import SearchBar from "../components/SearchBar.jsx"
import { Flex, Center,Group,NavLink ,Stack,Grid,ScrollArea,Box} from '@mantine/core';
function Home() {
    return(
        <>
        <Navbar/>
        <Stack className="home-stack">
        <h2 className="home">HOME</h2>
        <p className="home-subtext">Search for any team or league of your choice</p>

        <SearchBar/>
        </Stack>
        </>
    )
}

export default Home