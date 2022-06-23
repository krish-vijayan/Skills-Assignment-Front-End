import MemberApi from './member-api-call';
import React, {useState} from 'react';



function Name(){
    const serena = MemberApi(2);
    const [ name, setName ] = useState('');
    const [ counter, setCounter] = useState(0);

    const settingName = () =>{
        setName(serena.name);
        setCounter(counter + 1);
        if (counter > 0 ){
            setCounter(0);
            setName(null);
        }
    }
    return (
        <div>
            <button className=" glow-button Serena-Name-button" onClick={settingName}>Name</button>
            <h1 className="Serena-Name">{name}</h1>
        </div>
    );
}

function Pfp() {
    const serena = MemberApi(2);
    const [ pfp, setPfp ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ c1, setC1 ] = useState('');

     const settingPfp = () => {
        setPfp(serena.pfp);
        setC1("Serena-Pfp")    
        setCounter(counter + 1);
        if (counter > 0) {
            setCounter(0);
            setPfp(null);
            setC1(null);
        }
    }
    return (
        <div>
            <button className="glow-button Serena-Photo-button" onClick={settingPfp}>Photo</button>
            <img className={c1} src={pfp} height="170px" width= "auto"/>
        </div>
   );
}

function MySchool(){
    const serena = MemberApi(2);
    const [ school, setSchool ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ logo, setLogo ] = useState('');

    const settingSchool = () => {
        setSchool(serena.school);
        setCounter(counter + 1);
        setLogo(serena.uwLogo);
        if (counter > 0) {
            setCounter(0);
            setSchool(null);
            setLogo(null);
        }
    }
    return (
        <div>
            <button className=" glow-button Serena-School-button" onClick={settingSchool}>School</button>
            <h1 className="Serena-School">{school}</h1>
            <img src={logo} className="Serena-School-logo"/>
        </div>
   );
}

function Program(){
    const serena = MemberApi(2);
    const [ program, setProgram ] = useState('');
    const [ counter, setCounter] = useState(0);

    const settingProgram = () =>{
        setProgram(serena.program);
        setCounter(counter + 1);
        if (counter > 0 ){
            setCounter(0);
            setProgram(null);
        }
    }
    return (
        <div>
            <button className=" glow-button Serena-Program-button" onClick={settingProgram}>Program</button>
            <h1 className="Serena-Program">{program}</h1>
        </div>
    );
}

function Hobbies(){
    const serena = MemberApi(2);
    const [ hobby, setHobbie ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const settingHobby = () => {
        setHobbie(serena.hobbies[counter]);
        setCounter(counter + 1);
        if (counter === serena.hobbies.length){
            setCounter(0);
        }
    }
    
    return (
        <div>           
            <button className=" glow-button Serena-Hobby-button" onClick={settingHobby}>Hobby#{counter}</button>
            <h1 className="Serena-Hobbies">{hobby}</h1>
        </div>
    );
}

function Interests(){
    const serena = MemberApi(2);
    const [ interest, setInterest ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const settingInterest = () => {
        setInterest(serena.interests[counter]);
        setCounter(counter + 1);
        if (counter === serena.interests.length){
            setCounter(0);
            setInterest(null);
        }
    }
    
    return (
        <div>           
            <button className=" glow-button Serena-Interest-button" onClick={settingInterest}>Interest#{counter}</button>
            <h1 className="Serena-Interest">{interest}</h1>
        </div>
    );
}

function Linkedin(){
    const serena = MemberApi(2);
    const [ linkedin, setLinkedin ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ link, setLink ] = useState(null);
    const [ c1, setC1 ] = useState('');


    const settingLinkedin = () => {
        setLinkedin(serena.qr);
        setLink(serena.link);
        setCounter(counter + 1);
        setC1("Serena-Linkedin-qr");
       

        if (counter > 0){
            setLinkedin(null);
            setLink(null);
            setCounter(0);
            setC1(null);
        }
    }
    return (
    <div>
        <div className="Serena-Linkedin-box"></div>
        <button className="glow-button Serena-Linkedin-button" onClick={settingLinkedin}>Linkedin</button>
        <a target="_blank" href={link}>
            <img src={linkedin} className={c1}/>
        </a>
    </div>
    );
}
export { Name, Pfp, MySchool, Hobbies, Interests, Program, Linkedin };