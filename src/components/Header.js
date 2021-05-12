import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header=()=>{
   return (
       <div className="menu">
       <div className="ui inverted menu">
           <div className="right menu">
               <Link to="/Search" className="item">
                   Search
               </Link>
           </div>
           <div className="right menu">
               <Link to="/Entertainment" className="item">
                   Entertainment
               </Link>
           </div>
           <div className="right menu">
               <Link to="/Sports" className="item">
                   Sports
               </Link>
           </div>
           <div className="right menu">
               <Link to="/Business" className="item">
                   Business
               </Link>
           </div>
           <div className="right menu">
               <Link to="/Health" className="item">
                   Health
               </Link>
           </div>
           </div>
       </div>
       
   );
}
export default Header;