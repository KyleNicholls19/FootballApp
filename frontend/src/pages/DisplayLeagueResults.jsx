import Navbar from '../components/Navbar.jsx';
import { useParams } from 'react-router-dom';
import {Stack} from '@mantine/core';
import LeagueResults from '../components/LeagueResults.jsx';
import DisplayNameLeague from '../Helpers.jsx'

function DisplayLeagueResults() {
    const params = useParams()

    return(
        <>
        <Navbar></Navbar>
        <h1 className='result-name'>{DisplayNameLeague(params.league)} Results</h1>

        <Stack align='stretch' className='stack'>

        <LeagueResults></LeagueResults>

        </Stack>
        </>

    )

}

export default DisplayLeagueResults