import React,{Component} from "react";
import Wheel from '../Wheel'
import '../Styles/parcials/NowWheel.scss'
import Gallery from "../gallery1";

class NowWheel extends Component{
    render() {
        return (<>
            <div className='nowWheel'>
            <h1>Thing about your life right now</h1>
            <h3> Mark on scale how satisfied are you with in segment ? ( 1 is very low ) </h3>

            <Wheel/>
                <h2> Choice four photo which are close to your life</h2>
            <Gallery/>
            </div>
            </>)
    }
}

 export default NowWheel