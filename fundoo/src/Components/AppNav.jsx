import React, { Component } from 'react'
import { Card, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import "./App&SideNav.css";
import icon from '../../src/Icon/download.svg';

export class AppBar extends Component {

    render() {
        return (
            <div className='App_Nav'>
                <Card className="AppCrard">
                <div className="InputeBase">
                    <div>
                   
                    <Card className="Serach_Card">
                    <icon/>
                    <SearchIcon/>
                    
                 <InputBase placeholder="Search" className="InputeBase2">
                     <div>

                    
                     </div>
                 </InputBase>
                 </Card>
                       
                 </div>
                 </div>
                </Card>
            </div>
        )
    }
}

export default AppBar

