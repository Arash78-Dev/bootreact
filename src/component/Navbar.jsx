import React, { Component } from 'react'
import { Navbar, Nav,NavItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./navbar.css"

export default class Navbars extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect className="d-flex mb-3 bg-dark navbar-dark shadow-me align-center">
                <div className="navbar-header ms-5 d-flex align-center ">
                    <Navbar.Brand>
                        <Link to="/" className="text-decoration-none hover1 h2">HeavenSite</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse className="justify-content-end me-5">
                    <Nav pullright>
                        <NavItem>
                            <Nav.Link eventKey="1" className="hover" as={Link} to="/">Home</Nav.Link>    
                        </NavItem>  
                        <NavItem>
                            <Nav.Link eventKey="2" className="hover" as={Link}  to="/about">About</Nav.Link>    
                        </NavItem> 
                        <NavItem>
                            <Nav.Link eventKey="3" className="hover" as={Link} to="/news">News</Nav.Link>    
                        </NavItem> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}
