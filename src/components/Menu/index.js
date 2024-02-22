"use client"
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Style from "./Menu.module.scss"

const Menu = () => {

  return (
    <header className={Style.header}>
      <Navbar expand="lg" className="">
        <div className='container'>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="close" />
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <span>
                <span>Home</span>
                <span>Home</span>
                </span>
               
              </Nav.Link>
              <Nav.Link href="#link">
                <span>
                <span>About</span>
                <span>About</span>
                </span>
             
              </Nav.Link>

              <Nav.Link href="#link">
                <span>
                <span>Service</span>
                <span>Service</span>
                </span>
             
              </Nav.Link>
              <Nav.Link href="#link">
                <span>
                <span>Projects</span>
                <span>projects</span>
                </span>
             
              </Nav.Link>
              <Nav.Link href="#link">
                <span>
                <span>Contact</span>
                <span>Contact</span>
                </span>
             
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Menu