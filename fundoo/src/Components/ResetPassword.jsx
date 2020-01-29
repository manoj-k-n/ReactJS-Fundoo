import React, { Component } from 'react'
import TextFiled from '@material-ui/core/TextField'
import Controller from '../Controller/UserContoller'

export class ResetPassword extends Component {
    
  

    constructor(props) {
        super(props)
    
        this.state = {
             password:'',
             passwordagain:'',
             error:false,
             message:''
             
        }
    }
 
    onchangepassword=(event)=>
    {
        this.setState({
            password:event.target.value
        })
    }
    onchangepasswordagain=event=>
    {
        this.setState({
            passwordagain:event.target.value
        })
    }
   
    onChilkChanges=()=>
    {
        if(this.state.password===''||this.state.password<7)
        {
            this.setState({
                error:true,
                message:'Invalid Password'
            })
        }
        else if(this.state.passwordagain===''||this.state.passwordagain<7)
        {
            this.setState({
                error:true,
                message:'Invalid PasswordAgain'
            })
        }
        else if(this.state.password===this.state.passwordagain)
        {
            var resetDetails={
                password:this.state.password,
                passwordagain:this.state.passwordagain
            }
               Controller.resetpassword(resetDetails).then((res)=>
               {
                this.props.history.push("/login")
               const remove= localStorage.removeItem('token');
               console.log("Yess"+remove)
               })
        }
    }
    
    render() {
        return (
            <div>
                <div>
                <TextFiled id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={this.state.password}
                onChange={this.onchangepassword}/>
                </div>
                <div>
                    <TextFiled id="passwordagain"
                    label="PasswordAgain"
                    type="password"
                    variant="outlined"
                    value={this.state.passwordagain}
                    onChange={this.onchangepasswordagain}/>
                </div>
                <div>
                    <button onClick={this.onChilkChanges}>Submmite</button>
                </div>
            </div>
        )
    }
}

export default ResetPassword
