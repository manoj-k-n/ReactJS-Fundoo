import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Controller from '../Controller/UserContoller'
import SnackBar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'

export class Registration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'',
             Email:'',
             SecondName:'',
             Password:'',
             passwordAgain:'',
             MobileNo:'',
             error:false,
             message:'',
        }
    }
    SnackBarclose =()=>
        {
           this.setState({
               error:true
           })
        }
    
    onChangename=event =>{
        this.setState({Name:event.target.value})
      
    }
    onChangeEmail =event=>{
        this.setState({Email:event.target.value})
    }
    onChangeMobileNo=event=>{
        this.setState({MobileNo:event.target.value})
    }
    onChangePassword=event=>{
        this.setState({Password:event.target.value})
    }
    onchangeSecondName=(event)=>{
        this.setState({SecondName:event.target.value})
    }
    onChangePasswordAgain=(event)=>{
        this.setState({passwordAgain:event.target.value})
    }
    onSubmit=()=>{
        console.log("now")
        if(this.state.Name==='')
        {
            console.log("name")
            
           this.setState({
               error:true,
               message:'Please Enter The Name'
           })
           
        }
        else if(this.state.SecondName==='')
        {
            console.log("name")
            
            this.setState({
                error:true,
                message:'Please Enter The SecondName'
            })
        }
        else if(this.state.Email===''|| !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Email))
        {
            console.log("email")
           this.setState({
               error:true,
               message:'Please Enter The Valid Email'
           })
        }
        else if(!/^[6789]\d{9}$/.test(this.state.MobileNo)||this.state.MobileNo==='')
        {
            console.log("mobileno")
            this.setState({
                error:true,
                message:'Please give the Proper MobileNo'
            })
        }
        else if(this.state.Password.length<7||this.state.passwordAgain.length<7)
        {
            console.log("comming......")
            this.setState({
                error:true,
                message:'Password Must be More Than Five Values'
              
            }
           )
        }
        else{
            var registratioDetails={
                firstname:this.state.Name,
                lastname:this.state.SecondName,
                email:this.state.Email,
                mobileno:this.state.MobileNo,
                password:this.state.Password,
                passwordagain:this.state.passwordAgain
            }
            console.log(registratioDetails)
            Controller.register(registratioDetails).then((res)=>
           {
               console.log(res.data.token)
               console.log("End.....")
               console.log(res)
               
               if(res.status===200)
               {
                this.props.history.push("/login")
                this.setState({
                    error:true,
                    message:'Registration success'
                })
               }
               else{
                this.setState({
                    error:true,
                    message:'Please Reregister'
                })
                   console.log(" validInvalidation")
               }   
           })
        }
        }
    
    
    render() {
        return (
            
            <div>
                <SnackBar  
                 anchorOrigin={{vertical:'center',horizontal:'center'}}
                 open={this.state.error}
                 autoDuration={3000}
                 onClose={this.SnackBarclose} 
                 message={this.state.message}
                 action={[
                     <IconButton
                     key="close"
                     arial-label="close"
                     color="white">X</IconButton>
                 ]} />
                <div>
                <TextField id="Name" 
                label="Name" 
                variant="outlined"
                value={this.state.Name}
                onChange={this.onChangename}  />
                </div>
                 
                 <div>
                     <TextField id="SecondName"
                     label="SecondName"
                     variant="outlined"
                     value={this.state.SecondName}
                     onChange={this.onchangeSecondName}/>
                 </div>
                <div>
                <TextField id="Email"
                label="Email"
                variant="outlined"
                value={this.state.Email}
                onChange={this.onChangeEmail}/>
                </div>

                <div>
             <TextField id="MobileNo"
             label="MobileNo"
             variant="outlined"
             value={this.state.MobileNo}
             onChange={this.onChangeMobileNo}/>
              </div>

                <div>
              <TextField id="Password"
              label="password"
              type="password"
              variant="outlined"
              value={this.state.Password}
              onChange={this.onChangePassword}/>
                </div>

                <div>

                    <TextField id="passwordAgain"
                    label="Password"
                    type="Password"
                    variant="outlined"
                    value={this.state.passwordAgain}
                    onChange={this.onChangePasswordAgain}/>
                </div>
               
                <div>
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
              
            </div>
        )
    }
}

export default Registration