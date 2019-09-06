import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import Wheel from '../Wheel'
import '../Styles/parcials/NowWheel.scss'
import Gallery from "../gallery1";

class NowWheel extends Component{
    render() {
        const selectedStyle ={
            color: 'magenta',
            font:'Merriweather',
            listStyleType:'none',
            fontSize:'20px',
            textDecoration:'none'
        };
        return (<>
            <div className='nowWheel'>
            <h1>Thing about your life right now</h1>
            <h3> Mark on scale how satisfied are you with in segment ? ( 1 is very low ) </h3>

            <Wheel/>
                <h2> Choice four photo which are close to your life</h2>
            <Gallery/>
            </div>
            <div className='menuDiv'>
            <ul className='menu'>

                <button><NavLink to="/future" activeStyle={selectedStyle}className='menuStyle'>Future</NavLink></button>

            </ul>
            </div>
            </>)
    }
}

 export default NowWheel