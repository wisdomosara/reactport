import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="wow fadeInLeft" data-wow-duration = "0.6s">
                <div id="contact" className="pb-3 mt-5 pt-3">
                    <div className="container mb-5 px-5 wow fadeInUp" data-wow-duration="0.5" data-wow-delay="0.3s" >
                        <h4 className="text-center heading">Contact</h4>
                        <h2 className="text-center">I'd Love To Hear From You.</h2>
                        <p className="text-center">i'm always open to discussing product design work or partnership.</p>
                    </div>
                    <form className="container d-flex flex-column justify-content-center align-items-center px-5 wow fadeInUp mb-5" data-wow-duration="0.5" data-wow-delay="0.4s" action="mailto:wisdomosara@gmail.com?subject=Getting in touch with Wisdom from Website" method="post" enctype="text/plain">
                        <input type="text" placeholder="Name" name="name" id="name"></input>
                        <input type="email" placeholder="Email" name="email" id="email"></input>
                        <input type="text" placeholder="Subject" name="subject" id="subject"></input>
                        <textarea type="textarea" placeholder="Message" name="message" id="message"></textarea>
                        <button className="submit btn btn-block">Contact Me</button>
                    </form>
                </div>
                <div className="reach-me container my-5">
                    <div className="d-flex flex-wrap milestone-flex justify-content-between">
                        <div className="reach-me-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" >
                            <a href="https://wa.me/+2348187190727" target="blank">
                                <img src="images/whatsapp-logo-png-hd-2.png" width="50px" className="mb-4 mt-2"></img>
                                <p className="mb-2">WHATSAPP ME</p>
                                <p>Click to send me a Whatsapp message</p>
                            </a>
                        </div>
                        <div className="reach-me-item wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.3s" >
                            <a href="mailto:wisdomosara@gmail.com?subject=Getting in touch with Wisdom from Website">
                                <img src="images/carbon_email.png" className="mb-4 mt-2"></img>
                                <p className="mb-2">EMAIL ME AT</p>
                                <p className="text-center">Click to Email me</p>
                            </a>
                        </div>
                        <div className="reach-me-item wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.3s" >
                            <img src="images/ic_round-call.png" className="mb-4 mt-2"></img>
                            <p className="mb-2">CALL ME AT</p>
                            <p className="text-center">Phone: (+234) 8187190727
                                Mobile:(+234) 8113036383
                            </p>
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
