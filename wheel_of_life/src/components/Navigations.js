import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import './Styles/parcials/Navigations.scss'







function Navigations() {

    const selectedStyle ={
       color: 'magenta',
        font:'Merriweather',
        listStyleType:'none',
        fontSize:'20px',
        textDecoration:'none'
    };

    return(
        <nav className="around">
            <div className='menuWelcome'>
            <h1>CREATE THE LIFE WORTH LIVING </h1>
                <h4>KreivoPlan Kasia Nowacka</h4>
            </div>
            {/*<div className='menuDiv'>*/}
            {/*<ul className='menu'>*/}
            {/*    <li><NavLink exact to="/" activeStyle={selectedStyle} className='menuStyle'>Welcome</NavLink></li>*/}
            {/*    <li><NavLink to="/now" activeStyle={selectedStyle}className='menuStyle'>Now</NavLink></li>*/}
            {/*    <li><NavLink to="/future" activeStyle={selectedStyle}className='menuStyle'>Future</NavLink></li>*/}

            {/*</ul>*/}
            {/*</div>*/}
        </nav>
    )
}

export default Navigations