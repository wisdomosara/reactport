import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        return (
            <div className="mainn wow fadeInLeft" data-wow-duration="1.2s">
                    
                    <div class="hero-text ">
                        <h4 class="text-center wow fadeInDown" data-wow-duration="0.5" data-wow-delay="0.6s" >Hello</h4>
                        <h1 class="text-center element mb-3 px-3 wow fadeInDown" data-wow-duration="0.5" data-wow-delay="1.2s" >I’m Wisdom Osara</h1>
                            <p class="text-center front mb-2 wow fadeInUp" data-wow-duration="0.5" data-wow-delay="1.2s" >Front-end Developer</p>
                        <div class="col text-center mt-2 mb-5 wow fadeInUp">
                            <button class="btn btn-default more"><a href="#About">MORE ABOUT ME</a></button>
                        </div>
                    </div>
                    <div class="icon-holder col text-center">
                        <a href="https://facebook.com/wisdom.osara"><img src="images/bx_bxl-facebook.png"></img></a>
                        <a href="https://sandbox.com"><img src="images/cib_codesandbox.png"></img></a>
                        <a href="https://github.com/wisdomosara"><img src="images/ant-design_github-outlined.png"></img></a>
                        <a href="https://twitter.com/OsaraWisdom"><img src="images/ant-design_twitter-outlined.png"></img></a>
                        <a href="https://behance.com"><img src="images/ant-design_behance-outlined.png"></img></a>
                    </div>
            </div>
        )
    }
}
