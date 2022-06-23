//Krish
import './Krish-app.css';
import './Title-page.css';
import { 
  Name, Pfp, Instructions, 
  MySchool, Hobbies, Interests, 
  Program, Linkedin, Texture, Home} from './components/krish-info';
import TitlePage from './components/title-page';
import {Link} from 'react-router-dom';
/////////////////////////////////////////////////////////////////
//Brandon

////////////////////////////////////////////////////////////////
//Serena
import SerenaApp from './serena-app';

////////////////////////////////////////////////////////////////
//Taeyun
import TaeyunApp from './taeyun-app';
///////////////////////////////////////////////////////////////


import {
  BrowserRouter as Router, 
  Routes,
  Route,
  } from 'react-router-dom';



function App() {
  return (
      <>
      <Router>
	        <div className="Krish-App">
              <header className="Krish-App-header">
                <Routes>
                	<Route exact path="/" element={<TitlePage/>}/>
                	<Route exact path="/krish" element={<>
                    		<Texture/>
                    		<Instructions/>
                    		<Name/>
                    		<Pfp/>
                    		<MySchool/>
                   		  <Hobbies/>
                    		<Interests/>
                    		<Program/>
                    		<Linkedin/>
                        <Home/>   
                    	</>  
                  
                  	}/>
                </Routes>
              </header>
          </div>
            <Routes>
              <Route exact path="/brandon" element={<h1>INSERT FUNCTION HERE</h1>}/>
              <Route exact path="/serena" element={<SerenaApp/>}/>
              <Route exact path="/taeyun" element={<TaeyunApp/>}/>
              <Route exact path="/parsh" element={<h1>INSERT FUNCTION HERE</h1>}/>
            </Routes>
      </Router>
    </>
    
    
  );
}

export default App;
