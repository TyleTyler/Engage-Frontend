import {  useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './views/components/Navigation'
import HomePage from './views/HomePage';
import './cssRes/app.css'
import UpdateReg from './views/register';
import useFetch from './useFetch';

import Loading from './views/components/loading';
import Ranking from './views/ranking';
import StudentReportPage from './views/individualStudentRep';
import PreIndividualStud from './views/preIndiviualStudent';
import StudentSearchResult from './views/studentSearch';
import AboutUsPage from './views/aboutus';



function App() {

  //Destructuring values from useFetch and my endpoint
  const { data : futureEvents , isPending : ePend, error : evError} =  useFetch("/api/MERN/Events/future")
  const { data : top10 ,isPending : sPend, error: stError } = useFetch("/api/MERN/Students/top10")
  




  return (
    <BrowserRouter>
  { ePend && sPend && <Loading /> }
    {futureEvents && top10 && 
    <div className="pageWrap">
    <Navigation /> 
      <Routes>
      <Route path='/Home' element={<HomePage futureData={ futureEvents } top10 ={top10}/>}/>
        <Route path='/Register' element={ <UpdateReg />} />  
        <Route path='/Ranking' element= {<Ranking />} />
        <Route path='/Student/:id' element={ <PreIndividualStud />} /> 
       <Route path='/Search' element= { <StudentSearchResult />} />
        <Route path='/About-us' element={<AboutUsPage />}/>
      </Routes>
    </div>
    }
    </BrowserRouter>
  );
}

export default App;
