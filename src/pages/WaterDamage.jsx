import React from 'react';
import { Parallax } from 'react-parallax';
import { MdFlood } from "react-icons/md";
import { Helmet } from 'react-helmet';

const WaterDamage = () => {
    const img = "https://express24plumbing.s3.ap-south-1.amazonaws.com/w_flood_21.jpg";

    return (
        <>
            <Helmet>
                <title>Water Damage Cleanup | Express 24 Water Damage and Cleanup</title>
                <meta name="description" content="Your trusted partner for comprehensive Water Damage Cleanup services in the heart of Missouri." />
                <meta name='keywords' content='About Express 24 Water Damage and Cleanup' />
            </Helmet>

            <div>
                <Parallax bgImage={ img } strength={300} bgImageAlt="parallaximg" blur={1}>
                    <div className='ParallaxContainer1'>
                        <div className="ParallaxDiv">
                            <div className='ParallaxPageContent'>
                                <div className='parallax_icon_c'><MdFlood /></div>
                                <h2>Water Damage Clean Up</h2>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

            <div className='para_container'>
                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_water_26.jpg' alt='' />
                    </div>
                    <div className='para_content'>
                        <h3>Welcome to Express Water Damage Cleanup</h3>
                        <p>Your trusted partner for comprehensive Water Damage Cleanup services in the heart of Missouri.</p>
                        <span>Our mission is to swiftly restore your property to its pre-damage condition, providing efficient and effective solutions for all your water damage restoration needs.</span>
                    </div>
                </div>

                <div className='para_container_2'>
                    <div className='para_content'>
                        <span>With our team of highly skilled water damage restoration specialists, equipped with state-of-the-art equipment, we have the expertise to handle water damage of any magnitude. Whether it’s a plumbing issue, roof leak, or flood damage, our professionals will assess the situation promptly and initiate the cleanup process to mitigate further damage.</span><br />
                        <a href="tel:+18002092709" aria-label="call us at +18002092709"><button>Call Us Today!</button></a>
                    </div>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_water_22.jpg' alt='' />
                    </div>
                </div>

                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_water_23.jpg' alt='' />
                    </div>
                    <div className='para_content'>
                        <h3>Professional Water Damage Cleanup is crucial</h3>
                        <p>to prevent long-term issues such as mold growth and structural damage.</p>
                        <span>At Express Water Damage Cleanup, we utilize advanced techniques for water extraction, thorough drying, and restoring your property to its original state. Our environmentally friendly solutions ensure a safe and healthy living or working environment.</span>
                    </div>
                </div>

                <div className='para_container_2'>
                    <div className='para_content'>
                        <h3>We understand the urgency of water damage situations,</h3>
                        <p>and our dedicated team is committed to providing a rapid response.</p>
                        <span>Our professionals will arrive promptly at your location, fully equipped to handle the cleanup process efficiently. Throughout the entire restoration process, we maintain clear communication, keeping you informed of our progress and ensuring your satisfaction.</span>
                    </div>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_water_24.jpg' alt='' />
                    </div>
                </div>

                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_water_25.jpg' alt='' /> 
                    </div>
                    <div className='para_content'>
                        <span>Choose Express Water Damage Cleanup as your reliable partner for Water Damage Cleanup in Lake of the Ozarks, Branson, Waynesville, Saint Roberts, Cuba, Sullivan, Rolla and the surrounding areas. With our years of experience and attention to detail, we take pride in delivering exceptional service. Trust our team of experts to efficiently restore your property, allowing you to regain a safe and comfortable living or working space.</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default WaterDamage;