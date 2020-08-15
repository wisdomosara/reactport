import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <div id="resume" class="wow fadeInLeft mt-5 pt-3" data-wow-duration="1.6s" data-wow-delay="0.2s" >
            <div class="container-fluid">
                <h4 class="heading text-center">Resume</h4>
                <h2 class="text-center">My Credentials</h2>
                <p class="text-center">Here are detailed information about my credentials and my current and past work experience.</p>
                <div id="experience">
                    <h3 class="heading text-center mb-4">Work Experience</h3>
                    <div class="experience-holder">
                        <div class="exp-item container">
                            <div class="exp-left">
                                <h4>Frontend Developer</h4>
                                <p>May 2019-present</p>
                            </div>
                            <div class="exp-middle">
                                <img src="images/bi_briefcase.png" />
                            </div>
                            <div class="exp-right">
                                <h4>SELF TAUGHT</h4>
                                <div class="line mb-4"></div>
                            <p>I ventured into the land of Software development shortly after graduating from the University. I've used alot of online resources and hands on projects to be the front-end developer I am today. Some of the resources are: Freecodecamp, Codecademy, W3schools, Youtube videos, Udemy Courses etc.</p>
                            </div>
                        </div>
                        <div class="exp-item container">
                            <div class="exp-left">
                                <h4>HNGi7 Intern</h4>
                                <p>June 2020-August 2020</p>
                            </div>
                            <div class="exp-middle">
                                <img src="images/bi_briefcase.png" />
                            </div>
                            <div class="exp-right">
                                <h4>HNG</h4>
                                <div class="line mb-4"></div>
                            <p>Two months on a rigorous, fast paced and project based internship to improve on existing skills and learn more. I built several products and was mentored by some really good programmers.</p>
                            </div>   
                        </div>
                    </div>
                </div>
                <div id="experience">
                    <h3 class="text-center heading mb-4">Education</h3>
                    <div class="experience-holder">
                        <div class="exp-item container">
                            <div class="exp-left">
                                <h4>Bachelor Degree</h4>
                                <p>September 2013-October 2018</p>
                            </div>
                            <div class="exp-middle">
                                <img src="images/fa-solid_graduation-cap.png" />
                            </div>
                            <div class="exp-right">
                                <h4>University of Benin.</h4>
                                <div class="line mb-4"></div>
                            <p>Bachelor in Engineering (B.Eng) Petroleum Engineering.</p>
                            </div>
                        </div>
                        <div class="exp-item container">
                            <div class="exp-left">
                                <h4>Responsive Web Design</h4>
                                <p>May 2019</p>
                            </div>
                            <div class="exp-middle">
                                <img src="images/fa-solid_graduation-cap.png" />
                            </div>
                            <div class="exp-right">
                                <h4>FreeCodeCamp.org</h4>
                                <div class="line mb-4"></div>
                            <p>You can view the certificate <a target="blank" href="https://www.freecodecamp.org/certification/fcce0659087-335e-4c7f-bf86-40a387137078/responsive-web-design">here.</a> I learnt the basics to intermediate Responsive Web Design</p>
                            </div>
                        </div>
                        <div class="exp-item container">
                            <div class="exp-left">
                                <h4>Javascript Data Structures and Algorithms</h4>
                                <p>April 2020</p>
                            </div>
                            <div class="exp-middle">
                                <img src="images/fa-solid_graduation-cap.png" />
                            </div>
                            <div class="exp-right">
                                <h4>FreeCodeCamp.org</h4>
                                <div class="line mb-4"></div>
                            <p>I got the Javascript Data Structure and Algorithms certificate. Learnt basic to some advanced Javascript concepts. You can view this Certificate <a target="blank" href="https://www.freecodecamp.org/certification/fcce0659087-335e-4c7f-bf86-40a387137078/javascript-algorithms-and-data-structures">here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                        <div className=" container mt-4">
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
