import './App.css';
import Home from './components/Home';
import Contact from './components/contact/contact';

import '@mui/material'
import 'semantic-ui-css/semantic.min.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route path={'/'} element={<Home/>}/>

          <Route path={'/contact'} element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
