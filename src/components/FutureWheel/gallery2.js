import React, {Component} from 'react';
import '../NowWheel/gallery1.scss'
import {Link} from "react-scroll";

class GalleryF extends Component {
    state ={
        listaA : [
            '/images/image00005.jpeg',
            '/images/image00006.jpeg',
            '/images/image00008.jpeg',
            '/images/image00010.jpeg',
            '/images/image00013.jpeg',
            '/images/image00014.jpeg',
            '/images/image00017.jpeg',
            '/images/image00022.jpeg',
            '/images/image00023.jpeg',
            '/images/image00027.jpeg'
        ],
        listaB : [],
        size: '150px'
    };
    handleClick = (index) => {
        if(this.state.listaB.length<4){
            this.setState( {
                listaB:  [  ...this.state.listaB, this.state.listaA[index] ],
                listaA: this.state.listaA.filter( (el,indexA) => indexA !== index  )
            } );

            this.setState({size:'250px'})}
    };
    render(){
        let style ={
            width:'150px',
            height:'150px'};
        let secondStyle ={
            width: '250px',
            height: '250px'
        };
        return (
            <div className='frame'>
                <button><Link to ='selectedPhotos' spy={true} smooth = {true} duration = {500}>Photos</Link></button>
                <p name ="selectedPhotos">Selected photo</p>
                <ul>
                    {
                        this.state.listaB.map( el => <li style ={secondStyle}>{<img style={secondStyle} src={el} />}</li> )
                    }
                </ul>
                <hr/>
                <ul>
                    {
                        this.state.listaA.map( (el,index) => <li  onClick={() => this.handleClick(index)} >{
                            <img style ={style}src={el} />
                        }</li> )
                    }
                </ul>
            </div>
        )
    }
}
export default GalleryF
