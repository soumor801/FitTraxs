import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import TraxsLog from "./Components/TraxsLog";
import Calendar from "./Components/Calendar";
import TraxsPage from "./Components/TraxsPage";
import Resources from "./Components/Resource";
import AboutUs from "./Components/AboutUs";
import Routines from "./Components/Routines";
// import CSS from "./CSS-Files/App.css";
import BootstrapCarouselDemo from "./Components/Carousel";

function App() {
  return (
    <div className="html">
      <Route path="/">
        <div>
          <nav className="navContainer">
            <Link to="/">
              {/* <h1 className="homeFitTrax">FitTrax</h1> */}
              <img className='logo' src='https://i.imgur.com/mQe9wAD.png'/>
            </Link>

            <Link to="/TraxsLog" style={{ textDecoration: 'none' , color: '#191919'}} classname='links'>
              {" "}
              <h3>TraxsLog</h3>
            </Link>
            <Link to="/TraxsPage" style={{ textDecoration: 'none', color: '#191919' }}>
              {" "}
              <h3>TraxsPage</h3>
            </Link>
            <Link to="/Routines"style={{ textDecoration: 'none' , color: '#191919'}}>
              {" "}
              <h3>Routines</h3>
            </Link>
            <Link to="/Calendar" style={{ textDecoration: 'none' , color: '#191919'}}>
              {" "}
              <h3>Calendar</h3>
            </Link>
          </nav>
        </div>
      </Route>
      <Route path="/" exact>
        <div>
          <div>
            <BootstrapCarouselDemo />
          </div >
          <h1 className='fitTrax'>Welcome to FitTraxs</h1>
          <h2 className='fitTrax'>Get real results for real life </h2>
          <hr />
          <div className='gymShotContainer'>
            <img className='gymShot' src='https://i.imgur.com/SjRuftJ.jpg' />
          </div>
          <section>
          
            <p className='sectionPara'>Our fresh take on fitness is designed to get and keep you motivated for real results you can count on with FitTraxs on your side.</p>
            <p className='sectionPara'>Track your workouts. View your workouts and progress with real results. </p>

            
          </section>
          
        </div>
      </Route>
      <div>
        <Route path="/TraxsLog" exact>
          <TraxsLog />
        </Route>

        <Route path="/TraxsPage" exact>
          <TraxsPage />
        </Route>

        <Route path="/AboutUs" exact>
          <AboutUs />
        </Route>

        <Route path="/Calendar" exact>
          <Calendar />
        </Route>

        <Route path="/Resources" exact>
          <Resources />
        </Route>

        <Route path="/Routines" exact>
          <Routines />
        </Route>
      </div>

      <footer>
        <Link to="/Resources" style={{ textDecoration: 'none' , color: '#191919'}}>
          {" "}
          <h3>Resources</h3>
        </Link>
      </footer>
    </div>
  );
}

export default App;
