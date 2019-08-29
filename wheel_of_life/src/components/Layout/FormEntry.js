import React,{Component} from "react";
import '../Styles/parcials/EntryForm.scss'



class EntryForm extends Component{
    state = {
        name:'',
        surname:'',
        email:'',
        mobile:"",
            errorName:'false',
            errorSurname:'false',
            errorContact:'false',
        formSend :'false'
    };

    handleUserName = (event) =>{
        this.setState({name:event.target.value})
    };
    handleUserSurname =(event) =>{
        this.setState({surname:event.target.value})
    };
    handleUserEmail =(event) =>{
        this.setState({email:event.target.value})
    };
    handleUserMobile =(event)=>{
        this.setState({mobile:event.target.value})
    };
    handleSubmit =(event)=>{

        this.setState({errorSend:false});
        this.setState({errorName: false});
        this.setState({errorSurname:false});
        this.setState({errorContact:false});
        event.preventDefault();
        if(this.state.name.length > 0 && this.state.surname.length> 0 && this.state.email.indexOf('@')!==1 &&this.state.mobile.length>0){
           this.setState({formSend: true});
        } else {
           if(this.state.name.length < 0){
               this.setState({errorName: true})
           }
           if(this.state.surname.length<0){
               this.setState({errorSurname:true});
           } if(this.state.email.indexOf('@')!==1 && this.state.mobile.length<0){
                this.setState({errorContact:true})
            }
        }


    };




    render() {
        return<>
            <div className='firstForm'>
                {this.state.formSend &&<p>Thank you</p>}
                {this.state.errorName && <p>Please enter name</p>}
                {this.state.errorSurname && <p>Please enter surname </p>}
                {this.state.errorContact && <p>Please enter email or/and mobile phone</p>}


        <form  className='form' onSubmit={this.handleSubmit}>

            <input name = 'userName' onChange={this.handleUserName} type='text' value={this.state.name} placeholder='Enter Name'/>
            <label>Enter Name </label>
<br/>


            <input surname = 'userSurname' onChange={this.handleUserSurname} type='text' value={this.state.surname} placeholder='Enter Surname'/>
            <label>Enter Surname</label>
<br/>



            <input email = 'userEmail' onChange={this.handleUserEmail} type='email' value={this.state.email} placeholder='Email'/>
            <input mobile = 'userMobilePhone' onChange={this.handleUserMobile} type='text' value={this.state.mobile} placeholder='Mobile Phone'/>
            <br/>
            <label> Method of contact: email or/and mobile phone</label>

            <br/>
            <button type ='submit' value='send'>Send</button>





        </form>




            </div></>
        }
        }

        export default EntryForm
