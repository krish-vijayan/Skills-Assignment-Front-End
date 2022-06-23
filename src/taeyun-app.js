
import { Name, Pfp, Instructions, MySchool, Hobbies, Interests, Program, Linkedin } from './components/taeyun-info';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  } from 'react-router-dom';

function TaeyunApp() {
    return (
    <>
      <Router>
        <Routes>
          <Route exact path="/taeyun" element={
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
  
  export default TaeyunApp;