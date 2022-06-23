import MemberApi from './member-api-call';
import React, { useState } from 'react';

function BrandonName() {
    const brandon = MemberApi(1);
    const [name, setName] = useState('');
    var toggle = false;
    const settingName = () => {
        if (toggle) {
            setName(null);
            toggle = false;
        } else {
            setName(brandon.name);
            toggle = true;
        }
    }

    return (
        <div className="Brandon-Name-button">
            <button className="Brandon-button" onClick={settingName}>Name</button>
            <h1 className="Brandon-h1">{name}</h1>
        </div>
    );
}

function BrandonInterests() {
    const brandon = MemberApi(1);
    const [interest, setInterest] = useState('');
    var toggle = false;

    const settingInterest = () => {
        if (toggle) {
            setInterest(null);
            toggle = false;
        } else {
            setInterest(brandon.interests);
            toggle = true;
        }
    }

    return (
        <div className="Brandon-Interests-button">
            <button className="Brandon-button" onClick={settingInterest}>Interests</button>
            <h1 className="Brandon-h1">{interest}</h1>
        </div>
    );
}


function BrandonSchool() {
    const brandon = MemberApi(1);
    const [ school, setSchool ] = useState('');
    var toggle = false;

    const settingSchool = () => {
        if (toggle) {
            setSchool(null);
            toggle = false;
        } else {
            setSchool(brandon.school);
            toggle = true;
        } 
    }

    return (
        <div className="Brandon-School-button">
            <button className="Brandon-button" onClick={settingSchool}>School</button>
            <h1 className="Brandon-h1" alt="University of Waterloo">{school}</h1> 
        </div>
    );
}

function BrandonProgram() {
    const brandon = MemberApi(1);
    const [program, setProgram] = useState('');
    var toggle = false;

    const settingProgram = () => {
        if (toggle) {
            setProgram(null);
            toggle = false;
        } else {
            setProgram(brandon.program);
            toggle = true;
        }
    }
    return (
        <div className="Brandon-Program-button">
            <button className="Brandon-button" onClick={settingProgram}>Program</button>
            <h1 className="Brandon-h1">{program}</h1>
        </div>
    );
}


function BrandonLinkedIn() {
    const brandon = MemberApi(1);
    return (
        <div className="Brandon-Linkedin">
            <a target=" blank" href={brandon.linkedin}>
                <img style={{width: 150, height: 150}} 
                alt="linkedin" src={require('../images/linkedIn_logo.png')}></img>
            </a>
        </div>
    );
}

function BrandonGitHub() {
    const brandon = MemberApi(1);
    return (
        <div className="GitHub">
            <a target=" blank" href={brandon.github}>
                <img style={{width: 150, height: 150}}
                alt="github" src={require('../images/github_logo.png')}></img>
            </a>
        </div>
    );
}

export { BrandonName, BrandonSchool, BrandonInterests, BrandonProgram, BrandonLinkedIn, BrandonGitHub };
