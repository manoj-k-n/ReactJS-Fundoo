import React, { Component } from 'react'
import Controller from '../Controller/UserContoller';
import { Card, Tooltip, Divider, Popper, Paper, ClickAwayListener, ListItemIcon, ListItemText, Chip, } from '@material-ui/core';
import "./Note.css";
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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Avatar from '@material-ui/core/Avatar';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import DoneIcon from '@material-ui/icons/Done';
import MenuList from '@material-ui/core/MenuList';
import Icon from '../Icon/pin.svg'
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
//   } from '@material-ui/pickers';
//   import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';

export class getNotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            title: this.props.data.title,
            take_a_note: this.props.data.take_a_note,
            id: this.props.data.id,
            archive: this.props.data.archive,
            pin_note: this.props.data.pin_note,
            colour: this.props.data.colour,
            trans: this.props.data.trans,
            CollaboratoreDilogBox: false,
            colorAnchor: null,

            open: false,
            dilogbox: true,
            menu: false,

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

            defaultColour: "#FDFEFE",
            colorOpen: false,
            opencolourBox: false,
            getAllCollaboratore: [],
            Collaboratoretext: '',
            deleteAncore:'',
            addlabelsMenu:'',
            addlabel:false,
           
            reminderMenu:'',
            reminderopen:false,
            ReminderDateAndTime:false,
            ReminderDateanchor:'',
            getallnotes:this.props.getnotes,
            anchoreE1:"",
           


        }

    }
    openDilog = () => {
        this.setState({ open: true })
    }
    changevalue = () => {
        console.log("", this.props.data.id)
    }

    handleClose = () => {

        let notedetails = {
            title: this.state.title,
            take_a_note: this.state.take_a_note

        }
        Controller.udateNote(notedetails, (this.state.id)).then((value) => {
            this.state.getallnotes();
            console.log("hello  ...", value)
        })
        this.setState({ dilogbox: !this.state.dilogbox })
    }
    changeTitle = (event) => {
        this.setState({ title: event.target.value })
    }
    changeTake = (event) => {
        this.setState({ take_a_note: event.target.value })
    }
    // changedilogbox=()=>{
    //     this.setState({})
    // }
    menuOpen = (event) => {
        this.setState({ menu: true ,
        deleteAncore:event.currentTarget
        })
    }
    MenuClose = () => {
        this.setState({ menu: false })
    }
    changeColour = (event) => {
        this.setState({
            colorOpen:true,
           
            colorAnchor: event.currentTarget
        })
    }
    closeColourBox = () => {
        this.setState({
             colorOpen:false, 
        colorAnchor:null })
    }

    closeMenuList = () => {
        this.setState({ menu: false ,deleteAncore:null})
    }

    getnote(){
        return  (this.state.getallnotes);
    }
    changePin = () => {
        this.setState({ pin_note: !this.state.pin_note })
        Controller.changePin(this.state.id).then((value) => {
            
           this.props.getnotes();
            console.log(value)
        })
    }
    changeArchive = () => {
        this.setState({ archive: !this.state.archive })
        Controller.changeArchive(this.state.id).then((value) => {
            this.state.getallnotes();
            console.log(value)
        })
    }

    changeTrans = () => {
        this.setState({ trans: !this.state.trans , menu: false ,deleteAncore:null})
        Controller.changeTrans(this.state.id).then((value) => {
            this.state.getallnotes();
            console.log(value)
        })
    }

    handleCollaboroter = () => {
        this.setState({ CollaboratoreDilogBox: true })
        Controller.getCollaboratore(this.state.id).then((value) => {
            this.state.getallnotes();

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

    addColoboratore = (event) => {
        this.setState({ Collaboratoretext: event.target.value })

    }

    changeNoteColour = (event) => {
        this.setState({ colour: event.target.value })
        console.log(this.state.colour)
        console.log("Invalid..........")
        var edite = {
            colour: this.state.colour,
            title: this.state.title,
            take_a_note: this.state.take_a_note,
            archive: this.state.archive,
            pin_note: this.state.pin_note,
            transh: this.state.trans,
        }

        console.log("colourtype", edite)
        Controller.editeNotes(edite, this.state.id).then((value) => {
            this.state.getallnotes();
            if (value.data.messagecode === 200) {
                console.log(".................")
            }
            else {
                console.log("//////////////")
            }
        })

    }

    addlabelhandler=(event)=>{
        this.setState({addlabel:true,
            anchoreE1:event.currentTarget,
            menu: false }
        )
    }

    closeaddlabel=()=>{
        this.setState({
            anchoreE1:null,
            addlabel:false
        })
    }

    spaceClose=(event)=>{
        if(event.key==='Tab')
        {
            event.preventDefault();
            this.setState({addlabel:false})
        }
    }

    reminderMenuClose=()=>{
        this.setState({reminderopen:false,
            reminderMenu:null
        })
    }
    reminderMenuopen=(event)=>{
      
        this.setState({reminderopen:true,
            reminderMenu:event.currentTarget
        })
    }

    openDateAndtime=(event)=>{
        this.setState({ReminderDateAndTime:true,
        ReminderDateanchor:event.currentTarget,
        reminderopen:false
        })
    }

    // handleCloseDate=()=>{
    //     this.setState({ReminderDateAndTime:false, 
    //     ReminderDateanchor:null})
    // }

    closefist=()=>{
        this.setState({ReminderDateAndTime:false,
            ReminderDateanchor:null})
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

        return !this.state.open ? (
            <div className="getNotesContainer">
                {/* <Dialog open={this.state.open} > */}
                <Card className="main_card12" style={{ background: this.state.colour }} >
                    <div>
                        <div className="fist_row_card">
                            <div className="title_space">
                                <InputBase value={this.state.title} onClick={this.openDilog} />
                            </div>
                            <div className="icon_1st_row">
                                <Tooltip title="Pin">
                                    <IconButton onClick={this.changePin}>
                                    <img src={Icon} alt="website logo" width="18"></img>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="second_row_card ">
                            <InputBase value={this.state.take_a_note} onClick={this.openDilog} />



                        </div>
                        {/* <div className="chip"><Chip
                        open={this.state.ReminderDateAndTime}
                        style={{fontSize:4}}
                        label="later today 20:00"
                        onDelete={this.closefist}
                        /></div> */}




                        <div className="finalrow_card">
                            <div>
                                <Tooltip title="Reminder Me"  onClick={this.reminderMenuopen}>
                                    <IconButton>
                                        <NotificationImportantIcon style={{ fontSize: 15 }} />
                                    </IconButton>
                                </Tooltip>
                                <div>
                                <Menu className="ReminderMenu"
                                anchorEl={this.state.reminderMenu}
                                keepMounted
                                open={this.state.reminderopen}
                                onClose={this.reminderMenuClose}
                                >
                             <div className="reminderfist"> Reminder:</div>
                                 
                        
                               
                                  <ListItem button>
                                  <div className="fistrow">
                                      <div style={{fontSize:12}}>Later today</div>
                                      <div className="time" style={{fontSize:12}}>20:00</div>
                                  </div>
                                  </ListItem>

                                  <ListItem button>
                                  <div className="fistrow">
                                      <div style={{fontSize:12}}>Tommorrow</div>
                                      <div className="time" style={{fontSize:12}}>80:00</div>
                                  </div>
                                  </ListItem>

                                  <ListItem button>
                                  <div className="fistrow">
                                      <div style={{fontSize:12}}>Next Week</div>
                                      <div className="time" style={{fontSize:12}}>Mon, 80:00</div>
                                  </div>
                                  </ListItem>

                                  <ListItem button >
                                  <div className="fistrow" >
                                      <div style={{fontSize:12}}>Work</div>
                                     
                                  </div>
                                 
                                  </ListItem>

                                  <ListItem button onClick={this.openDateAndtime}>
                                      <ListItemIcon>
                                          <AccessTimeIcon style={{fontSize:12}}/>
                                      </ListItemIcon>
                                
                                  <div style={{fontSize:12}}>Select date and time</div>
                                  <Menu open={this.state.ReminderDateAndTime}
                                         anchorEl={this.state.ReminderDateanchor}
                                         onClose={this.handleCloseDate}

                                         keepMounted>
                                            <div className="dateFistRow">
                                                <div ><ArrowBackIcon style={{fontSize:15}}/></div>
                                                <div className="fistrowname">Select date and time</div>
                                            </div>
                                            <Divider/>
                                  </Menu>
                                  </ListItem>

                                 

                                  <ListItem button>
                                      <ListItemIcon>
                                          <LocationOnIcon style={{fontSize:12}}/>
                                      </ListItemIcon>
                                 
                                  <div style={{fontSize:12}}>Select place</div>
                                  </ListItem>
                               
                                 
{/* 
                               </Card> */}


                                </Menu>
                                </div>
                            </div>
                            <div>
                                <Tooltip title="Collaboratore">
                                    <IconButton onClick={this.handleCollaboroter}>
                                        <PersonAddIcon style={{ fontSize: 15 }} />

                                    </IconButton>
                                </Tooltip>
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
                                <Tooltip title="Add image">
                                    <IconButton>
                                        <ImageIcon style={{ fontSize: 15 }} />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip title="Archive">
                                    <IconButton onClick={this.changeArchive}>
                                        <ArchiveTwoToneIcon style={{ fontSize: 15 }} />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip title="More">
                                    <IconButton>
                                        <MoreVertIcon style={{ fontSize: 15 }} onClick={this.menuOpen} />
                                        <div >
                                            <Menu open={this.state.menu} onClose={this.closeMenuList}  anchorEl={this.state.deleteAncore} >
                                                <div >
                                                    <MenuItem onClick={this.changeTrans} style={{fontSize:12}}>Delet note</MenuItem>
                                                    <MenuItem onClick={this.addlabelhandler} style={{fontSize:12}}>Change label</MenuItem>
                                                  
                                                    
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}}>Add drawing</MenuItem>
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}}>Make a copy</MenuItem>
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}}>Show tick boxes</MenuItem>
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}} >Copy to Google Docs</MenuItem>
                                                </div>
                                            </Menu>
                                        </div>
                                        <div>
                                        <Menu 
                                        anchorEl={this.state.anchoreE1}
                                        keepMounted
                                        open={this.state.addlabel}
                                        onClose={this.closeaddlabel}
                                        >
                                       
                                        </Menu>
                                        </div>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </Card>
                {/* </Dialog>         */}
            </div>
        ) : (

                <div className="dilog_card">

                    <Dialog open={this.state.dilogbox} onClose={this.handleClose}>
                        <div  >

                            <Card  style={{ background: this.state.colour }}>
                                <div className="DilogCard">
                                    <div className="dilogBox_fistrow" >
                                        <div className="title_text">
                                            <InputBase value={this.state.title} onChange={this.changeTitle} placeholder="Title" />
                                        </div>
                                        <div className="pinIconDilogBox">
                                            <IconButton onClick={this.changePin}>
                                            <img src={Icon} alt="website logo" width="21"></img>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div>
                                        <InputBase value={this.state.take_a_note} onChange={this.changeTake} placeholder="Title" />
                                    </div>
                                    <div className="chip"><Chip
                        open={true}
                        style={{fontSize:4}}
                        /></div>
                                    <div className="fullRow">
                                        <div>
                                            <div className="dilogBox_third_row">
                                                <div>
                                                    <IconButton >
                                                        <NotificationImportantIcon style={{ fontSize: 18 }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    <IconButton title="Collaboratore" onClick={this.handleCollaboroter}>
                                                        <PersonAddIcon style={{ fontSize: 18 }} />
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
                                        <ColorLensIcon style={{ fontSize: 18 }} onClick={this.changeColour}/>
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
                                                    <IconButton >
                                                        <ImageIcon style={{ fontSize: 18 }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    <IconButton onClick={this.changeArchive}>
                                                        <ArchiveTwoToneIcon style={{ fontSize: 18 }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                <Tooltip title="More">
                                    <IconButton>
                                        <MoreVertIcon style={{ fontSize: 15 }} onClick={this.menuOpen} />
                                        <div >
                                            <Menu open={this.state.menu} onClose={this.closeMenuList}  anchorEl={this.state.deleteAncore} >
                                                <div >
                                                    <MenuItem onClick={this.changeTrans} style={{fontSize:12}}>Delet note</MenuItem>
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}}>Change label</MenuItem>
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}}>Add drawing</MenuItem>
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}}>Make a copy</MenuItem>
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}}>Show tick boxes</MenuItem>
                                                    <MenuItem onClick={this.MenuClose} style={{fontSize:12}} >Copy to Google Docs</MenuItem>
                                                </div>
                                            </Menu>
                                        </div>
                                    </IconButton>
                                </Tooltip>
                                                </div>

                                                <div>
                                                    <IconButton>
                                                        <RotateLeftIcon style={{ fontSize: 18 }} />
                                                    </IconButton>
                                                </div>
                                                <div>
                                                    <IconButton>
                                                        <RotateRightIcon style={{ fontSize: 18 }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="closeIcon1111">

                                            <Button onClick={this.handleClose} >
                                               Close
                                            </Button>

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
