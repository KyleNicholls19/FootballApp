import Navbar from '../Navbar.jsx';
import { useParams } from 'react-router-dom';
import {Stack} from '@mantine/core';
import {names} from '../NameConversion.json'
import LeagueResults from '../LeagueResults.jsx';

function DisplayLeagueResults() {
    const params = useParams()

    const displayName = () =>{
        const name = names.find((item) => item.url === params.name)

        return name.display
    }

    return(
        <>
        <Navbar></Navbar>
        <h1 className='result-name'>{displayName()} Fixtures</h1>

        <Stack align='stretch' className='stack'>

        <LeagueResults></LeagueResults>

        </Stack>
        </>

    )

}

export default DisplayLeagueResults