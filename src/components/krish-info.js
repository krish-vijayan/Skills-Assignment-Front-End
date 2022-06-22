import React, {useState} from 'react';
import MemberApi from './member-api-call';


function Name() {
    const krish = MemberApi(0); //FOR API CALL, ENTER YOUR ID MUST ADD FOR EACH FUNCTION!
    const [ name, setName ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const settingName = () => { 
       setName(krish.name);
       setCounter(counter + 1);
       if (counter > 0){
        setCounter(0);
        setName(null);
       }
    }
   return (
    <div>
    <button className="glow-button Name-button" onClick={settingName}>Name</button>
        <h1 className="Name">{name}</h1>
        
   </div>
   );
}

function Pfp() {
    const krish = MemberApi(0);
    const [ pfp, setPfp ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ c1, setC1 ] = useState('');

     const settingPfp = () => {
        setPfp(krish.pfp);
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

function Instructions(){
    const krish = MemberApi(0);
    return  <p className ="Instruction">
               Hi there, this is an interactive page so be sure to click on the buttons to find out more about me!
            </p>;
}

function MySchool(){
    const krish = MemberApi(0);
    const [ school, setSchool ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ logo, setLogo ] = useState('');

    const settingSchool = () => {
        setSchool(krish.school);
        setCounter(counter + 1);
        setLogo(krish.uwLogo);
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
    const krish = MemberApi(0);
    const [ program, setProgram ] = useState('');
    const [ counter, setCounter] = useState(0);

    const settingProgram = () =>{
        setProgram(krish.program);
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
    const krish = MemberApi(0);
    const [ hobby, setHobbie ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const settingHobby = () => {
        setHobbie(krish.hobbies[counter]);
        setCounter(counter + 1);
        if (counter === krish.hobbies.length){
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
    const krish = MemberApi(0);
    const [ interest, setInterest ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const settingInterest = () => {
        setInterest(krish.interests[counter]);
        setCounter(counter + 1);
        if (counter === krish.interests.length){
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
    const krish = MemberApi(0);
    const [ linkedin, setLinkedin ] = useState('');
    const [ counter, setCounter ] = useState(0);
    const [ link, setLink ] = useState(null);
    const [ c1, setC1 ] = useState('');


    const settingLinkedin = () => {
        setLinkedin(krish.qr);
        setLink(krish.link);
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
        <button className="glow-button Linkedin-button" onClick={settingLinkedin}>Linkedin</button>
        <a target="_blank" href={link}>
            <img src={linkedin} className={c1}/>
        </a>
    </div>
    );
}

function Texture(){
    const krish = MemberApi(0);
    return <img src="../images/texture.png" className="Texture"/>
}
export { Name, Pfp, Instructions, MySchool, Hobbies, Interests, Program, Linkedin, Texture};
