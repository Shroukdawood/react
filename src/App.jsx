// import "./assets/style.css";
// import mainClasses from "./assets/style.module.css";
// import Logo from "./assets/react.svg";
import MainNavbar from "./commponet/MainNavbar";
import MainFooter from "./commponet/MainFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import { useRoutes } from "react-router-dom";
import Error404 from "./pages/Error404";
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./pages/Content";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";

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
},

{
path:"/content",
element:<Content />
},
{
  path:"/registration",
  element:<Registration />
},
{
  path:"/login",
  element:<LogIn/>
}
])
 
 return <>

{routes}

 </>
}

export default App
