import React, {Component} from 'react';
import './Styles/parcials/gallery1.scss'

class Gallery extends Component {
    state ={
        listaA : [
             '/images/image00001.jpeg',
            '/images/image00003.jpeg',
            '/images/image00004.jpeg',
            '/images/image00007.jpeg',
            '/images/image00001.jpeg',
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
        this.setState( {
            listaB:  [  ...this.state.listaB, this.state.listaA[index] ],
            listaA: this.state.listaA.filter( (el,indexA) => indexA !== index  )
        } );
        this.setState({size:'250px'})
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

                <ul>

                    {
                        this.state.listaA.map( (el,index) => <li  onClick={() => this.handleClick(index)} >{
                            <img style ={style}src={el} />
                            }</li> )
                    }
                </ul>
<hr/>
                <p>Selected photo</p>
                <ul>

                    {
                        this.state.listaB.map( el => <li style ={secondStyle}>{<img style={secondStyle} src={el} />}</li> )
                    }
                </ul>
            </div>
        )
    }
}

// class ImageLi extends Component{
//     state={
//         size: '150px'
//     };
//     handleOnClick=()=>{
//         this.setState({size:'300px'})
//     }
//     render() {
//         let style={
//             width:this.state.size,
//             height:this.state.size,
//              backgroundImage: `url({this.props.image})`
//         };
//         return (
//             <li style={style} onClick={this.handleOnClick}></li>
//         )
//     }
// }
//
//
// class Gallery extends Component{
//    state ={
//        type: 'small',
//        images:['./Styles/images/IMG-20190825-WA0005.jpg']
//    }
//
//
//     render() {
//         return <div className='frame'>
//             <ul>
//                 <ImageLi image={this.state.images[0]} />
//                 <ImageLi image={this.state.images} />
//                 <ImageLi image={this.state.images} />
//                 <ImageLi image={this.state.images} />
//                 <ImageLi image={this.state.images} />
//                 <ImageLi image={this.state.images} />
//                 <ImageLi image={this.state.images} />
//                 <ImageLi image={this.state.images} />
//                 <ImageLi image={this.state.images} />
//                 <ImageLi image={this.state.images} />
//
//         </ul>
//         </div>
//     }
// }



export default Gallery





