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



export class getNotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            title: '',
            take_a_note: '',
            archive: false,
            deletId: '',
            id: '',
            reminder: '',
            label: []
        }

    }
    componentDidMount() {

        Controller.getAllNotes().then((res) => {
            console.log("res in getnotes", res.data.obj)
            this.setState({ notes: res.data.obj })
            console.log(this.state.notes)
        })
    }
    render() {
      let card=  this.state.notes.map(item => {
            console.log("item", item)
            return (
                <Card className="main_card12" onClick={this.props.handleDialog}> 
                <div>
                    <div className="fist_row_card">
                    <div className="title_space">
                        <InputBase value={item.title}/>
                    </div>
                    <div className="icon_1st_row">
                    <IconButton onClick={this.changePin}>
                  <NotificationsNoneTwoToneIcon style={{ fontSize:18 }}/>
                 </IconButton>   
                    </div>
                    </div>
                    <div className="second_row_card ">
                    <InputBase value={item.take_a_note}/>
                    </div>
                    <div className="finalrow_card">
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
                    </div>
                </div>
                </Card>
            )
        })
        return (
            <div  className="getNotesContainer">
              {card}          
            </div>
        )
    }
}

export default getNotes
