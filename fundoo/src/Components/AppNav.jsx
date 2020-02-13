import React, { Component } from 'react'
import { Card, InputBase, Tooltip, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import "./App&SideNav.css";
import icon from '../../src/Icon/download.svg'
import SettingsIcon from '@material-ui/icons/Settings';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';

export class AppBar extends Component {

    render() {
        return (
            <div className='App_Nav'>
                <Card className="App_Card">
              
                <div className="InputeBase">       
                <div className="menuIcon">
                    <Tooltip title="Main Menu">
                        <IconButton>
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
                         <IconButton>
                 <AppsIcon style={{ fontSize: 20 }}/>
                 </IconButton>
                     </Tooltip>
                 </div>
                 <div>
                     <Tooltip title="profile">
                     <IconButton>
                        {/* <AppsIcon style={{ fontSize: 20 }}/> */}
                     </IconButton>
                     </Tooltip>
                 </div>
                             
                 </div>


                 </div>
                </Card>
            </div>
        )
    }
}

export default AppBar

