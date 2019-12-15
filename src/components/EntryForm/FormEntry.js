import React, {Component} from "react";
import './EntryForm.scss'
import {NavLink} from "react-router-dom";


class EntryForm extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        mobile: "",
        errorName: false,
        errorSurname: false,
        errorContact: false,
        formSend: false
    };

    handleUserName = (event) => {
        this.setState({name: event.target.value})
    };
    handleUserSurname = (event) => {
        this.setState({surname: event.target.value})
    };
    handleUserEmail = (event) => {
        this.setState({email: event.target.value})
    };
    handleUserMobile = (event) => {
        this.setState({mobile: event.target.value})
    };
    handleSubmit = (event) => {
        this.setState({formSend:false});
        this.setState({errorName:false});
        this.setState({errorSurname:false});
        this.setState({errorContact:false});

        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
        const nameSurname = /^[a-zA-Z]{2,}$/i;
        let name = this.state.name;
        let surname = this.state.surname;
        let email = this.state.email;
        let mobile =this.state.mobile;

        event.preventDefault();
        if (nameSurname.test(name)&& nameSurname.test(surname)&& mailReg.test(email)&& mobile.length >4){
            this.setState({formSend:true})
        }else {
            if (!mailReg.test(email)){
                this.setState({errorContact:true})
            }
            if (!nameSurname.test(name)){
                this.setState({errorName:true})
            }
            if (!nameSurname.test(surname)){
                this.setState({errorSurname:true})
            }
            if (mobile.length<4){
                this.setState({errorContact:true})
            }
        }
    };
    render() {
        return <>
            <div  className='firstForm'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input name='name' onChange={this.handleUserName} type='text' value={this.state.name}
                           placeholder='Enter Name'/>
                    <label>Enter Name </label>
                    {this.state.errorName && <p style={{color:'red', fontSize:'12px'}}>Please enter name</p>}
                    <br/>
                    <input name='surname' onChange={this.handleUserSurname} type='text'
                           value={this.state.surname} placeholder='Enter Surname'/>
                    <label >Enter Surname</label>
                    {this.state.errorSurname && <p style={{color:'red', fontSize:'12px'}}>Please enter surname </p>}
                    <br/>
                    <input name='email' onChange={this.handleUserEmail} type='email' value={this.state.email}
                           placeholder='Email'/>
                    <input name='mobile' onChange={this.handleUserMobile} type='number'
                           value={this.state.mobile} placeholder='Mobile Phone'/>
                    <br/>
                    <label> Method of contact: email or/and mobile phone</label>
                    {this.state.errorContact && <p style={{color:'red', fontSize:'12px'}}>Please enter email or/and mobile phone</p>}
                    <br/>
                    <button onClick={this.state.formSend} className='greenBtn' type='submit' value={this.state.formSend}>Send</button>
                    {this.state.formSend && <p>Thank you !</p>}
                    <button className='greenBtn'><NavLink to="/now" style={{textDecoration:'none', color:"white"}}>Go to your present life</NavLink></button>
                </form>
            </div>
        </>
    }
}

export default EntryForm
