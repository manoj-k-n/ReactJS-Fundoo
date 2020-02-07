import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import InputBase from "@material-ui/core/InputBase";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import "./note.css";
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
      colour:''
 
      
       
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

  // changePin=()=>{
  //  this.setState({pin:true})
  // }
  //  changeArchive=()=>{
  //    this.setState({archive:true})
  //  }


  // details passing

  settheelements=()=>
  {
    if(this.state.title===''||this.state.take_a_note==='')
    {
      this.setState({noteopen:false})
    }
    else{
      var notedetails={
        title:this.state.title,
        take_a_note:this.state.take_a_note
      }
      Controller.createNotes(notedetails).then((res)=>
      {
       if(res.data.messagecode===200)
       {
         this.setState({noteopen:false})
       }
      })
    }
  }
  setArchive=()=>
  {
    var archive={

    }
  }


  
  render() {
    return ! this.state.noteopen ? (
     
      <div className="main_div">
        <Card className="main_card" style={{ bootshadow: "5px 5px 5px 1px" }}>
          <div className="Card">
            <div className="Inpute">
              <InputBase placeholder="Title" onClick={this.openNote} />
            </div>
            <div className="icons">
              <div className="iconChanges">
                <IconButton>
                <AssignmentTurnedInOutlinedIcon style={{ fontSize:20 }} />
                </IconButton>
              </div>
             
              <div className="iconChanges">
              <IconButton>
                <BrushOutlinedIcon style={{ fontSize:20 }} />
                </IconButton>
              </div>
              
              <div className="iconChanges"> 
              <IconButton>
                <AddPhotoAlternateOutlinedIcon style={{ fontSize:20 }} />
                </IconButton>
              </div>
            </div>
          </div>
        </Card>
        </div>):
        (
         
          <div className="main_div">
            
        <Card  className="main_card1" style={{ bootshadow: "5px 5px 5px 5px" }}>
          <div>
            <div>

           
            <div className="title-1">
                <div  >
                <InputBase placeholder="Title.." value={this.state.title} onChange={this.titlestore} />
                </div>
                <div className="pinicon" >
                <IconButton onClick={this.changePin}>
                  <NotificationsNoneTwoToneIcon/>
                 </IconButton>
                </div>
                </div>
                <div>
                <InputBase placeholder="Take a note.."  onChange={this.notestore} value={this.state.take_a_note}   />
                </div>
                <div className="notificationrow">
                  <div>
                  <IconButton onClick={this.changeReminder}>
                    <NotificationImportantIcon   style={{ fontSize:15 }}/>
                    </IconButton>
                  </div>
                  <div>
                  <IconButton>
                     <PersonAddIcon style={{ fontSize:15 }}/>
                    </IconButton>
                  </div>
                  <div>
                  <IconButton>
                     <ColorLensIcon style={{ fontSize:15 }}/>
                     </IconButton>
                  </div>
                  <div>
                  <IconButton>
                     <ImageIcon style={{ fontSize:15 }}/>
                     </IconButton>
                  </div>
                  <div>
                  <IconButton onClick={this.changeArchive} onClick={this.setArchive}>
                     <ArchiveTwoToneIcon style={{ fontSize:15 }}/>
                    </IconButton>
                  </div>
                  <div>
                  <IconButton>
                     <MoreVertIcon style={{ fontSize:15 }}/>
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
                  <IconButton  style={{ fontSize:18}}>
                 <p> Close </p>  
                 </IconButton>
                </div>
                </div>
               
          </div>
        </Card>
        
      </div>
    );
  }
}

export default createNote;