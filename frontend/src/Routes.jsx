import Home from './Home.jsx'
import PageNotFound from './PageNotFound.jsx'
import GetTable from './GetTable.jsx'
import Fixtures from './Fixtures.jsx'
import {createBrowserRouter} from 'react-router-dom'


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
            path: '/fixtures/:isLeague/:name',
            element: <Fixtures/>
        }
    ])
}

export default Routes