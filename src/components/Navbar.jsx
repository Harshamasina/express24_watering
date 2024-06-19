import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from '../pages/Home';
import FloodAndFire from '../pages/FloodandFire';
import Mold from '../pages/Mold';
import WaterDamage from '../pages/WaterDamage';
import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';

const Navbar = () => {
    const location = useLocation();

    useEffect(() => {
        const offcanvasLinks = document.querySelectorAll('#offcanvasNavbar .nav-link');
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        
        const closeOffcanvas = () => {
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvas.hide();
        };
        
        offcanvasLinks.forEach(link => {
            link.addEventListener('click', closeOffcanvas);
        });
        
        return () => {
            offcanvasLinks.forEach(link => {
                link.removeEventListener('click', closeOffcanvas);
            });
        };
    }, [location]);

    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-lg fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand me-auto" to="/" aria-label='click to go to home page'>
                        <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/logo.png" alt='navbar_logo' className='navbar_img'></img>
                    </Link>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <img className="offcanvas-title navbar_img" id="offcanvasNavbarLabel" src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/portfolio/logo.png" alt='navbar_logo' />
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close offcanvas"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="home" aria-label='Read more about us' to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="water damage clean up" aria-label='Read more about our water damage clean up' to="/waterdamage">Water Damage Clean Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="Flood and Fire Restoration" aria-label='Read more Flood and Fire Restoration' to="/floodandfire">Flood & Fire Restoration</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="Mold Remediation" aria-label='Read more about Mold Remediation' to="/mold">Mold Remediation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="Contact Us" aria-label='Contact us for more services' to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link to='/contact' className='navbar_button'>Free Consultation</Link>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/express24waterdamage' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/waterdamage' element={<WaterDamage />} />
                    <Route path='/floodandfire' element={<FloodAndFire />} />
                    <Route path='/mold' element={<Mold />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </div>
        </>
    )
};

export default Navbar;