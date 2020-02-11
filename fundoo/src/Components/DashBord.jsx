import React, { Component } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Createnote from './createnote'
import GetNotes from './GetNotes';
import DialogBox from './DilogBox'
import Controller from '../../src/Controller/UserContoller'
import "./note.css";



export class DashBord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            notes: []
            
        }
    }
    handleDialog = () => {
        this.setState({ dialogOpen: !this.state.dialogOpen })
    }
    componentDidMount() {

        Controller.getAllNotes().then((res) => {
            console.log("res in getnotes", res.data.obj)
            this.setState({ notes: res.data.obj })
            console.log("Notes...", this.state.notes)
        })
    }
    render() {
        let getNotes = this.state.notes.map(item => {
            console.log("item", item)
            return (
                <GetNotes data={item} handleDialog={this.handleDialog} />
            )
        })

        let getNotesEdite = this.state.notes.map(item => {
            console.log("items.....?", item)
            console.log("...working...")
            return (<DialogBox details={item} handleDialog={this.state.dialogOpen} />)
        })

        return (
            <div>
                {/* <NavBar/> */}
                <Createnote />
                <div className="getNotesContainer">
                    {getNotes}
                </div>

                {getNotesEdite}
            </div>
        )
    }
}

export default DashBord
