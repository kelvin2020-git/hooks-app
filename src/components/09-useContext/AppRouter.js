import React from 'react'
import {
  BrowserRouter as Router,
 
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
export const AppRouter = () => {
  return (
    <Router>
 <div>
<NavBar/>
   <div className='container'>
   <Routes>
<Route path='/about' element={<AboutScreen/>}/>
<Route path='/login' element={<LoginScreen/>}/>
<Route path='/'element={<HomeScreen/>}/>
{/* No recarga el componente cuando la ruta no es valida */}
{/* <Route path="*" element={ <HomeScreen />}/> */}
{/* //proteccion de ruta no valida */}
<Route path="*" element={<Navigate to ="/" />}/>
   </Routes>
  
   </div>
  
 </div>

    </Router>
  )
}
