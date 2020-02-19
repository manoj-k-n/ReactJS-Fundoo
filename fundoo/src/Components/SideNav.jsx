import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

import { createMuiTheme ,MuiThemeProvider } from '@material-ui/core/styles';
import { Divider, List, Dialog, CardContent, TextField } from '@material-ui/core';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Button } from 'react-bootstrap';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { makeStyles } from '@material-ui/core/styles';
import { MDBFormInline } from 'mdbreact';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
const theme=createMuiTheme({
    overrides:{
        MuiDrawer:{
            paper:{
                top:"82px",
                width:"240px"
                
            }
        }
    }
})

const useStyle=makeStyles({
    root:{
        mindWidth:275
    },
    title:{
        fontSize:14
    },
   pos:{
       fontSize:6
   }
})


export class SideNav extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:true,
             editeLabel:false
          
            
        }
    }
     
    editlabelclose=()=>{
        this.setState({editeLabel:!this.state.editeLabel})
    }

    openeditelabelDilog=()=>{
        this.setState({editeLabel:!this.state.editeLabel})
    }
    
    render() {


console.log("labelssvfdgfdbfgbfgbgf",this.props.labels)


let labelsInDrawer= this.props.labels.map(labels=>{
     console.log("labels in render",labels)
     return(

        <ListItem button>
            <ListItemIcon>
            <LabelOutlinedIcon style={{fontSize:25}}/>
             </ListItemIcon>
             <ListItemText primary={labels.labelTitle} />
         
             </ListItem>
    
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
            <ListItem button>
            <ListItemIcon>
            <EmojiObjectsOutlinedIcon style={{fontSize:23}}/>
             </ListItemIcon>
             <ListItemText primary="Notes" />
         
             </ListItem>


             <ListItem button>
            <ListItemIcon>
            <AddAlertOutlinedIcon style={{fontSize:20}}/>
             </ListItemIcon>
             <ListItemText primary="Reminder" />
         
             </ListItem>
      <Divider/>
      <p style={{fontSize:15}} className="sideLabel">Labels</p>

        {labelsInDrawer}
 

        <ListItem button onClick={this.openeditelabelDilog}>
            <ListItemIcon >
            <EditOutlinedIcon style={{fontSize:20}}/>
             </ListItemIcon>
             <ListItemText primary="Edite label" />
         
             </ListItem>
     <div>
         <Dialog open={true} onClose={this.editlabelclose}  >
           <Card className={useStyle.root}>
             <CardContent>
             <Typography className={useStyle.pos} variant="h5" component="h2">
             Edite labels
        </Typography>
        <div>
        <ClearRoundedIcon style={{fontSize:19}}/>
          <TextField
           label="Create new label"
           />
           <CheckRoundedIcon/>
           </div>
             </CardContent>

           </Card>

         </Dialog>
      </div>


<Divider/>


<ListItem button>
            <ListItemIcon>
            <ArchiveOutlinedIcon style={{fontSize:20}}/>
             </ListItemIcon>
             <ListItemText primary="Archive" />
         
             </ListItem>



             <ListItem button>
            <ListItemIcon>
            <DeleteOutlinedIcon style={{fontSize:20}}/>
             </ListItemIcon>
             <ListItemText primary="Bin" />
         
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
