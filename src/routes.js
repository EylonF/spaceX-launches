import { HomePage } from "./pages/HomePage.jsx";
import { About } from "./pages/About.jsx";
import { Explore } from "./pages/Explore.jsx";
import { LauncheDetails } from "./pages/LauncheDetails.jsx";

const routes = [
  {
    path: "/explore/:launcheId",
    component: LauncheDetails,
  },
  {
    path: "/explore",
    component: Explore,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/",
    component: HomePage,
  },
];

export default routes;
