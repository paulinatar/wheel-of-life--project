import React,{Component} from "react";
import '../Styles/parcials/FutureWheel.scss'

import Wheel from '../Wheel'


class FutureWheel extends Component{
    render() {
        return (<div className='futureText'>
            <h1 >What do you expect to achieve after completing our program ? </h1>
        <Wheel/>

        </div>)
    }
}

export default FutureWheel