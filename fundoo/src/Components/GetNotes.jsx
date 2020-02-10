import React, { Component } from 'react'
import Controller from '../Controller/UserContoller';
import { Card, } from '@material-ui/core';
import "./note.css";
import InputBase from "@material-ui/core/InputBase";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import IconButton from '@material-ui/core/IconButton';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveTwoToneIcon from '@material-ui/icons/ArchiveTwoTone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import Button from '@material-ui/core/Button';



export class getNotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            title: this.props.data.title,
            take_a_note: this.props.data.take_a_note,
            open:false,
            dilogbox:true,
             //  open:false,
            // title:this.props.details.title,
            //  take_a_note:this.props.details.take_a_note,
            //  id:this.props.details.id,
              archive:false,
             pin_note:false,
             colour:"",
              trans :false,
          
        }

    }
    openDilog=()=>{
        this.setState({open:true})
    }
    changevalue=()=>{
       console.log("",this.props.data.id)
    }

    handleClose=()=>{
        this.setState({dilogbox:!this.state.dilogbox})
    }
    changeTitle=(event)=>{
        this.setState({title:event.target.value})
    }
    changeTake=(event)=>{
        this.setState({take_a_note:event.target.value})
    }
    // changedilogbox=()=>{
    //     this.setState({})
    // }
   
    render() {
        return ! this.state.open ? (
            <div className="getNotesContainer">
                {/* <Dialog open={this.state.open} > */}
                <Card className="main_card12" onClick={this.openDilog} >
                    <div>
                        <div className="fist_row_card">
                            <div className="title_space">
                                <InputBase value={this.state.title} />
                            </div>
                            <div className="icon_1st_row">
                                <IconButton >
                                    <NotificationsNoneTwoToneIcon style={{ fontSize: 18 }} />
                                </IconButton>
                            </div>
                        </div>
                        <div className="second_row_card ">
                            <InputBase value={this.state.take_a_note}  />
                        </div>
                        <div className="finalrow_card">
                            <div>
                                <IconButton >
                                    <NotificationImportantIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <PersonAddIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <ColorLensIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <ImageIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton >
                                    <ArchiveTwoToneIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <MoreVertIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Card>   
                {/* </Dialog>         */}
                 </div>
        ):(
            <div className="dilog_card">
                
                <Dialog open={this.state.dilogbox}  onClose={this.handleClose}>
               <div >
            
                    <Card className="dilogBox_card">
                        <div>
                           <div className="dilogBox_fistrow" >
                           <div>
                           <InputBase value={this.state.title}  onChange={this.changeTitle}/>
                           </div>
                           <div>
                           <IconButton >
                                    <NotificationsNoneTwoToneIcon style={{ fontSize: 18 }} />
                                </IconButton>
                           </div>
                           </div>
                           <div>
                           <InputBase value={this.state.take_a_note} onChange={this.changeTake} />
                           </div>
                           <div>
                              <div className="dilogBox_third_row">
                              <div>
                                <IconButton >
                                    <NotificationImportantIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton >
                                <PersonAddIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton >
                                <ColorLensIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton >
                                <ImageIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton >
                                <ArchiveTwoToneIcon style={{ fontSize: 15 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton >
                                <MoreVertIcon style={{ fontSize: 15 }} />
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
                  <Button onClick={this.handleClose} color="primary">
                             Close
                   </Button>
                  </div>
                              </div>
                           </div>
                        </div>
              </Card>
                     
              </div>
                </Dialog>
            </div>
        )
    }
}

export default getNotes
