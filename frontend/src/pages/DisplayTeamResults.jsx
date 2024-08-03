import Navbar from '../components/Navbar.jsx';
import { useParams } from 'react-router-dom';
import {Stack} from '@mantine/core';
import names from '../NameConversion.json'
import TeamResults from '../components/TeamResults.jsx';

function DisplayTeamFixtures() {
    const params = useParams()


    const displayName = () =>{
        const name = (names[params.league]).find((item) => item.url === params.name)

        return name.display
    }

    return(
        <>
        <Navbar></Navbar>
        <h1 className='result-name'>{displayName()}'s Results</h1>
        <Stack align='stretch' className='stack'>

        <TeamResults></TeamResults>

        </Stack>
        </>
    )

}

export default DisplayTeamFixtures