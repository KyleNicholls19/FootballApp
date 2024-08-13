import Navbar from '../components/Navbar.jsx';
import { useParams } from 'react-router-dom';
import {Stack} from '@mantine/core';
import TeamResults from '../components/TeamResults.jsx';
import { DisplayNameTeam } from "../Helpers.jsx";

function DisplayTeamFixtures() {
    const params = useParams()



    return(
        <>
        <Navbar></Navbar>
        <h1 className='result-name'>{DisplayNameTeam(params.league,params.name)}'s Results</h1>
        <Stack align='stretch' className='stack'>

        <TeamResults></TeamResults>

        </Stack>
        </>
    )

}

export default DisplayTeamFixtures