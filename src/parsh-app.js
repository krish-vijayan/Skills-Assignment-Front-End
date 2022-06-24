
import { Name, Pfp, MySchool, Hobbies, Interests, Program, Linkedin } from './components/parsh-info';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  } from 'react-router-dom';

function ParshApp() {
    return (
    <>
      <Router>
        <Routes>
          <Route exact path="/parsh" element={
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
  
  export default ParshApp;