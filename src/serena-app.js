import './serena-page.css';
import { Name, Pfp, Instructions, MySchool, Hobbies, Interests, Program, Linkedin } from './components/sw-info';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  } from 'react-router-dom';

function SerenaApp() {
  return (
  <>
    <Router>
      <Routes>
        <Route exact path="/serena" element={
        <>
          <div className="App">
            <header className="App-header">

              <Name/>
              <Pfp/>
              <MySchool/>
              <Hobbies/>
              <Interests/>
              <Program/>
              <Linkedin/>

        
            </header>
        </div>
        </>}/>
      </Routes>
    </Router>
  </>
    
  );
}

export default SerenaApp;