import {Link} from 'react-router-dom';


function TitlePage(){
    return (
        <div className="Title-page">
            <h1 className="Title">Group 198 Introductions</h1>
           
                <Link to={"/krish"}><button className=" grow glow-button-title Title-krish">Krish</button></Link>
                <Link to={"/brandon"}><button className=" grow glow-button-title Title-brandon">Brandon</button></Link>
                <Link to={"serena"}><button className=" grow glow-button-title Title-serena">Serena</button></Link>
                <Link to={"taeyun"}><button className=" grow glow-button-title Title-taeyun">Taeyun</button></Link>
                <Link to={"parsh"}><button className=" grow glow-button-title Title-parsh">Parsh</button></Link>

               
        </div>    
    );
}

export default TitlePage;