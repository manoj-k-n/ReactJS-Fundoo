import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import TextFiled from '@material-ui/core/TextField'

export class DilogBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:false
               
        }
    }
    change=()=>{
        this.setState({
            open:true
        })
    }
    close=()=>{
        this.setState({
            open:false
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.change}>submite</button>
                </div>
                <Dialog open={this.state.open}>
                <TextFiled
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <button onClick={this.close}>submite</button>
                </Dialog>
            </div>
        )
    }
}

export default DilogBox
