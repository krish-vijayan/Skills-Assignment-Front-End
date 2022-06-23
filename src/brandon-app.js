import './Brandon-page.css';
import { BrandonName, BrandonSchool, BrandonInterests, 
  BrandonProgram, BrandonLinkedIn, BrandonGitHub } from './components/brandon-info';
import {
    BrowserRouter as Router, 
    Routes,
    Route,
    } from 'react-router-dom';

function BrandonApp() {
  return (
    <Router>
    <Routes>
      <Route exact path="/brandon" element={
        <>
        <div className="Brandon-App">
        <header className="Brandon-App-header">
          <img className="Brandon-Photo" alt="pfp" src={require('./images/pfp.jpg')}/>  
            <div className="Brandon-socials">
              <BrandonLinkedIn/>
              <BrandonGitHub/>
            </div>
            <div className="Brandon-wrapper">
              <BrandonName/> 
              <BrandonInterests/>
              <BrandonSchool/>
              <BrandonProgram/>
            </div>
      </header>
  </div>
  </>
      }/>
    </Routes>
  </Router>
  );
}

export default BrandonApp;
