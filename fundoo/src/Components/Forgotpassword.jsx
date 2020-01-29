import React, { Component } from 'react'
import TextFiled from '@material-ui/core/TextField'
import Controller from '../Controller/UserContoller'

export class Forgotpassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             error:false,
             message:''

        }
    }
    onChangeemail=event=>{
        this.setState({
           email: event.target.value
        })
    }
    onclick=()=>{
        if(this.state.email===''|| !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email))
        {
            this.setState({
                error:true,
                message:'Invaild Email'
            })
        }
        else{
            var forgotdetails={
                email:this.state.email
            }
            console.log("welcomee")
          Controller.Forgot(forgotdetails).then((res) => {
              console.log(res)
              console.log(res.data.obj)
            if(res.status===200)
            {
                   console.log("welome to forgot")        
                     localStorage.setItem('token',res.data.obj)
                     this.props.history.push('/resetpassword')
            }
            else
            {
                this.setState({
                error:true,
                message:'Invaild UserEmail'
            })
        }
          })
         
        }
    }
    
    render() {
        return (
            <div>
                <div>
                  <TextFiled id="Email"
                  label="Email"
                  value={this.state.email}
                  variant="outlined"
                  onChange={this.onChangeemail}/>
                </div>
                <div>
                    <button onClick={this.onclick}>Button</button>
                </div>
            </div>
        )
    }
}

export default Forgotpassword
