import './App.css';

import '@mui/material'
import 'semantic-ui-css/semantic.min.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home/home.js';
import Contact from './components/contact/contact.js'
import About from './components/about/about';

function App() {
  return (
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>

          <Route path={'/'} element={<Home/>}/>

          <Route path={'/about'} element={<About/>}/>

          <Route path={'/contact'} element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
