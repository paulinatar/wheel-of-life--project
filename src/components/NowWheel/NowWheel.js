import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import Wheel from '../Wheel/Wheel'
import './NowWheel.scss'
import Gallery from "./gallery1";

class NowWheel extends Component{
    render() {
        return (<>
            <div className='nowWheel'>
              <h1>Think about your present life</h1>
                <h3> Push the button with number how satisfied are you with in this segment of your life in this moment? ( 1 is very low ) </h3>
                  <Wheel/>
                <h2> Choice four photo which are close to your life in this moment</h2>
                  <Gallery/>
            </div>
            <button className='greenBtn'><NavLink to="/future" style={{textDecoration:'none', color:"white"}}>Future</NavLink></button>
            </>)
    }
}

 export default NowWheel