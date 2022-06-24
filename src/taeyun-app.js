import './taeyun-page.css';
import { Name, Pfp, MySchool, Hobbies, Interests, Program, Linkedin, Background  } from './components/taeyun-info'
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  } from 'react-router-dom';

function TaeyunApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/taeyun" element={
          <>
          <div className="App">
      <header className="App-header">
        
        <Background/>
        <Name/>
        <Pfp/>
        <MySchool/>
        <Program/>
        <Hobbies/>
        <Interests/>
        <Linkedin/>

       
      </header>
    </div>
          </>
        }/>
      </Routes>
    </Router>
    
  );
}

export default TaeyunApp;
