import React, { Component } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Createnote from './createnote'
import GetNotes from './GetNotes';

import Controller from '../../src/Controller/UserContoller'
import "./note.css";
import AppNav from './AppNav'
import { ListItemSecondaryAction } from '@material-ui/core';
import PinNotes from './PinNotes';

export class DashBord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            notes: []
            
        }
    }
    handleDialog = () => {
        this.setState({ dialogOpen: !this.state.dialogOpen })
    }
    componentDidMount() {

        Controller.getAllNotes().then((res) => {
           
            this.setState({ notes: res.data.obj })
            console.log("Notes...", this.state.notes)
        })
    }
    render() 
    
    {
        let getNotes = this.state.notes.map(item => {
            console.log("item.......", item)
            
            console.log(" helll",item.pin_Note)
            
            
              if(item.pin_Note==false)
              {
                console.log("hello...........///////",item.pin_note)
                return (
                    <GetNotes data={item} handleDialog={this.handleDialog} />
                    )
              }
          
            }) 
        
        
          const getPinNotes=this.state.notes.map((pin)=>{
              if(pin.pin_Note)
              {
               return(<GetNotes data={pin} handleDialog={this.handleDialog}/>)
              }

        })
      

        return (
            <div>
                <AppNav/>
                <div>
                <Createnote />
                </div>


                <div className="noteSize">
                    <div className="pinname">PINNED</div>
                    
                <div className="getNotesContainer">
                    {getPinNotes}
                </div>
                </div>
               


                <div className="noteSize">
                <div className="pinname">OTHERS</div>
                <div className="getNotesContainer">
                    {getNotes}
                </div>
                </div>
                   
               
            </div>
        )
    }
}

export default DashBord
