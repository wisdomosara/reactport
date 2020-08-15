import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div id="services" class="wow fadeInUp mt-5" data-wow-duration="1.2" data-wow-delay="0.5s"  >
                    <div  class="container mb-5 px-4 pt-3">
                        <h4 class="text-center heading">Services</h4>
                        <h2 class="text-center">What Can I Do For You?</h2>
                        <p class="text-center">SKILLS AND OFFER.</p>
                    </div>
                    <div class="container  px-5">
                        <div class="d-flex flex-wrap justify-content-around">
                            <div class="services-items shadow wow fadeInUp" data-wow-duration="0.8" data-wow-delay="0.6s" >
                                <img src="images/carbon_earth.png" class="mb-4 mt-2"></img>
                                <h4 class="mb-2">WEB DEVELOPMENT</h4>
                                <div class="line mb-4"></div>
                                <p class="text-center">A very professional front-end web developer with enthusiasm for Full Stack Web Development.</p>
                            </div>
                            <div class="services-items shadow wow fadeInUp" data-wow-duration="0.8" data-wow-delay="0.6s" >
                                <img src="images/bx_bx-image.png" class="mb-4 mt-2"></img>
                                <h4 class="mb-2">PIXEL PERFECT</h4>
                                <div class="line mb-4"></div>
                                <p class="text-center">All my works are pixel perfect and they match design with 100% conversion.</p>
                            </div>
                            <div class="services-items shadow wow fadeInUp" data-wow-duration="0.8" data-wow-delay="0.6s" >
                                <img src="images/bi_toggles.png" class="mb-4 mt-2"></img>
                                <h4 class="mb-2">RESPONSIVENESS</h4>
                                <div class="line mb-4"></div>
                                <p class="text-center">All my works are responsive on all screensizes from small to extra large screensizes.</p>
                            </div>
                            <div class="services-items shadow wow fadeInUp" data-wow-duration="0.8" data-wow-delay="0.3s" >
                                <img src="images/bi_window.png" class="mb-4 mt-2"></img>
                                <h4 class="mb-2">REACTJS</h4>
                                <div class="line mb-4"></div>
                                <p class="text-center">I also come with sound knowledge and experience in Reactjs and its important plugins.</p>
                            </div>
                            <div class="services-items shadow wow fadeInUp" data-wow-duration="0.8" data-wow-delay="0.3s"  >
                                <img src="images/bx_bx-image.png" class="mb-4 mt-2"></img>
                                <h4 class="mb-2">MORE THAN DESIGN</h4>
                                <div class="line mb-4"></div>
                                <p class="text-center">I also don't just do the design part of front end, I develop using Javascript, Jquery, APIs and more.</p>
                            </div>
                            <div class="services-items shadow wow fadeInUp" data-wow-duration="0.8" data-wow-delay="0.3s" >
                                <img src="images/Group.png" class="mb-4 mt-2"></img>
                                <h4 class="mb-2">LEARNING CULTURE</h4>
                                <div class="line mb-4"></div>
                                <p class="text-center">I never settle for less. I'm always looking to learn new technologies and quickly too.</p>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className=" container">
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
                                    <p><span>&copy; Osara Wisdom</span></p>
                                </div>
                            </div>
                        </div>
                </footer>
                </div>
        )
    }
}
