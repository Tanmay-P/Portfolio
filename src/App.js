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
import Sidebar from './components/dashboard/sidebar';
import Navbar from './components/dashboard/navbar';
import Footer from './components/dashboard/footer';
import About from './components/about/about';
import TechnologyStack from './components/about/techStack';
import EducationDetails from './components/about/education';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className='App'>

      <BrowserRouter basename={window.location.pathname || ''}>       {/*   */}
        <Navbar />
        
        <Routes>

          <Route path={'/'} element={<Home />} />

          <Route path={'/about'} element={<About/>} />

          <Route path={'/skills'} element={<TechnologyStack/>} />
          
          <Route path={'/education'} element={<EducationDetails/>} />

          <Route path={'/projects'} element={<Projects/>} />

          <Route path={'/contact'} element={<Contact />} />

        </Routes>

        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
