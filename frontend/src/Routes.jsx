import Home from './Home.jsx'
import PageNotFound from './PageNotFound.jsx'
import GetTable from './GetTable.jsx'
import LeagueFixtures from './LeagueFixtures.jsx'
import {createBrowserRouter} from 'react-router-dom'
import TeamFixtures from './TeamFixtures.jsx'
import LeagueResults from './LeagueResults.jsx'
import TeamOverview from './TeamOverview.jsx'
import DisplayTeamFixtures from './DisplayTeamFixtures.jsx'
import DisplayTable from './DisplayTable.jsx'
import TeamResults from './TeamResults.jsx'


function Routes() {
    return createBrowserRouter([
        // Home path whenever the site is first accessed
        {
            path: '/',
            element: <Home/>,
            errorElement: <PageNotFound/>,
        },
        // table paths gathering the league name to find specific league
        {
            path: '/table/:league',
            element: <DisplayTable/>
        },
        {
            path: '/fixtures/league/:name',
            element: <LeagueFixtures/>
        },
        {
            path: '/fixtures/team/:league/:name',
            element: <DisplayTeamFixtures/>
        },
        {
            path: '/results/league/:name',
            element: <LeagueResults/>
        },
        {
            path: '/results/team/:league/:name',
            element: <TeamResults/>
        },
        {
            path: '/team-overview/:league/:name',
            element: <TeamOverview/>
        }
    ])
}

export default Routes