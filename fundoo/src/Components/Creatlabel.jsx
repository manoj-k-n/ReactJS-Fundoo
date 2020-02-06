import React, { Component } from 'react'
import TextFiled from '@material-ui/core/TextField'
import CheckIcon from '@material-ui/icons/Check';

export class Creatlabel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             creatlabel:''
        }
    }
    
    onCreat=(event)=>{
        this.setState
        ({creatlabel:event.target.value })
       
    }
    getting=()=>
    {
        console.log(this.state.creatlabel)
    }
   
    
    render() {
        return (
            <div>
               <TextFiled id="Email"
                value={this.state.creatlabel}
                label="create note"
                onChange={this.onCreat}
                />
               
                <button onClick={this.getting}><CheckIcon/></button>
            </div>
        )
    }
}

export default Creatlabel
