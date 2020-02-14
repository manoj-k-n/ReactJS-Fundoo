import React, { Component } from 'react'
import { Card, Menu, IconButton } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
export class sideNav extends Component {
    render() {
        return (
            <div>
                <div className="Drawer">
                    
                    <div className="note_sidenav">
                   
                    <div className="IconSide">
                        <EmojiObjectsTwoToneIcon/>
                    </div>
                    <div className="Name_Side">
                    <h3 style={{fontSize:17}}>Notes</h3>
                    </div>
                         
                    </div>


    
                    <div className="note_sidenav">
                   
                   <div className="IconSide">
                       <EmojiObjectsTwoToneIcon/>
                   </div>
                   <div className="Name_Side">
                   <h3 style={{fontSize:17}}>Reminders</h3>
                   </div>
                        
                   </div>
                   
                </div>
               
            </div>
        )
    }
}

export default sideNav
