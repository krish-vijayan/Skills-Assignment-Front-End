import MemberApi from './member-api-call';
import React, {useState, useEffect} from 'react';

function Name() {
    const taeyun = MemberApi(3);
    const [ name, setName ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const settingName = () => {
       setName(taeyun.name);
       setCounter(counter + 1);
       if (counter > 0){
        setCounter(0);
        setName(null);
       }
    }
   return (
    <div>
    <button className="glow-button Name-button" onClick={settingName}>Name</button>
        <h1 class="Name">{name}</h1>
   </div>
   );
}

function Pfp() {
    const taeyun = MemberApi(3);
    const [ pfp, setPfp ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ c1, setC1 ] = useState('');

     const settingPfp = () => {
        setPfp(taeyun.pfp);
        setC1("Pfp")
        setCounter(counter + 1);
        if (counter > 0) {
            setCounter(0);
            setPfp(null);
            setC1(null);
        }
    }
    return (
        <div>
            <button className="glow-button Photo-button" onClick={settingPfp}>Photo</button>
            <img className={c1} src={pfp}/>
        </div>
   );
}


function MySchool(){
    const taeyun = MemberApi(3);
    const [ school, setSchool ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ logo, setLogo ] = useState('');

    const settingSchool = () => {
        setSchool(taeyun.school);
        setCounter(counter + 1);
        setLogo(taeyun.uwLogo);
        if (counter > 0) {
            setCounter(0);
            setSchool(null);
            setLogo(null);
        }
    }
    return (
        <div>
            <button className=" glow-button School-button" onClick={settingSchool}>School</button>
            <h1 className="School">{school}</h1>
            <img src={logo} className="School-logo"/>
        </div>
   );
}

function Program(){
    const taeyun = MemberApi(3);
    const [ program, setProgram ] = useState('');
    const [ counter, setCounter] = useState(0);

    const settingProgram = () =>{
        setProgram(taeyun.program);
        setCounter(counter + 1);
        if (counter > 0 ){
            setCounter(0);
            setProgram(null);
        }
    }
    return (
        <div>
            <button className=" glow-button Program-button" onClick={settingProgram}>Program</button>
            <h1 className="Program">{program}</h1>
        </div>
    );
}

function Hobbies(){
    const taeyun = MemberApi(3);
    const [ hobby, setHobbie ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const settingHobby = () => {
        setHobbie(taeyun.hobbies[counter]);
        setCounter(counter + 1);
        if (counter === taeyun.hobbies.length){
            setCounter(0);
        }
    }
    
    return (
        <div>           
            <button className=" glow-button Hobby-button" onClick={settingHobby}>Hobby#{counter}</button>
            <h1 className="Hobbies">{hobby}</h1>
        </div>
    );
}

function Interests(){
    const taeyun = MemberApi(3);
    const [ interest, setInterest ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const settingInterest = () => {
        setInterest(taeyun.interests[counter]);
        setCounter(counter + 1);
        if (counter === taeyun.interests.length){
            setCounter(0);
            setInterest(null);
        }
    }
    
    return (
        <div>           
            <button className=" glow-button Interest-button" onClick={settingInterest}>Interest#{counter}</button>
            <h1 className="Interest">{interest}</h1>
        </div>
    );
}

function Linkedin(){
    const taeyun = MemberApi(3);
    const [ linkedin, setLinkedin ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ link, setLink ] = useState(null);
    const [ c1, setC1 ] = useState('');


    const settingLinkedin = () => {
        setLinkedin(taeyun.qr);
        setLink(taeyun.link);
        setCounter(counter + 1);
        setC1("Linkedin-qr");
       

        if (counter > 0){
            setLinkedin(null);
            setLink(null);
            setCounter(0);
            setC1(null);
        }
    }
    return (
    <div>
        <div className="Linkedin-box"></div>
        <button className="glow-button Linkedin-button" onClick={settingLinkedin}>Linkedin</button>
        <a target="_blank" href={link}>
            <img src={linkedin} className={c1}/>
        </a>
    </div>
    );
}


export { Name, Pfp, MySchool, Hobbies, Interests, Program, Linkedin };
