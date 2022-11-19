import {  useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './views/components/Navigation'
import HomePage from './views/HomePage';
import './cssRes/app.css'
import UpdateReg from './views/components/updateRegister';
import useFetch from './useFetch';


function App() {
  const { data : futurEvents , isPending, error} =  useFetch("/api/MERN/Events/future")
  return (
    <BrowserRouter>
    <div>
    <Navigation />
    <Routes>
      <Route path='/Home' element = { <HomePage  />}/>
      <Route path='/UpdateRegister' element={ <UpdateReg />} />  
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
