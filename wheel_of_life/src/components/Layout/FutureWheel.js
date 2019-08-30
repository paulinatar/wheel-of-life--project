import React,{Component} from "react";
import '../Styles/parcials/FutureWheel.scss'

import Wheel from '../Wheel'
import Gallery from '../gallery1'


class FutureWheel extends Component{
    render() {
        return (<div className='futureText'>
            <h1 >What do you expect to achieve after completing our program ? </h1>
        <Wheel/>
            <h2>Choice four photo which should be showing your life in future</h2>
<Gallery/>
        </div>)
    }
}

export default FutureWheel