import React, { Component } from 'react'

import Createnote from './createnote'
import GetNotes from './GetNotes';

import Controller from '../../src/Controller/UserContoller'
import "./note.css";
import AppNav from './AppNav'
import { ListItemSecondaryAction } from '@material-ui/core';

import SideNav from './sideNav';
import SideBar from './SideBar'


export class DashBord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            notes: [],
            sideNavstate:false,
            Archive:false,
            trans:false,
            reminder:false,
            createNotesDisplay:true,


           
            
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
    handleside=()=>{
        this.setState({sideNavstate:!this.state.sideNavstate})
    }
    render() 
    
    {
        let createNote  
        if(this.state.createNotesDisplay)
        {
            console.log("commmmmmmmm")
            createNote=<Createnote/>
        } 


        let getNotes = this.state.notes.map(item => {
            console.log("hii",item)
            
              if(!item.pin_note && this.state.createNotesDisplay && !item.archive && !item.trash)
              {
                console.log("hello...........///////",item.pin_note,item.Archive,item.trans)
                console.log(item.Archive)
                console.log(item.trans)
                return (
                    <GetNotes data={item} handleDialog={this.handleDialog} />
                    )
              }
          
            }) 
        
        
          let getPinNotes=this.state.notes.map((pin)=>{
              if(pin.pin_Note)
              {
               return(<GetNotes data={pin} handleDialog={this.handleDialog}/>)
              }

        })
       
        let appNav= <AppNav sideopen={this.handleside}/>
        let sideNav
        if(this.state.sideNavstate)
        {
            console.log("?????????",this.state.sideNavstate)
            sideNav =<SideNav/>
        }

       
        let Archive=this.state.notes.map((items)=>{
            if(this.state.Archive && items.archive)
        {
           return <GetNotes data={items} handleDialog={this.handleDialog} />
        }

        })
     
        let trans=this.state.notes.map((item)=>{
            if(item.trash)
            {
               return <GetNotes data={item} handleDialog={this.handleDialog} />
            }
        })

        
      
        return (
            <div>
                
               {appNav}
                <div>
                {createNote}
                {trans}
                {Archive}
                
                
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
