import React,{ useState, useEffect } from 'react';

function MemberApi(id){ //pass in your id (index number in group-data.js)
    const [ members, setMembers ] = useState([]);

    useEffect(() => {
        fetch('https://skills-assignment-back-end.herokuapp.com/')
        .then((response) => response.json())
        .then((json) => {
            setMembers(json.AllMembers[id])
            console.log(json)

        })
    }, [])
        
    return members
}

export default MemberApi;
