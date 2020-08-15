import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio" className="container mt-5 wow fadeInDown" data-wow-duration="1.2s">
                <h4 class="text-center mb-4 heading">Portfolio</h4>
                    <h1 class="text-center mb-5">Check Out Some of My Works</h1>
                    <div class=" mb-5">
                        <div class="row mb-4">
                            <div class="col-12 col-md-6 order-md-1 wow fadeInDown" data-wow-duration="1.5" data-wow-delay="0.6"  >
                                <a href="https://wisdommasterlanding.herokuapp.com" target="blank"><div class="portfolio portfolio1 shadow">
                                    <img src="images/landingpage__2_.jpg" width="90%"></img>
                                </div></a>
                            </div>
                            <div class="col-12 portfolio-text col-md-6 order-md-12 wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.6s"  >
                                <h4 class="my-2">BeSilent</h4>
                                <h5 class="mb-3">WEB DEVELOPMENT | PRODUCT LANDING PAGE</h5>
                                <p>I did the BeSilent landing page as part of a project in the internship. I was paired with a wonderful designer who came up with the Design for the page. The landing page has an email capturing system that links to the database. This was my first dive into backend development.</p>
                            </div>
                        </div>
                    </div>
                    <div class=" mb-5">
                        <div class="row mb-4">
                            <div class="col-12 col-md-6 order-md-12 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.6s" >
                                <a href="https://app.fundmylaptop.com/campaigns" target="blank"><div class="portfolio portfolio2 shadow">
                                    <img src="images/fundmylaptop.jpg" width="90%"></img>
                                </div></a>
                            </div>
                            <div class="col-12 portfolio-text text-md-right col-md-6 order-md-1 wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.6s" >
                                <h4 class="my-2">Fund My Laptop</h4>
                                <h5 class="mb-3">WEB DEVELOPMENT</h5>
                                <p>I was in the team the did the FundMyLaptop project. It is a Reactjs project. We used advanced technologies such as React-Redux, React-Router etc. My contribution can be seen once you log in to the site and click on FUND. The component i did to make get request to the campaigns API endpoint and consume it on the component. Also on Admin view, a different layout is rendered.</p>
                            </div>
                        </div>
                    </div>
                    <div class=" mb-5">
                        <div class="row mb-4">
                            <div class="col-12 col-md-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.6s"  >
                                <a href="https://wisdomosara.github.io/countries" target="blank"><div class="portfolio portfolio3 shadow">
                                    <img src="images/countries.jpg" width="90%"></img>
                                </div></a>
                            </div>
                            <div class="col-12 portfolio-text col-md-6 wow fadeInUp" data-wow-duration="0.7" data-wow-delay="0.6s"  >
                                <h4 class="my-2">COUNTRIES</h4>
                                <h5 class="mb-3">WEB DEVELOPMENT | EDUCATION</h5>
                                <p>Based off on a challenge on Front-End Mentors. I finished the project which I employed my knowledge of RESTFul APIs and made several get requests to the countries RESTFul api and populated the page with the data gotten from it.</p>
                            </div>
                        </div>
                    </div>
                    <div class=" mb-5">
                        <div class="row mb-4">
                            <div class="col-12 col-md-6 order-md-12 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.6s" >
                                <a href="https://wisdomosara.github.io/slide" target="blank"><div class="portfolio portfolio4 shadow">
                                        <img src="images/slide.jpg" width="90%"></img>
                                </div></a>
                            </div>
                            <div class="col-12 portfolio-text text-md-right col-md-6 order-md-1 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.6s" >
                                <h4 class="my-2">Global Adventure Slide</h4>
                                <h5 class="mb-3">WEB DEVELOPMENT | REACTJS</h5>
                                <p>A personal project based on a design from a friend. Using the power of Reactjs state management, I created this smooth slideshow. It shows a sneak peek of the show before loading.</p>
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
                                    <p><span>&copy; Wisdom Osara </span></p>
                                </div>
                            </div>
                        </div>
                </footer>
            </div>
        )
    }
}
