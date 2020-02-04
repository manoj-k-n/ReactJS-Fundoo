import React, { Component } from 'react'
import TextFiled from '@material-ui/core/TextField'
import Controller from '../Controller/UserContoller'
import { Snackbar } from '@material-ui/core'
import './User.css';

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Email:'',
             Password:'',
             error:false,
             message:''
        }
    }
    onchangeEmail=(event)=>
    {
       this.setState({ Email:event.target.value})
    }
    onchangePassword=event=>
    {
        this.setState({Password:event.target.value})
    }
    onclick=()=>
    {
        if(this.state.Email === ''|| !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Email))
        {
            this.setState({
                error:true,
                message:'Invalid Email'
            }
            )
        }
        else if(this.state.Password==='')
        {
            this.setState({
                error:true,
                // message:'Please Enter the Password'
            })
        }
        else{
            var logindetails={
                email:this.state.Email,
                password:this.state.Password
            }
            Controller.login(logindetails).then((res)=>{
             if(res.data.messagecode===200)
             {
                 console.log(res)
                 console.log(res.status)
                   localStorage.setItem('logintoken',res.data.obj)
                   this.setState({
                    error:true,
                    message:'Login success'
                     } )
                this.props.history.push("/dashbord")

             }
             else{
                this.setState({
                    error:true,
                    message:'Login Failed Inavlid User'
                     } )

             }
            })

        }
    }

    render() {
        return (
        
            <div className='login'>
                <Snackbar/> 
                <h1 className='login-h1'> FUNDOO LOGIN</h1>
                
                <div className='login-email'>
                  
                <TextFiled id="Email"
                value={this.state.Email}
                label="Email"
                variant="outlined"
                onChange={this.onchangeEmail}/>
                </div>
                         
                <div className='login-password'>
                    <TextFiled id="password"
                    value={this.state.Password}
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={this.onchangePassword}/>
                </div>
                <div className='login-buttton'>
                    <button variant="outlined" onClick={this.onclick}>Submit</button>
                </div>
                <p className="login-forgot-password">
                Registered <a href="/register">Registration?</a>  Forgot <a href="/forgot"> password?</a>
                </p>
                <p className="login-register">
                     
                </p>
            </div>
         
        )
    }
}

export default Login