import React, {Component} from "react";
import './EntryForm.scss'
import ReactContactForm from 'react-mail-form';
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
        event.preventDefault()
        if (this.state.name.length < 2) {
            this.setState({errorName: true});
        } else {
            this.setState({errorName: false})
        }

        if (this.state.surname.length < 2) {
            this.setState({errorSurname: true})
        } else {
            this.setState({errorSurname: false})
        }

        if (this.state.email < 2 && this.state.email.indexOf('@')) {
            this.setState({errorContact: true})
        } else {
            this.setState({errorContact: false})
        }

        if (this.state.mobile.length < 5) {
            this.setState({errorContact: true})
        } else {
            this.setState({errorContact: false})
        }




    };


    render() {


        return <>
            <div  className='firstForm'>
                <form className='form' onSubmit={this.handleSubmit}>
                    {/*<ReactContactForm to="p.tarnawska@gmail.com"   />*/}
                    <input name='userName' onChange={this.handleUserName} type='text' value={this.state.name}
                           placeholder='Enter Name'/>
                    <label>Enter Name </label>
                    {this.state.errorName && <p style={{color:'red', fontSize:'12px'}}>Please enter name</p>}
                    <br/>


                    <input surname='userSurname' onChange={this.handleUserSurname} type='text'
                           value={this.state.surname} placeholder='Enter Surname'/>
                    <label >Enter Surname</label>
                    {this.state.errorSurname && <p style={{color:'red', fontSize:'12px'}}>Please enter surname </p>}
                    <br/>


                    <input email='userEmail' onChange={this.handleUserEmail} type='email' value={this.state.email}
                           placeholder='Email'/>
                    <input mobile='userMobilePhone' onChange={this.handleUserMobile} type='text'
                           value={this.state.mobile} placeholder='Mobile Phone'/>
                    <br/>
                    <label> Method of contact: email or/and mobile phone</label>
                    {this.state.errorContact && <p style={{color:'red', fontSize:'12px'}}>Please enter email or/and mobile phone</p>}
                    <br/>
                    <button className='greenBtn' type='submit' value='send'>Send</button>
                    {this.state.formSend && <p>Thank you</p>}
                    <button className='greenBtn'><NavLink to="/now" style={{textDecoration:'none', color:"white"}}>Your present</NavLink></button>
                </form>


            </div>







        </>
    }
}

export default EntryForm
