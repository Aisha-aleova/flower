import { useContext } from "react";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import HeaderAccordion from "../components/Accordion";
import {ContextData} from "../Context/Context";
import Home from "../pages/Home/Home";
import "./Header.css";

function Header(){

    const {logo, profilephoto} = useContext(ContextData);

    return(
        <Router>
            <nav className="nav">
            <div className="pages">
            <NavLink className={"navlinkimage"} to="/">
                <figure>
                    < img src={logo} alt="Logo"/>
                </figure>
            </NavLink>
           <ul className="navlist">
            <li>
                    <HeaderAccordion title="Magazine" array={["News", "Blogs", "News", "Blogs", "News", "Blogs"]}/>
            </li>
            <li>
                <HeaderAccordion title="Corsi" array={["News", "Blogs"]}/>
            </li>
            <li>
                <HeaderAccordion title="Fiere" array={["News", "Blogs"]}/>
            </li>
            <li>
            <HeaderAccordion title="Negozi" array={["News", "Blogs"]}/>
            </li>
           </ul>
           <div className="rightside">
           <div className="searchbar">
            <input type="search"/>
           </div>
           </div>
           <div className="profilePicture">
           <figure>
            <img src={profilephoto} alt="profile" />
           </figure>
           </div>
           <div className="profileDescription">
           <HeaderAccordion  title="Annachiara" array={["Profile", "Channels", "Messages"]}/>
           </div>
           </div>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/News" element={<Home/>}/>
            <Route path="/Blogs" element={<Home/>}/>
            <Route path="/services" element={<Home/>}/>
            <Route path="/blog" element={<Home/>}/>
            <Route path="/contactus" element={<Home/>}/>
        </Routes>
        </nav>
        </Router>
        )
}

export default Header;