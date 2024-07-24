import Home from './Home.jsx'
import PageNotFound from './PageNotFound.jsx'
import GetTable from './GetTable.jsx'
import LeagueFixtures from './LeagueFixtures.jsx'
import {createBrowserRouter} from 'react-router-dom'
import TeamFixtures from './TeamFixtures.jsx'


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
            path: '/table/:leagueName',
            element: <GetTable/>
        },
        {
            path: '/fixtures/league/:name',
            element: <LeagueFixtures/>
        },
        {
            path: '/fixtures/team/:league/:name',
            element: <TeamFixtures/>
        }
    ])
}

export default Routes