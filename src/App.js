import {  useState, createContext } from 'react';
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
import { alpha, styled } from '@mui/material/styles';
import { purple, pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

export const ThemeContext = createContext(null);

function App() {

  //Destructuring values from useFetch and my endpoint
  const { data : futureEvents , isPending : ePend, error : evError} =  useFetch("/api/MERN/Events/future")
  const { data : top10 ,isPending : sPend, error: stError } = useFetch("/api/MERN/Students/top10")
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () =>{
    setTheme((theme === 'dark' ? 'light' : "dark"))
  }
  
  const PurpSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: purple[200],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));

  return (
    <BrowserRouter>
  { ePend && sPend && <Loading /> }
  <ThemeContext.Provider value={{toggleTheme, theme}}> 
    {futureEvents && top10 && 
    <div className="pageWrap" id={theme}>
    <Navigation /> 
      <Routes>
      <Route path='/Home' element={<HomePage futureData={ futureEvents } top10 ={top10}/>}/>
        <Route path='/Register' element={ <UpdateReg />} />  
        <Route path='/Ranking' element= {<Ranking />} />
        <Route path='/Student/:id' element={ <PreIndividualStud />} /> 
       <Route path='/Search' element= { <StudentSearchResult />} />
        <Route path='/About-us' element={<AboutUsPage />}/>
      </Routes>
        <Switch className='switch' onChange={toggleTheme} />
    </div>
    }
  </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
