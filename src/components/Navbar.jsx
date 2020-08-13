import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay ="5s">
                <div class="container">
                        <nav class="navbar navbar-expand-md  navbar-dark">
                            <a class="navbar-brand Name logo wow fadeInLeft" data-wow-duration="0.4s" data-wow-delay="0.4s"  href="#home">W<span>O.</span></a>
                            <button class="navbar-toggler d-lg-none wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.4s"  type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="hand"><img src="images/hamburger.png"></img></span>
                            </button>
                            <div class="collapse navbar-collapse" id="collapsibleNavId" >
                                <ul class="navbar-nav ml-md-auto mt-2 mt-lg-0 wow fadeInLeft mr-md-5" data-wow-duration="1s" >
                                    <li class="nav-item ml-4">
                                        <NavLink to="/" >Home</NavLink>
                                    </li>
                                    <li class="nav-item ml-4">
                                        <NavLink to="/about" data-toggle="collapse" data-target=".navbar-collapse.show">About</NavLink>
                                    </li>
                                    <li class="nav-item ml-4">
                                        <NavLink to="/portfolio" data-toggle="collapse" data-target=".navbar-collapse.show">Portfolio</NavLink>
                                    </li>
                                    <li class="nav-item ml-4">
                                        <NavLink to="/resume" data-toggle="collapse" data-target=".navbar-collapse.show">Resume</NavLink>
                                    </li>
                                    <li class="nav-item ml-4">
                                        <NavLink to="/services" data-toggle="collapse" data-target=".navbar-collapse.show">Service</NavLink>
                                    </li>
                                    <li class="nav-item ml-4">
                                        <NavLink to="/contact" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
            </div>
        )
    }
}
