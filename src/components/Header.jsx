import React from 'react'

export default function Header() {
  return (
    <header id="masthead" className="header cmt-header-style-01">
    <div className="top_bar cmt-textcolor-black clearfix">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 d-flex flex-row align-items-center">
                    <div className="top_bar_contact_item">
                        <div className="top_bar_icon"><i className="fa fa-phone"></i></div>Call Us +263776698754
                    </div>
                    <div className="top_bar_contact_item">
                        <div className="top_bar_icon"><i className="fa fa-envelope-o"></i>
                        </div><a href="mailto:takundabrian94@gmail.com">takundabrian94@gmail.com</a>
                    </div>
                    <div className="top_bar_contact_item top_bar_social ml-auto p-0">
                        <ul className="social-icons d-flex">
                            <li><a href="#" tabindex="-1"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" tabindex="-1"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" tabindex="-1"><i className="fa fa-flickr"></i></a></li>
                            <li><a href="#" tabindex="-1"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="top_bar_contact_item header_search">
                        <a href="#" className="btn-default search_btn"><i className="fa fa-search"></i></a>
                        <div className="header_search_content">
                            <div className="header_search_content_inner">
                                <a href="#" className="close_btn"><i className="ti ti-close"></i></a>
                                <form id="searchbox" method="get" action="#">
                                    <input className="search_query" type="text" id="search_query_top" name="s" placeholder="Enter Keyword" />
                                    <button type="submit" className="btn close-search"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="site-header-menu" className="site-header-menu cmt-bgcolor-white">
        <div className="site-header-menu-inner cmt-stickable-header">
            <div className="container">
                <div className="row">
                    <div className="col">
                       
                        <div className="site-navigation d-flex flex-row">
                           
                            <div className="site-branding mr-auto">
                                <a className="home-link" href="#" title="Cleaning" rel="home">
                                    <h3>Conductive Solutions Electrical Engineering</h3>
                                </a>
                            </div>
                            <div className="btn-show-menu-mobile menubar menubar--squeeze">
                                <span className="menubar-box">
                                    <span className="menubar-inner"></span>
                                </span>
                            </div>
                           
                            <nav className="main-menu menu-mobile" id="menu">
                                <ul className="menu">
                            
                                    <li className="mega-menu-item">
                                        <a href="#" className="mega-menu-link">Services</a>
                                        <ul className="mega-submenu">
                                            <li><a href="service-and-repair">Service and Repair</a></li>
                                            <li><a href="residential-plumber">Residential</a></li>
                                            </ul>
                                    </li>
                                   
                                    <li className="mega-menu-item">
                                        <a href="#" className="mega-menu-link">contact Us</a>
                                        <ul className="mega-submenu">
                                            <li><a href="/contact-us">contact us</a></li>
                                           
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div className="widget_info d-flex flex-row align-items-center justify-content-end">
                                <div className="widget_icon"><i className="themifyicon ti-comments"></i></div>
                                <div className="widget_content">
                                    <p className="widget_desc">Have any Questions</p>
                                    <h5 className="widget_title">+263776698754</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}
