import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import "./Note.css";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Divider, List, Dialog, CardContent, TextField } from '@material-ui/core';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// import { Button } from 'react-bootstrap';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { makeStyles } from '@material-ui/core/styles';
import { MDBFormInline } from 'mdbreact';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import Contoller from '../Controller/UserContoller';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button'

// import Controller from '.'
const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                top: "82px",
                width: "240px"

            }
        }
    }
})

const useStyle = makeStyles({
    root: {
        mindWidth: 275
    },
    title: {
        fontSize: 14
    },
    pos: {
        fontSize: 6
    }
})


export class SideNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: true,
            editeLabel: false,
            createlabel: '',
            // labelId: 0,
          labeledite:'',

          getlabels:this.props.getlabels



        }
    }

    editlabelclose = () => {
        this.setState({ editeLabel: !this.state.editeLabel })
    }

    openeditelabelDilog = () => {
        this.setState({ editeLabel: !this.state.editeLabel })
    }

    setlabeldetails = (event) => {
        this.setState({ createlabel: event.target.value })
    }

    deleteLabel = () => {

        Contoller.deleteLabel()
    }

    sublabel = () => {
        let labeldetails = {
            name: this.state.createlabel
        }
        if (this.state.createlabel != '') {
            Contoller.createLabel(labeldetails).then((value) => {
                this.state.getlabels(); 
                console.log("labelcreate ", value)
            })
        }

    }
    handleDelete(id){
        console.log("idgg",id)
      Contoller.editeLabel(id).then((value)=>{
          console.log("hello labels" ,value)
          this.state.getlabels(); 
          if(value.data.messageCode===200)
          {
           
              console.log("succcess")
          }
      })
    }

    // updatelabel=(event)=>{
    //     console.log("helloo",event)
    //     this.setState({labeledite:event.target.value})
    // }

    onchangeLabels=(eventtitle)=>{
        console.log(eventtitle)
    }

    clearthelabel = () => {
        this.setState({ createlabel: '' })
    }
    render() {





        let labelsInDrawer = this.props.labels.map(labels => {

            return (

                <ListItem button >
                    <ListItemIcon>
                        <LabelOutlinedIcon style={{ fontSize: 25 }} />
                    </ListItemIcon>
                    <ListItemText primary={labels.labelTitle} />

                </ListItem>

            )
        })

        let labelsInDilog = this.props.labels.map(labels => {
            console.log("hrlloooonni ",labels)
           
            return (
                <div className="editelabelsdisplay">
                    <IconButton title="delete"  onClick={() => {this.handleDelete(labels.labelid)
                    }}>
                        <DeleteIcon style={{ fontSize: 17 }} />
                    </IconButton>
                   <InputBase
                   value={labels.labelTitle}
                    onSubmit={()=>{this.onchangeLabels(labels.labelTitle)}}/>
                    <IconButton title="edite">
                  <EditIcon style={{ fontSize: 17 }}  />
                  </IconButton>
                    
                </div>
            )
        })
        return (
            <div >
                <MuiThemeProvider theme={theme}>
                    <Drawer
                        variant="persistent"
                        anchor="left"
                        open={this.props.open}
                        className="Sidemargine">
                        <List>
                            <ListItem button onClick={this.props.notesopen}>
                                <ListItemIcon>
                                    <EmojiObjectsOutlinedIcon style={{ fontSize: 23 }} />
                                </ListItemIcon>
                                <ListItemText primary="Notes" />

                            </ListItem>


                            <ListItem button>
                                <ListItemIcon>
                                    <AddAlertOutlinedIcon style={{ fontSize: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary="Reminder" />

                            </ListItem>
                            <Divider />
                            <p style={{ fontSize: 15 }} className="sideLabel">Labels</p>

                            {labelsInDrawer}


                            <ListItem button onClick={this.openeditelabelDilog}>
                                <ListItemIcon >
                                    <EditOutlinedIcon style={{ fontSize: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary="Edite label" />

                            </ListItem>
                            <div>
                                <Dialog open={this.state.editeLabel} onClose={this.editlabelclose}  >

                                    <Card className={useStyle.root}>
                                        <CardContent>
                                            <Typography className={useStyle.pos} variant="h5" component="h2">
                                                <p style={{ fontSize: 17 }}>Edite labels</p>
                                            </Typography>


                                            <div className="createlabels">
                                                <IconButton title="Cancle">
                                                    <ClearRoundedIcon style={{ fontSize: 19 }} className="write" onClick={this.clearthelabel} />
                                                </IconButton>
                                                <InputBase
                                                    className="Inpute"
                                                    placeholder="Create new labels"
                                                    fontSize="1"
                                                    value={this.state.createlabel}
                                                    onChange={this.setlabeldetails}
                                                />
                                                <IconButton title="Create Label" onClick={this.sublabel}>
                                                    <CheckRoundedIcon className="wrong" style={{ fontSize: 19 }} />
                                                </IconButton>
                                            </div>
                                            {labelsInDilog}
                                           <Divider/>
                                           {/* <p style={{ fontSize: 17 }}>Done</p> */}
                                           <div className="done">
                                           <Button onClick={this.editlabelclose}>Done</Button>
                                           </div>
                                        </CardContent>

                                    </Card>

                                </Dialog>
                            </div>


                            <Divider />


                            <ListItem button onClick={this.props.archive}>
                                <ListItemIcon>
                                    <ArchiveOutlinedIcon style={{ fontSize: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary="Archive" />

                            </ListItem>



                            <ListItem button onClick={this.props.trnasopen}>
                                <ListItemIcon >
                                    <DeleteOutlinedIcon style={{ fontSize: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary="Bin" />
                           
                                {this.props.trnasopen}

                            </ListItem>
                            {/* <div className="Sidefistrow">
          <div className="sideicon"><ArchiveOutlinedIcon style={{fontSize:18}}/></div>
          <div style={{fontSize:18}}>Archive</div>
      </div>
      <div className="Sidefistrow">
          <div className="sideicon"><DeleteOutlinedIcon style={{fontSize:18}}/></div>
          <div style={{fontSize:18}}>Bin</div>
      </div> */}
                        </List>
                    </Drawer>





                </MuiThemeProvider>
            </div>
        )
    }
}

export default SideNav
