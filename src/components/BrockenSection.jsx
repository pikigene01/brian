import React from 'react'
import team_img from '../images/team.jpeg';
import offer_service from '../images/wall.jpeg';

export default function BrockenSection() {
  return (
    <div>
       <section class="cmt-row fid-section_1 cmt-bgcolor-white clearfix">
            <div class="container">
               
                <div class="row">
                    <div class="col-lg-5">
                        
                        <div class="cmt_single_image-wrapper">
                            <div class="cmt_single-image-inner text-left">
                                <img width="518" height="570" class="img-fluid  border-rad_6 ml-25 res-575-ml-0 position-relative z-index-1" src={offer_service} alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="pl-50 res-991-pl-0 res-991-pt-50">
                           
                            <div class="section-title">
                                <div class="title-header">
                                    <h5>Why Choose Us?</h5>
                                    <h2 class="title">Need Professional Help With Your Project?</h2>
                                </div>
                                <div class="title-desc">
                                    <p>With a high level of quality workmanship, courtesy, and customer service at a great price, <b><u>our complete electrical service</u></b> &amp; rooter service leaves all other electricians in the dust. You can call us any time, day or night, for a fast response electrical needs. </p>
                                </div>
                            </div>
                            <a class="cmt-btn cmt-btn-size-md cmt-btn-shape-rounded cmt-btn-style-border cmt-icon-btn-left cmt-btn-color-dark mt-10 mr-2" href="#about">More About</a>
                            <a class="cmt-btn cmt-btn-size-md cmt-btn-shape-rounded cmt-btn-style-fill cmt-icon-btn-left cmt-btn-color-skincolor mt-10" href="#contact">View More</a>
                            <div class="cmt-horizontal_sep width-100 mt-45 mb-10"></div>
                           
                            <div class="row">
                                <div class="col-sm-12 col-md-4 col-lg-6 col-xl-4">
                                    <div class="cmt-fid inside cmt-fid-view-lefticon">
                                        <div class="cmt-fid-left">
                                            <div class="cmt-fid-icon-wrapper">
                                                <i class="ti ti-cup"></i>
                                            </div>
                                        </div>
                                        <div class="cmt-fid-contents">
                                            <h4 class="cmt-fid-inner">
                                                <span data-appear-animation="animateDigits" data-from="0" data-to="125" data-interval="5" data-before="" data-before-style="sup" data-after="" data-after-style="sub" class="numinate completed">3</span><span>+</span>
                                            </h4>
                                            <h3 class="cmt-fid-title">Awards Winner</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-6 col-xl-4">
                                    <div class="cmt-fid inside cmt-fid-view-lefticon">
                                        <div class="cmt-fid-left">
                                            <div class="cmt-fid-icon-wrapper">
                                                <i class="ti ti-user"></i>
                                            </div>
                                        </div>
                                        <div class="cmt-fid-contents">
                                            <h4 class="cmt-fid-inner">
                                                <span data-appear-animation="animateDigits" data-from="0" data-to="2514" data-interval="5" data-before="" data-before-style="sup" data-after="" data-after-style="sub" class="numinate completed">2</span><span>+</span>
                                            </h4>
                                            <h3 class="cmt-fid-title">Satisfied Clients</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-6 col-xl-4">
                                    <div class="cmt-fid inside cmt-fid-view-lefticon">
                                        <div class="cmt-fid-left">
                                            <div class="cmt-fid-icon-wrapper">
                                                <i class="ti ti-light-bulb"></i>
                                            </div>
                                        </div>
                                        <div class="cmt-fid-contents">
                                            <h4 class="cmt-fid-inner">
                                                <span data-appear-animation="animateDigits" data-from="0" data-to="231" data-interval="5" data-before="" data-before-style="sup" data-after="" data-after-style="sub" class="numinate completed">66</span><span>+</span>
                                            </h4>
                                            <h3 class="cmt-fid-title">Active projects</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
