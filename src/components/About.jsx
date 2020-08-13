import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div id="About" class="container mb-4 rounded wow fadeInLeft pb-4 mt-5" data-wow-duration="1s" data-wow-delay="0.5s" >
                    <h4 class="text-center mb-2 heading">About</h4>
                    <h1 class="text-center mb-5">Let me Introduce Myself</h1>
                    <div class="container">
                    <div class="row mb-4">
                        <div class="col-12 col-md-6 mb-4">
                            <img src="images/prof.png" width="100%"></img>
                        </div>
                        <div class="col-12 about-text col-md-6">
                            <p>I'm a front-end Developer who loves to make things look perfect. I create pixel perfect webpages that are repsonsive on all screensizes (small, big and Extra large screen sizes). I'm also a Petroleum Engineer. I love learning new things and quickly too. And i love to code >_</p>
                        </div>
                    </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="profile col-12  col-md-6 mb-5 wow fadeInLeft" data-wow-duration="0.4s" data-wow-delay="0.3s"  >
                                <div class="skills-text">
                                    <h3 class="mb-4 text-center text-md-left">PROFILE</h3>
                                <p class="mb-5">I have a Degree in Petroleum Engineering from the great University of Benin. I'm a self taught Front End Developer with sound knowledge on Front End technologies. I have sound knowledge on ReactJs, HTML5, CSS3, SASS, JQUERY, VANILLA JAVASCRIPT, RESTFUL APIS and more.
                                </p>
                                </div>
                                <div class="details wow fadeInDown" data-wow-duration="0.5" data-wow-delay="0.5s" >
                                    <h3 class="mb-2">FULLNAME:</h3>
                                    <p class="mb-5">Osara Wisdom</p>
                                    <h3 class="mb-2">EMAIL:</h3>
                                    <p class="mb-5">wisdomosara@email.com</p>
                                </div>
                            </div>
                            <div class="skills col-12  col-md-6 wow fadeInUp" data-wow-duration="0.5" data-wow-delay="0.2s" >
                                <div class="skills-text">
                                    <h3 class="mb-4">SKILLS</h3>
                                    <ul>
                                    <li>Communication</li>
                                    <li>Teamwork</li>
                                    <li>Self- motivation</li>
                                    <li>Marketing</li>
                                </ul>
                                </div>
                                
                                <div class="d-flex justify-content-between">
                                    <h3>HTML5</h3>
                                    <p>99%</p>
                                </div>
                                <div class="progress mb-5">
                                    <div class=" bar1"></div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h3>CSS3</h3>
                                    <p>90%</p>
                                </div>
                                <div class="progress mb-5">
                                <div class=" bar2"></div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h3>VANILLA JAVASCRIPT</h3>
                                    <p>75%</p>
                                </div>
                                    <div class="progress mb-5">
                                    <div class=" bar3"></div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h3>REACTJS</h3>
                                    <p>70%</p>
                                    </div>
                                    <div class="progress mb-5">
                                    <div class=" bar4"></div>
                                    </div>
                                <div class="d-flex justify-content-between">
                                    <h3>BOOTSTRAP</h3>
                                    <p>80%</p>
                                </div>
                                <div class="progress mb-5">
                                    <div class=" bar5"></div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h3>JQUERY</h3>
                                    <p>80%</p>
                                </div>
                                <div class="progress mb-5">
                                    <div class=" bar6"></div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h3>RESTFul APIs</h3>
                                    <p>80%</p>
                                </div>
                                <div class="progress mb-5">
                                    <div class=" bar7"></div>
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
                </div>
        )
    }
}
