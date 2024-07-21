import Home from './Home.jsx'
import PageNotFound from './PageNotFound.jsx'
import GetTable from './GetTable.jsx'
import {createBrowserRouter} from 'react-router-dom'


function Routes() {
    return createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            errorElement: <PageNotFound/>,
        },
        {
            path: '/table/:leagueName',
            element: <GetTable/>
        }
    ])
}

export default Routes