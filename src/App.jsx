// import "./assets/style.css";
import mainClasses from "./assets/style.module.css";
import Logo from "./assets/react.svg";
import MainNavbar from "./commponet/mainNavbar";
import MainFooter from "./commponet/MainFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import { useRoutes } from "react-router-dom";
import Error404 from "./pages/Error404";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 const routes = useRoutes([{
  path:"/",
  element:<Home />,
 },
{
  path:"/about",
  element:<About />,
},
{
  path:"/*",
  element:<Error404/>,
}
])
 
 return <>
 <MainNavbar/>
{routes}
<MainFooter/>
 </>
}

export default App
