import React from 'react'
import Header from './Header'
import team_img from '../images/team.jpeg';
import Services from './Services';
import './Home.css';
import MoreInfo from './MoreInfo';
import BrockenSection from './BrockenSection';

export default function Home() {
  return (
    <div className='page'>
        <Header/>
        <div className="row">
                    <div className="col-lg-6">
                        <div className="spacing-1">
                                                  <div className="section-title">
                                <div className="title-header">
                                    <h5>WHY CHOOSE US ?</h5>
                                    <h2 className="title">We expand all our expertise to be the best electricians</h2>
                                </div>
                                <div className="title-desc">
                                    <p>Our highly skilled electricians &amp; heating engineers are here to help with any plumbing issues you’re faced with. We are dedicated to giving customers a high standard plumbing service for many years.</p>
                                    <p>If you have had a sudden plumbing issue that needs to be taken care of as soon as possible, we offer emergency services 24/7.</p>
                                </div>
                            </div>                                                   <div className="cmt-progress-bar" data-percent="75%">
                                <div className="progressbar-title">Projects Done</div>
                                <div className="progress-bar-inner">
                                    <div className="progress-bar progress-bar-color-bar_skincolor" style={{width: "75%;"}}></div>
                                </div>
                                <div className="progress-bar-percent" data-percentage="75">55%</div>
                            </div>
                                                     <div className="cmt-progress-bar clearfix" data-percent="55%">
                                <div className="progressbar-title">Qualified Staft</div>
                                <div className="progress-bar-inner">
                                    <div className="progress-bar progress-bar-color-bar_skincolor" style={{width: "55%;"}}></div>
                                </div>
                                <div className="progress-bar-percent" data-percentage="55">40%</div>
                            </div>
                                                     <div className="cmt-progress-bar clearfix" data-percent="90%">
                                <div className="progressbar-title">Awared Wins</div>
                                <div className="progress-bar-inner">
                                    <div className="progress-bar progress-bar-color-bar_skincolor" style={{width: "90%;"}}></div>
                                </div>
                                <div className="progress-bar-percent" data-percentage="90">66%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       
                        <div className="cmt_single_image-wrapper">
                            <img style={{width: "512px",height: "500px"}} className="img-fluid" src={team_img} alt="image"/>
                        </div>
                    </div>
                </div>
        <Services/>
        <MoreInfo/>
        <BrockenSection/>
    </div>
  )
}
