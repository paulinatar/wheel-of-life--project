import React, {Component} from 'react';
import './gallery1.scss'

class Gallery extends Component {
    state ={
        listaA : [
             '/images/image00001.jpeg',
            '/images/image00003.jpeg',
            '/images/image00004.jpeg',
            '/images/image00007.jpeg',
            '/images/image00024.jpeg',
            '/images/image00009.jpeg',
            '/images/image00011.jpeg',
            '/images/image00015.jpeg',
            '/images/image00019.jpeg',
            '/images/image00021.jpeg'
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
    }
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

                <p>Selected photo</p>
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
export default Gallery





