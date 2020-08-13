import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <div id="resume" class="wow fadeInLeft mt-5" data-wow-duration="1.6s" data-wow-delay="0.2s" >
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
                            <p>After getting my responsive web design certificate, I had a little hold up in my learning because of some stuffs beyond my control. I got back to programming some months later. You can view this Certificate <a target="blank" href="https://www.freecodecamp.org/certification/fcce0659087-335e-4c7f-bf86-40a387137078/javascript-algorithms-and-data-structures">here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
