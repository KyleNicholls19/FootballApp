import TeamFixtures from "../components/TeamFixtures.jsx";
import Navbar from '../components/Navbar.jsx';
import { Flex,Stack} from '@mantine/core';
import { useParams,Link } from 'react-router-dom';
import { DisplayNameTeam } from "../Helpers.jsx";


function DisplayTeamFixtures() {
    const params = useParams()

    return (
        <>
        <Navbar></Navbar>

        <Stack align='stretch' className='stack'>
        <h1 className='league-title'>{DisplayNameTeam(params.league,params.name)}'s Fixtures</h1>

        <Flex direction='row' gap='lg' className='flex-link'>
            <Link to={`../table/${params.league}`} className='link'>  View Table  </Link>
            <Link to={`../results/team/${params.league}/${params.name}`} className='link'>  View Results  </Link>
            <Link to={`../overview/team/${params.league}/${params.name}`} className='link'>  View Overview  </Link>
        </Flex>

        <TeamFixtures/>

        </Stack>
        </>
    ) 
    

}

export default DisplayTeamFixtures