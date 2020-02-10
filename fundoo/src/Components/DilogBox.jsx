import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import TextFiled from '@material-ui/core/TextField'
import { Card } from 'react-bootstrap';
import InputBase from "@material-ui/core/InputBase";
import IconButton from '@material-ui/core/IconButton';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ArchiveTwoToneIcon from '@material-ui/icons/ArchiveTwoTone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import Button from '@material-ui/core/Button';



export class DilogBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //  open:false,
            //  title:this.props.details.title,
            //  take_a_note:this.props.details.take_a_note,
            //  id:this.props.details.id,
            //  archive:this.props.details.archive,
            //  pin_note:this.props.details.pin_note,
            //  colour:this.props.details.colour,
            //  trans :this.props.details.trans,
            //  note:[]
            //  take_a_note:this.props.take_a_note,
            //  archive:this.props.archive,
            //  pin_note:this.props.pin_note,
            //  colour:this.props.colour,
            //  transh:this.props.transh
               
        }
    }
    change=()=>{
        this.setState({
            open:false
        })
        console.log("hiii",this.state.title,this.props.title)
    }
    close=()=>{
        this.setState({
            open:false
        })
    }
    componentDidMount(){
        console.log(this.props.details.title,"sadsfsdfg")
    }
    changetitle=(event)=>
    {
          this.setState({title:event.target.value})
    }

    changetake_a_note=(event)=>
    {
        this.setState({take_a_note:event.target.value})
    }

   

    render() {
         console.log("gffgfg",this.props.details)
        return (
            <div className="dilog_card">
                
                <Dialog open={this.props.handleDialog} >
               <div >
            
                    <Card className="dilogBox_card">
                        <div>
                           <div className="dilogBox_fistrow" >
                           <div>
                           <InputBase value={this.props.details.title} onChange={this.changetitle}/>
                           </div>
                           <div>
                           <IconButton >
                                    <NotificationsNoneTwoToneIcon style={{ fontSize: 18 }} />
                                </IconButton>
                           </div>
                           </div>
                           <div>
                           <InputBase value={this.props.details.take_a_note} onChange={this.changetake_a_note}/>
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
                  <Button onClick={this.props.handleDialog} color="primary">
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

export default DilogBox
