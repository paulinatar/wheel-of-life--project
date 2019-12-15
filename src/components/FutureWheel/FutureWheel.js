import React,{Component} from "react";
import './FutureWheel.scss'
import Wheel from '../Wheel/Wheel'
import GalleryF from './gallery2'


class FutureWheel extends Component{
    render() {
        return (<div className='futureText'>
            <h1 >What do you expect to achieve after completing our program ? </h1>
              <Wheel/>
              <h2>Choice four photo which should be showing your life in the future</h2>
                <GalleryF/>
            <p>Thank you for your cooperation ! </p>
            <p>Your answers help us to starting work to improve your life</p>
        </div>)
    }
}
export default FutureWheel