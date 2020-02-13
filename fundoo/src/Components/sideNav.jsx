import React, { Component } from 'react'
import { Card, Menu } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export class sideNav extends Component {
    render() {
        return (
            <div>
                <div className="Drawer">
                <SwipeableDrawer  open={true}>
                 
                 </SwipeableDrawer>
                </div>
            </div>
        )
    }
}

export default sideNav
