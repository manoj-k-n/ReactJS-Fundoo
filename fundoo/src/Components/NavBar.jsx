import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBIcon ,MDBInput} from "mdbreact";
import { Nav } from 'react-bootstrap';
import SideBar from './SideBar';

export class NavBar extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light">  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div><SideBar/></div>
         <img id="brand-image" alt="Website-logo" src="https://www.google.com/images/icons/product/keep-512.png"/>        
           <a className="navbar-brand" href="#">Keep</a>
          
           <div className='searchbar'>
            <form class="form-inline my-2 my-lg-10">
              <div className='bar'>
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              </div>
            </form>
            </div>
          </div> 
          </nav>
        )
    }
  }

export default NavBar

