import React, {Component} from "react";
import '../Styles/parcials/EntryForm.scss'


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


        // this.setState({errorSend:false});
        // this.setState({errorName: false});
        // this.setState({errorSurname:false});
        // this.setState({errorContact:false});
        // event.preventDefault();
        // if(this.state.name.length > 0 && this.state.surname.length> 0 && this.state.email.indexOf('@')!==1 &&this.state.mobile.length>0){
        //    this.setState({formSend: true});
        // } else {
        //    if(this.state.name.length < 0){
        //        this.setState({errorName: true})
        //    }
        //    if(this.state.surname.length<0){
        //        this.setState({errorSurname:true});
        //    } if(this.state.email.indexOf('@')!==1 && this.state.mobile.length<0){
        //         this.setState({errorContact:true})
        //     }
        // }
        //

    };


    render() {


        return <>
            <div  className='firstForm'>
                <form className='form' onSubmit={this.handleSubmit}>

                    <input name='userName' onChange={this.handleUserName} type='text' value={this.state.name}
                           placeholder='Enter Name'/>
                    <label>Enter Name </label>
                    {this.state.errorName && <p>Please enter name</p>}
                    <br/>


                    <input surname='userSurname' onChange={this.handleUserSurname} type='text'
                           value={this.state.surname} placeholder='Enter Surname'/>
                    <label>Enter Surname</label>
                    {this.state.errorSurname && <p>Please enter surname </p>}
                    <br/>


                    <input email='userEmail' onChange={this.handleUserEmail} type='email' value={this.state.email}
                           placeholder='Email'/>
                    <input mobile='userMobilePhone' onChange={this.handleUserMobile} type='text'
                           value={this.state.mobile} placeholder='Mobile Phone'/>
                    <br/>
                    <label> Method of contact: email or/and mobile phone</label>
                    {this.state.errorContact && <p>Please enter email or/and mobile phone</p>}
                    <br/>
                    <button type='submit' value='send'>Send</button>
                    {this.state.formSend && <p>Thank you</p>}

                </form>
            </div>
        </>
    }
}

export default EntryForm
