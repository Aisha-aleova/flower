import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./components.css";
import downarrow from "../utils/icons/downarrow.svg";
import uparrow from "../utils/icons/uparrow.svg";


export default function HeadAccordion(props) {
    const {title, array} = props;
    const [drop,setDrop] = useState(false); 


    function dropList(){
      setDrop(!drop);
    }
  return (
    <div className='accordion'>
      <div onClick={dropList} className='accordionHead'>
          <p>{title}</p>
          {drop ?
            <img src={uparrow} alt="uparrow"/>
          : <img src={downarrow} alt="downarrow"/>
          }
          
        </div>
       
        {drop ? 
         <div className='accordionDetails'>
        <ul className='accordionList'>
          {
            array.map((item, index)=>(
              <li className='accordionListli' key={index}>
                <NavLink onClick={dropList} className={"navlink"} to={"/" + item} >
                    {item}
                </NavLink>
                </li>
            ))
        }
        </ul>
        </div> : <></>}
        </div>
  );
}