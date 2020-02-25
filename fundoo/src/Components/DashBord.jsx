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
import Trans from './Trans';


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
            viewList:false  
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
        
        this.getnotes();
        this.getlabels();   
       
    }

  getnotes=()=>{
    Controller.getAllNotes().then((res) => {
           
        this.setState({ notes: res.data.obj })
        console.log("Notes...", this.state.notes)
    })
   
  }

  getlabels=()=>{
    Controller.getAllLabels().then((value)=>{
        console.log("working......")
       console.log("hhhhhhhhhhhhhhh4hhhhh ",value)
        this.setState({labels:value.data.obj})
        console.log("labelsdfdsafdeeeefgdgfdg",this.state.labels)
    })
  }

   


    handleside=()=>{
        this.setState({sideNavstate:!this.state.sideNavstate})
    }

    transopen=()=>{
        this.setState({trans:true,
            // dialogOpen:!this.state.dialogOpen,
             Archive:false,
            // reminder:!this.state.reminder,
            // trans:!this.state.trans,

            createNotesDisplay:false,
            })
    }

    archiveOpen=()=>{
        this.setState({
            
                      Archive:true,
                        // dialogOpen:!this.state.dialogOpen,
           
             reminder:false,
             trans:false,
            createNotesDisplay:false,
                    })
    }

    notesopen=()=>{
        this.setState({
            Archive:false,
            trans:false,
            createNotesDisplay:true,
            reminder:false
        })
    }
    render() 
    
    {
        let createNote  
        if(this.state.createNotesDisplay)
        {
            console.log("commmmmmmmm")
            createNote=<Createnote getnotes={this.getnotes}/>
        } 


        let getNotes = this.state.notes.map(item => {
            
            
              if((this.state.createNotesDisplay && !item.archive && !item.trash&& !item.pin_Note))
              {
                  console.log("pin value", item.pin_Note)
                  console.log("archive value", item.archive)
                  console.log("trans value", item.trash)
                console.log("notes display ",item)
                return (
                    <GetNotes getnotes={this.getnotes} data={item} handleDialog={this.handleDialog} />
                    )
              }
          
            }) 
        
        
          let getPinNotes=this.state.notes.map((pin)=>{
              if(pin.pin_Note &&this.state.createNotesDisplay)
              {
                console.log("pin......////")
               return(<GetNotes getnotes={this.getnotes} data={pin} handleDialog={this.handleDialog}/>)
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
            if(this.state.Archive && items.archive&& !items.pin_Note && !items.trash)
        {
            console.log("archive......////")
           return <GetNotes getnotes={this.getnotes} data={items} handleDialog={this.handleDialog} />
        }

        })
     
        let trans=this.state.notes.map((item)=>{
            if(item.trash&&this.state.trans &&!item.archive && !item.pin_Note)
            {
                console.log("hello......////")
               return <Trans getnotes={this.getnotes} data={item} handleDialog={this.handleDialog} />
            }
        })

        // let displaylabel=this.state.labels.map((value)=>{
        //     return <SideNav labelsdetails={value} />
        // })
      let pinned
      if(this.state.createNotesDisplay)
      {
        pinned='PINNED'
      }

      let others
      if(this.state.createNotesDisplay)
      {
        others="OTHERS"
      }
      
        return (
            <div>
                {appNav}
               
              {/* {displaylabel} */}
              <div className="sidenavmargin">
              <SideNav labels={this.state.labels} open={this.state.sideNavstate}
                        trnasopen={this.transopen}
                        archive={this.archiveOpen}
                        notesopen={this.notesopen}
                        getlabels={this.getlabels}
              />
             </div>
                <div className={this.state.sideNavstate ? ("moving"):("movingcancle")}
                >
                   
                {createNote}
                {trans}
                
                <div className="archivemargin">{Archive}</div>
                
            
        
                <div className="noteSize">
                   
                    <div className="pinname">{pinned}</div>
              
                   
                    
                <div className="getNotesContainer">
                    {getPinNotes}
                </div>
                </div>
             
                <div className="noteSize">
        <div className="pinname">{others}</div>
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
