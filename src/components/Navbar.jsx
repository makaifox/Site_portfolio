import React from 'react';
import logo from "../images/logo.png";
import {Link} from "react-scroll";
//react fontawesome import//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="logo..."/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link smooth={true} to="sobre" offset={-110} className="nav-link" href="#">Sobre mim</Link>
                        </li>

                        <li className="nav-item">
                            <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Meus Serviços</Link>
                        </li>

                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Minha Trajetoria</Link>
                        </li>

                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfólio</Link>
                        </li>

                        <li className="nav-item">
                            <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contato</Link>
                        </li>
                        
                        </ul>
                        
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
