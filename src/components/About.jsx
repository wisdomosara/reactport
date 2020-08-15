import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div id="About" class="container mb-4 rounded wow fadeInLeft pb-4 mt-5 pt-3" data-wow-duration="1s" data-wow-delay="0.5s" >
                    <h4 class="text-center mb-2 heading">About</h4>
                    <h1 class="text-center mb-5">Let me Introduce Myself</h1>
                    <div class="container">
                    <div class="row mb-4">
                        <div class="col-12 col-md-6 mb-4 profile-pic">
                            <img src="images/IMG_20200528_112110_556_1595542028515.jpg" width="100%"></img>
                        </div>
                        <div class="col-12 about-text col-md-6">
                            <p>I'm a front-end Developer who loves to make things look perfect. I create pixel perfect webpages that are repsonsive on all screensizes (small, big and Extra large screen sizes). I'm also a Petroleum Engineer. I love learning new things and quickly too. And i love to code >_</p>
                        </div>
                    </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="profile col-12  col-md-6 mb-2 wow fadeInLeft" data-wow-duration="0.4s" data-wow-delay="0.3s"  >
                                <div class="skills-text">
                                    <h3 class="mb-4 text-center text-md-left">PROFILE</h3>
                                    <p class="mb-2">I have a Degree in Petroleum Engineering from the great University of Benin. I'm a self taught Front End Developer with sound knowledge on Front End technologies. I have sound knowledge on ReactJs, HTML5, CSS3, SASS, JQUERY, VANILLA JAVASCRIPT, RESTFUL APIS and more.
                                    </p>
                                    <p>Click <button class="btn btn-sm"><Link to="/portfolio">Here</Link> </button> to view my Portfolio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-text-center">
                        <div class="container">
                            <div class="button-flex">
                                <a href="#contact"><button class="btn1 shadow wow fadeInLeft" href="#contact" data-wow-duration="0.4s" data-wow-delay="0.3s">HIRE ME</button></a>
                                <a href="./resumedev.pdf" target="/blank"><button class="btn2 shadow wow fadeInRight" data-wow-duration="0.5" data-wow-delay="0.4s" >DOWNLOAD CV</button></a>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className=" container mt-5">
                            <div className="row footer-flex">
                                <div className="order-sm-12 col-12 col-sm-6">
                                    <div className="icon-holder1 wow fadeInRight">
                                        <a href="https://facebook.com/wisdom.osara">
                                            <img src="images/bx_bxl-facebook.png"></img>
                                        </a>
                                        <a href="https://sandbox.com">
                                            <img src="images/cib_codesandbox.png"></img>
                                        </a>
                                        <a href="https://github.com/wisdomosara">
                                            <img src="images/ant-design_github-outlined.png"></img>
                                        </a>
                                        <a href="https://twitter.com/OsaraWisdom">
                                            <img src="images/ant-design_twitter-outlined.png"></img>
                                        </a>
                                        <a href="https://behance.com">
                                            <img src="images/ant-design_behance-outlined.png"></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12  col-sm-6 order-sm-1 wow fadeInLeft" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                    <p><span>&copy; Wisdom Osara</span></p>
                                </div>
                            </div>
                        </div>
                </footer>
                </div>
        )
    }
}
