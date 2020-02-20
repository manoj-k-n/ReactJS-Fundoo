import React, { Component } from 'react'

// import "./Demo.css";

import Drawer from '@material-ui/core/Drawer';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';


export class DemoColour extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:true
        }
    }
    
    render() {
        return (
            <div>
        
                <button>hello</button>
           
            <div>
                <Drawer
        className="drawer"
        variant="persistent"
        anchor="left"
        open={true}>
           
            <div className="fistrow">
            <div>
               <EmojiObjectsOutlinedIcon/>
            </div>
            <div className="NoteName">
             <h4>Notes</h4>
             </div>
            </div>

{/* ....... second row  .....*/}

<div className="fistrow">
            <div>
               <EmojiObjectsOutlinedIcon/>
            </div>
            <div className="NoteName">
             <h4>Notes</h4>
             </div>
            </div>

         
        </Drawer>
            </div>
            </div>
        )
    }
}

export default DemoColour
