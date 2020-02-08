import React, { Component } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Createnote from './createnote'
import GetNotes from './GetNotes';
import DialogBox from './DilogBox'




export class DashBord extends Component {
    constructor(props){
        super(props);
        this.state={
            dialogOpen:false
        }
    }
    handleDialog=()=>{
        this.setState={dialogOpen:!this.this.state.dialogOpen}
    }
    render() {
        return (
            <div>
             {/* <NavBar/> */}
             <Createnote/>
             <GetNotes handleDialog={this.handleDialog}/>
             <DialogBox handleDilag=/>
             </div>
        )
    }
}

export default DashBord
