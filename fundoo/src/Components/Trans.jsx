
import { Card, CardContent, InputBase, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';



import React, { Component } from 'react'
import contoller from '../Controller/UserContoller';

export class Trans extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dilogopen:false,
             title:this.props.data.title,
             take_a_note:this.props.data.take_a_note,
             id:this.props.data.id
        }
        console.log(this.props.data)
    }

    deleteNoteForEver=()=>{
      contoller.deleteNote((this.state.id)).then((value)=>{
           console.log("delete note result ",value)
      })
    }

    recovernote=()=>{
        contoller.changeTrans(this.state.id).then((value)=>{
            console.log("recover note result ",value)
        })
    }
    
    render() {
        return !this.state.dilogopen ?(
            <div className="transfistcard">
                <Card className="trnscrad1">
                    <div className="cardinner">
                    <div className="Transtextfiled">
                    <InputBase style={{width:'40'}}
                    value={this.state.title}

                    >
                    </InputBase>
                    </div>
                    <div  className="Transtextfiled">
                    <InputBase style={{width:'40'}}
                    value={this.state.take_a_note}
                    >
                    </InputBase> 
                    </div>
                    <div className="lastrow">
                        <div>
                            <IconButton title="Delete Forever" onClick={this.deleteNoteForEver}>
                          <DeleteForeverIcon style={{fontSize:18}} />
                          </IconButton>
                        </div>
                        <div>
                        <IconButton title="Restore" onClick={this.recovernote}>
                          <RestoreFromTrashIcon style={{fontSize:18}}/>
                          </IconButton>

                        </div>
                    </div>
                    </div>
                </Card>
            </div>
        ):(
            <div>
            
            </div>
        )
    }
}

export default Trans



