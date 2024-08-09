import Home from './pages/Home.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import DisplayLeagueFixtures from './pages/DisplayLeagueFixtures.jsx'
import {createBrowserRouter} from 'react-router-dom'
import DisplayLeagueResults from './pages/DisplayLeagueResults.jsx'
import DisplayTeamFixtures from './pages/DisplayTeamFixtures.jsx'
import DisplayTable from './pages/DisplayTable.jsx'
import DisplayTeamResults from './pages/DisplayTeamResults.jsx'
import TeamOverview from './pages/TeamOverview.jsx'
import LeagueOverview from './pages/LeagueOverview.jsx'


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
            element: <DisplayLeagueFixtures/>
        },
        {
            path: '/fixtures/team/:league/:name',
            element: <DisplayTeamFixtures/>
        },
        {
            path: '/results/league/:name',
            element: <DisplayLeagueResults/>
        },
        {
            path: '/results/team/:league/:name',
            element: <DisplayTeamResults/>
        },
        {
            path: '/overview/team/:league/:name',
            element: <TeamOverview/>
        },
        {
            path: '/overview/league/:name',
            element: <LeagueOverview/>
        }
    ])
}

export default Routes