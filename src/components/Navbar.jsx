import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class NavBar extends Component {

    render() {
        return (
            <div className="wow fadeInLeftBig nav-head" data-wow-duration="1s" data-wow-delay ="0.3s">
                <div className="container">
                    <nav className="d-flex align-items-center justify-content-between px-md-5 px-2 container">
                        <div>
                            <NavLink className="Name logo wow fadeInLeft" data-wow-duration="0.4s" data-wow-delay="0.4s"  to="/" exact>W<span>O.</span></NavLink>
                        </div>
                        <div className="big-nav">
                            <ul className="mt-3  wow fadeInLeft d-md-flex" data-wow-duration="1s" >
                                <li className="nav-item ml-4">
                                    <NavLink to="/" exact>Home</NavLink>
                                </li>
                                <li className="nav-item ml-4">
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li className="nav-item ml-4">
                                    <NavLink to="/portfolio">Portfolio</NavLink>
                                </li>
                                <li className="nav-item ml-4">
                                    <NavLink to="/resume">Resume</NavLink>
                                </li>
                                <li className="nav-item ml-4">
                                    <NavLink to="/services">Service</NavLink>
                                </li>
                                <li className="nav-item ml-4">
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <button className="d-md-none wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.4s"  onClick = {this.props.handlenav}>
                            <span className="hand" >{this.props.state.clicked ? <img src="images/icons8-delete-30.png"></img> : <img src="images/hamburger.png"></img>}</span>
                        </button>
                        
                    </nav>
                    {this.props.state.clicked ? <div className="mobile-nav pb-2">
                            <ul className="wow fadeInLeft" data-wow-duration="1s" >
                                <li className="nav-item">
                                    <NavLink to="/" exact><i class="fas fa-home    "></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about"><i class="fas fa-user    "></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/portfolio"><i class="fas fa-eye    "></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/resume"><i class="fas fa-briefcase    "></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services"><i class="fas fa-tasks    "></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact"><i class="fas fa-address-card    "></i></NavLink>
                                </li>
                            </ul>
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}
