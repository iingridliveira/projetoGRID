
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import Home from "../pages/home/index";
import Register from "../pages/register";



const  RoutesComponent = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login' } element={<Register/>}/>
      <Route element={<AuthOutlet fallbackPath='/login' />}>
      </Route>
    </Routes>
  </BrowserRouter>
  
  )
}

  export default RoutesComponent;