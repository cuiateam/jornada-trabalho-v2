import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import { IoLogoGithub } from 'react-icons/io'

import './styles.css'

export default function nav(){
    return(
       <div>
           <Navbar bg="dark" variant="dark" expand="lg">
               <Navbar.Brand href="#">Jornada de trabalho v2</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <a className="nav-link github-icon" href="https://github.com/cuiateam/jornada-trabalho-v2">
                   <IoLogoGithub color="white"/>
                </a>
           </Navbar>
       </div> 
    )
}