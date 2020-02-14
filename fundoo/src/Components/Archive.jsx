import React, { Component } from 'react'
import { Card } from '@material-ui/core'

export class Archive extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: this.props.data.title,
            take_a_note: this.props.data.take_a_note,
            id:this.props.data.id,
            archive:this.props.data.archive,
            pin_note:this.props.data.pin_note,
            colour:this.props.data.colour,
             trans :this.props.data.trans,
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
           opencolourBox:false,
           dilogBox:false
        }
    }
    
    render() {
        return (
            (
                <div className="getNotesContainer">
                    {/* <Dialog open={this.state.open} > */}
                    <Card className="main_card12"  style={{background:this.state.colour}} >
                        <div>
                            <div className="fist_row_card">
                                <div className="title_space">
                                    <InputBase value={this.state.title}  onClick={this.openDilog} />
                                </div>
                                <div className="icon_1st_row">
                                    <Tooltip title="Pin">
                                    <IconButton onClick={this.changePin}>
                                        <NotificationsNoneTwoToneIcon style={{ fontSize: 15 }} />
                                    </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="second_row_card ">
                                <InputBase value={this.state.take_a_note}  onClick={this.openDilog} />
                            </div>
                            <div className="finalrow_card">
                                <div>
                                    <Tooltip title="Reminder Me">
                                    <IconButton >
                                        <NotificationImportantIcon style={{ fontSize: 15 }} />
                                    </IconButton>
                                    </Tooltip>
                                </div>
                                <div>
                                <Tooltip title="Collaboratore">
                                    <IconButton>
                                        <PersonAddIcon style={{ fontSize: 15 }} />
                                    </IconButton>
                                    </Tooltip>
                                </div>
                                <div>
                                <Tooltip title="Colour Change">
                                    <IconButton>
                                    <ColorLensIcon style={{ fontSize: 15 }} onClick={this.changeColour}/>
                                    <Menu open={this.state.opencolourBox}  onClose={this.closeColourBox} className="ColourBox">
                                        <div className="colour_row1">
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
                                    <IconButton  onClick={this.changeArchive}>
                                        <ArchiveTwoToneIcon style={{ fontSize: 15 }} />
                                    </IconButton>
                                    </Tooltip>
                                </div>
                                <div>
                                    <Tooltip title="More">
                                    <IconButton>
                                    <MoreVertIcon style={{ fontSize: 15 }} onClick={this.menuOpen} />
                                    <div >
                                    <Menu open={this.state.menu} onClose={this.closeMenuList} className="Menu_">
                                        <div className="MenuItem"> 
                                        <MenuItem onClick={this.changeTrans}>Delet note</MenuItem>
                                        <MenuItem onClick={this.MenuClose}>Change label</MenuItem>
                                        <MenuItem onClick={this.MenuClose}>Add drawing</MenuItem>
                                        <MenuItem onClick={this.MenuClose}>Make a copy</MenuItem>
                                        <MenuItem onClick={this.MenuClose}>Show tick boxes</MenuItem>
                                        <MenuItem onClick={this.MenuClose} >Copy to Google Docs</MenuItem>
                                        </div>
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
            )
        )
    }
}

export default Archive
