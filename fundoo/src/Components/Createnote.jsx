import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import InputBase from "@material-ui/core/InputBase";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import "./Note.css";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import AddAlertTwoToneIcon from '@material-ui/icons/AddAlertTwoTone';
import ArchiveTwoToneIcon from '@material-ui/icons/ArchiveTwoTone';
import ImageIcon from '@material-ui/icons/Image';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import IconButton from '@material-ui/core/IconButton';
import Controller from '../Controller/UserContoller';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Menu from '@material-ui/core/Menu';
import { Paper, ClickAwayListener, MenuList,MenuItem,Popper,Grow, Button } from "@material-ui/core";
import Icon from '../Icon/pin.svg'
import Reminder from '../Icon/Reminder.svg'
import {TextField} from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DoneIcon from '@material-ui/icons/Done';
import Divider from '@material-ui/core/Divider';
import HowToRegIcon from '@material-ui/icons/HowToReg';


class createNote extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title:'',
      take_a_note:'',
      noteopen:false,
      pin:false,
      reminder:false,
      archive:false,
      colour:'',
      propper:false,
      menu:false,
      manycolour:
      [{ name: "default", colorCode: "#FDFEFE" },
       { name: "Red", colorCode: "#ef9a9a" },
       { name: "Cyan", colorCode: "#80deea" },
       { name: "Blue", colorCode: "#2196f3" },
       { name: "Indigo", colorCode: "#9fa8da" },
       { name: "LightBlue", colorCode: "#90caf9" },
       { name: "Purple", colorCode: "#b39ddb" },
       { name: "Yellow", colorCode: "#c5e1a5" },
       { name: "Lime", colorCode: "#e6ee9c" },
       { name: "Pink", colorCode: "#f48fb1" },
       { name: "gray", colorCode: "#eeeeee" },
       { name: "Brown", colorCode: "#bcaaa4" },
       ],   
       colorAnchor: null,
       colorOpen: false,
       colour:"#FDFEFE",
       CollaboratoreDilogBox:false,
       getAllCollaboratore:[],
       email:'',
       getallnotes:this.props.getnotes
      

    }
    console.log(this.state.title)
  }
  openNote=()=>
  {
    this.setState({
      noteopen:true
    })
  }
  // changeReminder=()=>
  // {
  //   this.setState({
  //     reminder:true
  //   })
  // }
  titlestore=(event)=>
  {
    this.setState({title:event.target.value})
    console.log(this.state.title)
  }
  notestore=(event)=>
  {
     this.setState({take_a_note:event.target.value})
  }
  handleToggle=()=>{
    this.setState({menu:true})
  }

  openMenu=()=>{
    this.setState({menu:true})
  }
  closeColourBox = () => {
    this.setState({
         colorOpen:false, 
    colorAnchor:null })
}
addColoboratore=(event)=>{
  this.setState({
    email:event.target.value
  })
}


  settheelements=()=>
  {
    if(this.state.title===''||this.state.take_a_note==='')
    {
      this.setState({noteopen:false})
    }
    else{
      var notedetails={
        title:this.state.title,
        take_a_note:this.state.take_a_note,
        archive:this.state.archive,
       pin_note:this.state.pin,
      colour:this.state.colour,
       transh:this.state.transh,
       
      }
      
      Controller.createNotes(notedetails).then((res)=>
      {
        this.state.getallnotes();
        console.log(res,"hello")
       if(res.data.messagecode===200)
       {
         this.setState({noteopen:false})
       }
      })
    }
  }
  setArchive=()=>
  {
    this.setState({archive:true})
  }

  changeColour = (event) => {
    this.setState({
        colorOpen:true,
       
        colorAnchor: event.currentTarget
    })
}
  handleToggle=()=>{
this.setState({propper:!this.state.propper})
  }

  MenuClose=()=>{
    this.setState({menu:false})
  }
   changeNoteColour=(event)=>{
    
    this.setState({colour:event.target.value})
   }


   openColabMenu=()=>{
    this.setState({CollaboratoreDilogBox:true})
   }

  //  clsoetheColab=()=>{
  //    this.setState({CollaboratoreDilogBox:false})
  //  }

   handleCollaboroter = () => {
    this.setState({ CollaboratoreDilogBox: true })
    Controller.getCollaboratore(this.state.id).then((value) => {
    
     

        this.setState({ getAllCollaboratore: value.data.obj })
        console.log("wkkkkkkkk kkkkk kkkk", this.state.getAllCollaboratore)
        console.log("welocme collaboratore ", value.data.obj)
    })
}


   clsoetheColab = () => {
    let collaboratore = {
        email: this.state.Collaboratoretext
    }
    if (this.state.Collaboratoretext != '' && /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Collaboratoretext)) {
        Controller.addCollaboratore((this.state.id), collaboratore).then((value) => {
            console.log(value)
            this.state.getallnotes();
            if (value.data.messagecode === 200) {
                this.setState({ CollaboratoreDilogBox: false })
                console.log("okokokokok")
            }
            else {
                console.log("not working..,,,,,")
            }
        })
    }
    else {
        this.setState({ CollaboratoreDilogBox: false })
    }

}

  
  render() {
    const colour1 = this.state.manycolour.map((colour) => {
      return (
          <div>
              <Tooltip title={colour.name}>
                  <IconButton style={{ background: colour.colorCode }} value={colour.colorCode} onClick={this.changeNoteColour} />
              </Tooltip>
          </div>
      )

  })
  const collaboratore = this.state.getAllCollaboratore.map((all) => {
    return (
        <div className="collab">
            <div className="getallcolab">
                {/* <Avatar alt="Remy Sharp" style={{fontSize:1}}/> */}
                <HowToRegIcon />
            </div>
            <div className="name">
                <h4 style={{ fontSize: 15 }}>{all.email}</h4>
            </div>
        </div>
    )
})

  
    return ! this.state.noteopen ? (
     
      <div className="main_div">
        <Card >
         <div className="samerow">
            <div className="fistrowCrad">
              <InputBase placeholder="Title" onClick={this.openNote} />
            </div>
            <div className="iconrows" >
              <div>
                <IconButton>
                <AssignmentTurnedInOutlinedIcon style={{ fontSize:17 }} />
                </IconButton>
              </div>
             
              <div >
              <IconButton>
                <BrushOutlinedIcon style={{ fontSize:17 }} />
                </IconButton>
              </div>
              
              <div > 
              <IconButton>
                <AddPhotoAlternateOutlinedIcon style={{ fontSize:17 }} />
                </IconButton>
              </div>
            </div>
            </div>
        </Card>
        </div>):
        (
         
          <div className="main_div">
            
        <Card  className="main_card1" style={{ bootshadow: "10px 10px 10px 10px" }} style={{backgroundColor:this.state.colour}}>
         
            <div>

           
            <div className="title-1">
                <div  >
        
                <InputBase placeholder="Title.."   
                //  helperText="Full width!"
                 value={this.state.title}
                 onChange={this.titlestore}
                className="textfiled22"
                 fullWidth="true"
                 multiline="true"/>
                </div>
                <div className="pinicon" >
                <IconButton onClick={this.changePin}>
                 <img src={Icon} alt="website logo" width="18"></img>
                 </IconButton>
                </div>
                </div>
                <div>
                <InputBase placeholder="Take a note.."  onChange={this.notestore} value={this.state.take_a_note} multiline="true" 
                fullWidth="true" />
                </div>
                <div className="lastRow">
                <div className="notificationrow">
                  <div>
                  <Tooltip title="Reminder Me">
                  <IconButton onClick={this.changeReminder}>
                  <NotificationImportantIcon style={{ fontSize:15 }}/>
                    </IconButton>
                    </Tooltip>
                  </div>
                  <div>
                  <IconButton>
                     <PersonAddIcon style={{ fontSize:15 }} onClick={this.openColabMenu}/>
                    </IconButton>
                    <Dialog open={this.state.CollaboratoreDilogBox}
                                    onClose={this.clsoetheColab} >
                                    <div>

                                        <Card className="Collaboratore">
                                            <div className="pading">
                                                <div className="fistrow">
                                                    <h4>Collaborators</h4>
                                                </div>
                                                <Divider />

                                                <div className="secondRow">
                                                    <div className="secondrowIcon">
                                                        <IconButton style={{ background: "blue", fontSize: 9 }}><h>M</h></IconButton>
                                                    </div>
                                                    <div className="user">
                                                        <h4>manojpraju08@gmail.com</h4>


                                                    </div>
                                                </div>
                                                <div className="get">
                                                    {collaboratore}
                                                </div>
                                                <div className="tirdrow">
                                                    <div className="id">
                                                        <PermIdentityIcon />
                                                    </div>
                                                    <div className="name5">
                                                        <InputBase value={this.state.Collaboratoretext} onChange={this.addColoboratore}
                                                            placeholder="Person or email to share with         " style={{ width: "100%" }}
                                                        ></InputBase>
                                                        {console.log(this.state.Collaboratoretext)}
                                                    </div>
                                                    <div className="donebutton">

                                                        <IconButton onClick={this.clsoetheColab}>
                                                            <DoneIcon style={{ fontSize: 10 }} />
                                                        </IconButton>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="finalRow">
                                                <div>

                                                    <Button onClick={this.clsoetheColab}> close</Button>

                                                </div>
                                                <div>

                                                    <Button onClick={this.clsoetheColab}>Save</Button>

                                                </div>

                                            </div>
                                        </Card>
                                    </div>

                                </Dialog>
                  </div>
                  <div>
                  <Tooltip title="Colour Change">
                                    <IconButton>
                                        <ColorLensIcon style={{ fontSize: 15 }} onClick={this.changeColour}/>
                                        <Menu id="simple-menu"
                                        open={this.state.colorOpen}
                                            anchorEl={this.state.colorAnchor}
                                            onClose={this.closeColourBox}
                                           >
                                            <div className="colourflex">
                                                {colour1}
                                            </div>
                                        </Menu>
                                    </IconButton>
                                </Tooltip>
                  </div>
                  <div>
                  <IconButton>
                     <ImageIcon style={{ fontSize:15 }}/>
                     </IconButton>
                  </div>
                  <div>
                  <IconButton  onClick={this.setArchive}>
                     <ArchiveTwoToneIcon style={{ fontSize:15 }}/>
                    </IconButton>
                  </div>
                  <div>
                  <IconButton>
                     <MoreVertIcon style={{ fontSize:15 }} onClick={this.openMenu}/>
                     <div >
                                <Menu open={this.state.menu} className="Menu">
                                    
                                    <MenuItem onClick={this.MenuClose}>Add label</MenuItem>
                                    <MenuItem onClick={this.MenuClose}>Add drawing</MenuItem>
                                    
                                    <MenuItem onClick={this.MenuClose}>Show tick boxes</MenuItem>
                                </Menu>
                                </div>
                    </IconButton>
                  </div>
                  <div>
                  <IconButton>
                     <RotateLeftIcon style={{ fontSize:15 }}/>
                     </IconButton>
                  </div>
                  <div>
                  <IconButton>
                     <RotateRightIcon style={{ fontSize:15 }}/>
                     </IconButton>
                  </div>
                  <div>
                     
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div className="close" onClick={this.settheelements}>
                <Button>
                  Close 
                 </Button>
                </div>
                </div>
              
               
          </div>
        </Card>
        
      </div>
    );
  }
}

export default createNote;