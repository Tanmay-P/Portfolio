import './App.css';

import '@mui/material'
import 'semantic-ui-css/semantic.min.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home/home.js';
import Contact from './components/contact/contact.js';

import 'typeface-roboto';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>

          <Route path={'/'} element={<Home />} />
{/* 
          <Route path={'/about'} element={<About />} />

          <Route path={'/projects'} element={<Projects />} /> */}

          <Route path={'/contact'} element={<Contact />} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
