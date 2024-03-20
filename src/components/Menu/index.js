"use client"
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Style from "./Menu.module.scss"
import Image from 'next/image';

const Menu = () => {

  return (
    <header className={Style.header}>
      <Navbar expand="lg" className="">
        <div className='container'>
          <Navbar.Brand href="#home">
            <figure>
              <Image src="/images/Logo-w.png" fill alt='logo'></Image>
            </figure>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='hamburger'>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="close" />
            <Nav className="ms-auto">
              <Nav.Link href="/">
                <span>
                <span>Home</span>
                <span>Home</span>
                </span>
               
              </Nav.Link>
              <Nav.Link href="/about">
                <span>
                <span>About</span>
                <span>About</span>
                </span>
             
              </Nav.Link>

              <Nav.Link href="/service">
                <span>
                <span>Service</span>
                <span>Service</span>
                </span>
             
              </Nav.Link>
              <Nav.Link href="/project">
                <span>
                <span>Projects</span>
                <span>projects</span>
                </span>
             
              </Nav.Link>
              <Nav.Link href="/contact">
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