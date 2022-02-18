import { HomePage } from './pages/HomePage.jsx'
import { Explore } from './pages/Explore.jsx'
import { LauncheDetails } from './pages/LauncheDetails.jsx'



const routes = [
  {
    path:'/explore/:launcheId',
    component: LauncheDetails,
  },
  {
    path: '/explore',
    component: Explore,
  },
  {
    path: '/',
    component: HomePage,
  },
]

export default routes
