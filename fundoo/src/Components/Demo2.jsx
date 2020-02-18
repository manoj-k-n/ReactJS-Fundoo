import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';

import { createMuiTheme ,MuiThemeProvider } from '@material-ui/core/styles';
const theme=createMuiTheme({
    overrides:{
        MuiDrawer:{
            paper:{
                margineTop:"67px",
                width:"240px"
            }
        }
    }
})


export class Demo2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:true
        }
    }
    
    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                <Drawer
        variant="persistent"
        anchor="left"
        open={this.state.open}>

        </Drawer>
        </MuiThemeProvider>
            </div>
        )
    }
}

export default Demo2
