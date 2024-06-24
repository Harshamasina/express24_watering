import React from 'react';
import { FaGripfire } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import GoToTop from './GoTopAnimation';

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>Missouri and Surrounding Areas mainly, in Mid Western Missouri</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Call us Today</h4>
                                        <span>1-800-209-2709</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>expressplumbing1971@yahoo.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <Link to="/"><img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/logo.png" className="img-fluid" alt="logo" aria-label='click to go to home page' /></Link>
                                    </div>

                                    <div className="footer-text">
                                        <p>As a locally owned and operated business, we take pride in serving our community. We are dedicated to not only restoring properties but also building lasting relationships with our clients. Our goal is to exceed your expectations, provide exceptional results, and ensure your complete satisfaction.</p>
                                    </div>

                                    <div className="footer-social-icon">
                                        <a href="https://www.bbb.org/us/mo/waynesville/profile/plumber/express-24-hr-plumbing-and-electrical-0734-310611651" className='footer_bbb' target='_blank' rel='noreferrer' aria-label='click to go to our bbb.org page'><FaGripfire /></a>
                                        <a href="https://www.facebook.com/expressplumbingandElectrical" className='footer_fb' target='_blank' rel='noreferrer' aria-label='click to go to our facebook page'><FaFacebookF /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    
                                    <ul>
                                        <li><Link to="/home" aria-label='click to go to home'>Home</Link></li>
                                        <li><Link to="/waterdamage" aria-label='click to go to Water Damage Clean Up'>Water Damage Clean Up</Link></li>
                                        <li><Link to="/floodandfire" aria-label='click to go to Flood & Fire Restoration'>Flood & Fire Restoration</Link></li>
                                        <li><Link to="/mold" aria-label='click to go to Mold Remediation'>Mold Remediation</Link></li>
                                        <li><Link to="/contact" aria-label='click to go to contact us'>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className='footer_bbb_section'>
                                    <h3>Serving Mid Missouri</h3>
                                    <h5>Lake of the Ozark, Branson, Warrensburg, Rolla, Waynesville, Saint Roberts, Cuba, Sullivan, Columbia, Jefferson City and surrounding areas</h5>
                                    <a href='https://www.bbb.org/us/mo/waynesville/profile/fire-water-damage-restoration/express-environmental-cleanup-llc-0734-1000039412' target='_blank' rel='noreferrer' aria-label='click image to go to bbb.org page'>
                                        <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/bbg_logo.png" alt='bbb_logo' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; {new Date().getFullYear()} Express Water Clean Up, All Right Reserved </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <GoToTop />
        </>
    )
};

export default Footer;