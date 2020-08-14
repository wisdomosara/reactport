import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class NavBar extends Component {

    render() {
        return (
            <div className="wow fadeInLeftBig nav-head" data-wow-duration="1s" data-wow-delay ="0.3s">
                <div className="container">
                    <nav className="d-flex align-items-center justify-content-between px-md-5 px-2 container">
                        <div>
                            <Link className="Name logo wow fadeInLeft" data-wow-duration="0.4s" data-wow-delay="0.4s"  to="/">W<span>O.</span></Link>
                        </div>
                        <div className="big-nav">
                            <ul className="mt-3  wow fadeInLeft d-md-flex" data-wow-duration="1s" >
                                <li className="nav-item ml-4">
                                    <Link to="/" >Home</Link>
                                </li>
                                <li className="nav-item ml-4">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="nav-item ml-4">
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item ml-4">
                                    <Link to="/resume">Resume</Link>
                                </li>
                                <li className="nav-item ml-4">
                                    <Link to="/services">Service</Link>
                                </li>
                                <li className="nav-item ml-4">
                                    <Link to="/contact">Contact</Link>
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
                                    <Link to="/" ><i class="fas fa-home    "></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about"><i class="fas fa-user    "></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/portfolio"><i class="fas fa-eye    "></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/resume"><i class="fas fa-briefcase    "></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services"><i class="fas fa-tasks    "></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact"><i class="fas fa-address-card    "></i></Link>
                                </li>
                            </ul>
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}
