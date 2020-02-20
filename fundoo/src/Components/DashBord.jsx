import React, { Component } from 'react'

import Createnote from './Createnote'
import GetNotes from './GetNotes';

import Controller from '../../src/Controller/UserContoller'
import "./Note.css";
import AppNav from './AppNav'
import { ListItemSecondaryAction } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';


import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import DemoColour from './DemoColour';
import SideNav from './SideNav';



    


 class DashBord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            notes: [],
             sideNavstate:true,
            Archive:false,
            trans:false,
            reminder:false,
            createNotesDisplay:true,
            collaboratore:[],
            labels:[],
            
            
        }
    }

   
 
    handleDrawerOpen = () => {
   this.setState({setOpen:true})
  };

   handleDrawerClose = () => {
    this.setState({setOpen:false})
  };

    handleDialog = () => {
        this.setState({ dialogOpen: !this.state.dialogOpen })
    }

    componentDidMount() {

        Controller.getAllNotes().then((res) => {
           
            this.setState({ notes: res.data.obj })
            console.log("Notes...", this.state.notes)
        })
       
        Controller.getAllLabels().then((value)=>{
            console.log("working......")
           console.log("hhhhhhhhhhhhhhhhhhhhh ",value)
            this.setState({labels:value.data.obj})
            console.log("labelsdfdsafdfgdgfdg",this.state.labels)
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
                console.log(item.pin_note)
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
            // sideNav =<SideNav/>
        }

       
        let Archive=this.state.notes.map((items)=>{
            if(this.state.Archive && items.archive)
        {
           return <GetNotes data={items} handleDialog={this.handleDialog} />
        }

        })
     
        let trans=this.state.notes.map((item)=>{
            if(item.trash&&this.state.trans )
            {
               return <GetNotes data={item} handleDialog={this.handleDialog} />
            }
        })

        // let displaylabel=this.state.labels.map((value)=>{
        //     return <SideNav labelsdetails={value} />
        // })

        
      
        return (
            <div>
                {appNav}
               
              {/* {displaylabel} */}
              <SideNav labels={this.state.labels} open={this.state.sideNavstate}/>
             
                <div className={this.state.sideNavstate ? ("moving"):("movingcancle")}>
                   
                {createNote}
                {trans}
                {Archive}
        
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
            </div>
            
        )
    }
}

export default DashBord
