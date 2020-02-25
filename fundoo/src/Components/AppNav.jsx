import React, { Component } from 'react'
import { Card, InputBase, Tooltip, IconButton, Menu, Divider, ListItem, ListItemText } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import "./App&SideNav.css";
import icon from '../../src/Icon/download.svg'
import SettingsIcon from '@material-ui/icons/Settings';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';

export class AppBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            profileanchoreEl:'',
            profile:false,
            name:"Manoj Manoj",
            email:"manojpraju08@gmail.com"
        }
    }

    openprofile=(event)=>{
     this.setState({profile:true,
        profileanchoreEl:event.currentTarget})
    }
    closeProfile=()=>{
        this.setState({profile:false,
            profileanchoreEl:null
        })
    }
    

    render(props) {
        return (
            <div className='App_Nav'>
                <Card className="App_Card">
              
                <div className="InputeBase">       
                <div className="menuIcon">
                    <Tooltip title="Main Menu">
                        <IconButton onClick={this.props.sideopen}>
                        <MenuIcon/>
                        </IconButton>
                        </Tooltip>
                    </div>
                    <div className="images">    
                        <img id="brand-image" alt="Website-logo" style={{ fontSize: 1 }}
                         src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"/>
                              
                    </div>
                    <div className="name">
                        <h4>Keep</h4>
                    </div>

                    <image src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="search"/>
                    <Card className="Serach_Card">
                        <div className="InsideCard">
                    <icon/>
                    <Tooltip title="Search">
                        <IconButton>
                    <SearchIcon className className="Serach_Icon"/>
                    </IconButton>
                    </Tooltip>
                    
                 <InputBase placeholder="Search" className="InputeBase2">
                
                 </InputBase>
                 </div>
                 </Card>


                 <div className="sideIcons">
                 <div className="RefreshIcon">
                     <Tooltip title="refresh">
                         <IconButton>
                     <RefreshIcon style={{ fontSize: 20 }}/>
                     </IconButton>
                     </Tooltip>
                 </div>
                 <div className="RefreshIcon">
                 <Tooltip title="List view">
                         <IconButton>
                   <ViewStreamIcon style={{ fontSize: 20 }}/>
                   </IconButton>
                     </Tooltip>
                 </div>
                 <div className="RefreshIcon">
                 <Tooltip title="setting">
                         <IconButton>
                    <SettingsIcon style={{ fontSize: 20 }}/> 
                    </IconButton>
                     </Tooltip>
                 </div>
                 </div>
                 <div className="lastIcon">
                 <div className="RefreshIcon">
                 <Tooltip title="profile">
                         <IconButton onClick={this.openprofile}>
              
                 <FaceIcon />
                 </IconButton>
                     </Tooltip>
                     <Menu
                     anchorEl={this.state.profileanchoreEl}
                     open={this.state.profile}
                     onClose={this.closeProfile}
                     keepMounted
                     className="profile"
                     >
                         <div className="profilename">
                       <Avatar alt="Remy Sharp" src="" />
                       </div>
                       <h2 style={{fontSize:20 }} className="Pname">{this.state.name}</h2>
                           <h3 style={{fontSize:13 }} className="Pemail">{this.state.email}</h3>
                           <Divider/>
                           {/* <div className="profilepersonadd">
                               <div><PersonAddOutlinedIcon style={{fontSize:20}}/></div>
                               <div className="add">Add another account</div>
                           </div> */}
                           <ListItem button>
                               <ListItemIcon><PersonAddOutlinedIcon style={{fontSize:20}}/></ListItemIcon>
                               <ListItemText primary="Add another account"/>
                           </ListItem>
                           <Divider/>
                           <div className="signout">
                           <Button>Sign out</Button>
                           </div>
                     </Menu>
                       
                 </div>
                
                             
                 </div>
                 </div>
                </Card>
            </div>
        )
    }
}

export default AppBar

