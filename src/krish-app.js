import './Krish-app.css';
import './Title-page.css';
import { 
  Name, Pfp, Instructions, 
  MySchool, Hobbies, Interests, 
  Program, Linkedin, Texture, Home} from './components/krish-info';
import TitlePage from './components/title-page';
import {
    BrowserRouter as Router, 
    Routes,
    Route,
    } from 'react-router-dom';
  
function KrishApp() {
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
        </Router>
      </>
      
      
    );
  }
  
  export default KrishApp;