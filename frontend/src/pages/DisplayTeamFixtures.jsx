import TeamFixtures from "../components/TeamFixtures.jsx";
import Navbar from '../components/Navbar.jsx';
import { Flex, Center,Group,NavLink ,Stack} from '@mantine/core';
import datajson from '../NameConversion.json';
import { useParams,Link } from 'react-router-dom';


function DisplayTeamFixtures() {
    const params = useParams()

    const displayName = () =>{
        const name = (datajson[params.league]).find((item) => item.url === params.name)

        return name.display
    }

    return (
        <>
        <Navbar></Navbar>

        <Stack align='stretch' className='stack'>
        <h1 className='league-title'>{displayName()}'s Fixtures</h1>

        <Flex direction='row' gap='lg' className='flex-link'>
            <Link to={`../table/${params.league}`} className='link'>  View Table  </Link>
            <Link to={`../table/${params.league}`} className='link'>  View Table  </Link>
        </Flex>

        <TeamFixtures/>

        </Stack>
        </>
    ) 

}

export default DisplayTeamFixtures