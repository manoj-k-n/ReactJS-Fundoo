import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBIcon ,MDBInput} from "mdbreact";
import { Nav,DropdownButton,Dropdown } from 'react-bootstrap';

import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import { DropdownMenu, MenuItem,DropdownItem ,DropdownToggle} from 'react-bootstrap-dropdown-menu';



export class NavBar extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light">  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
         <img id="brand-image" alt="Website-logo" src="https://www.google.com/images/icons/product/keep-512.png"/>        
           <a className="navbar-brand" href="#">Keep</a>
          
           <div className='searchbar'>
            <form class="form-inline my-2 my-lg-10">
              <div className='bar'>
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              </div>
            </form>
           
            </div>
            <div>
            {/* <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown> */}
            </div>
          </div> 
          </nav>
        )
    }
  }

export default NavBar

