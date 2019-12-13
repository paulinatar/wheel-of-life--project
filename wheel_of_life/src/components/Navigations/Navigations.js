import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import './Navigations.scss'


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

        </nav>
    )
}

export default Navigations