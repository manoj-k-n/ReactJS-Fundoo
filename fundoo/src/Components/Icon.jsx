import React from 'react';
import { SketchPicker } from 'react-color';
import { Button } from 'react-bootstrap';
import { Menu, Icon, Card } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { HelpBlock } from 'react-bootstrap';
import { blue } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';





class Component extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             colour:
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
            
             menu:false,
             colourchange:false,
             ApplyColour:'#e6ee9c'
        }
    }
    handChangeMenu=()=>{
        this.setState({menu:true})
    }
    changeColour=()=>{
        this.setState({colourchange:true})
    }
    takecolour=(event)=>{
        this.setState({ApplyColour:event.target.value})
        console.log("hello",this.state.ApplyColour)
    }
   

  render() {
  
    const colour=this.state.colour.map((colour)=>
    {
      return (
          
        <div>       
     <Tooltip title={colour.name}>
      <IconButton style={{backgroundColor:colour.colorCode} } value={colour.colorCode}  onClick={this.takecolour  }   >
      
      </IconButton>
       </Tooltip>
       </div>)
      
    }
    )
    

    return(
<div>
    <div className="colour_row">
    <Card className="colour_row" style={{backgroundColor:this.state.ApplyColour}}>
       {colour}
       {console.log(this.state.ApplyColour)}
    </Card>
    </div>
</div>
    )
  }
}
export default Component