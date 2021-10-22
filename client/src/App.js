import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import TraxsLog from './Components/TraxsLog';
import Calendar from './Components/Calendar';
import TraxsPage from './Components/TraxsPage';
import Resources from './Components/Resource';
import AboutUs from './Components/AboutUs';
import Routines from './Components/Routines';

function App() {
  return (
    <div >
      <Route path='/' >
      <nav>
        <Link to='/'>
        <h1>FitTrax</h1>
          </Link>
          
        
        <Link to='/TraxsLog'> <h3>TraxsLog</h3></Link>
        <Link to='/Calendar'> <h3>Calendar</h3></Link>
        <Link to='/Routines'>  <h3>Routines</h3></Link>
        <Link to='/Resources'>  <h3>Resources</h3></Link>
        </nav>
      
      </Route>
      
      <div>
        <h1>Welcome to FitTraxs</h1>
      </div>
      
      <div>
      
        <Route path='/TraxsLog' exact>
            
          <TraxsLog />
        
        </Route>
      
        <Route path='/TraxsPage' exact>
            
          <TraxsPage />
        
        </Route>
      
        <Route path='/AboutUs' exact>
            
          <AboutUs />
        
        </Route>
      
        <Route path='/Calendar' exact>
            
          <Calendar />
        
        </Route>
        
        <Route path='/Resources' exact>
        
      <Resources />
      
        </Route>
        
        <Route path='/Routines' exact>
      
          <Routines />
        
        </Route>
      
      </div>
      
      <footer>
        
      <Link to='/Resources'> <h3>Resources</h3></Link>
      </footer>

    </div>
  );
}

export default App;
