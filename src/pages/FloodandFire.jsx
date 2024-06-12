import React from 'react';
import { Parallax } from 'react-parallax';
import { PiFireTruckFill } from "react-icons/pi";

const FloodAndFire = () => {
    const img = "https://express24plumbing.s3.ap-south-1.amazonaws.com/w_fire_19.jpg";

    return (
        <>
            <div>
                <Parallax bgImage={ img } strength={300} bgImageAlt="parallaximg" blur={1}>
                    <div className='ParallaxContainer1'>
                        <div className="ParallaxDiv">
                            <div className='ParallaxPageContent'>
                                <div className='parallax_icon_c'><PiFireTruckFill /></div>
                                <h2>Flood & Fire Restoration</h2>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

            <div className='para_container'>
                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_flood_16.jpg' alt='' />
                    </div>
                    <div className='para_content'>
                        <h3>Express Water Damage Cleanup</h3>
                        <p>Express Water Damage Cleanup is your trusted partner for comprehensive Flood & Fire Restoration services.</p>
                        <span>We understand the devastating impact that floods and fires can have on your property, leaving behind extensive damage and disruption. With our expertise and swift response, we are committed to restoring your home or business to its pre-disaster condition, ensuring a smooth recovery process.</span>
                    </div>
                </div>

                <div className='para_container_2'>
                    <div className='para_content'>
                        <span>Our highly skilled team of restoration specialists is equipped with the knowledge and cutting-edge technology to handle the complexities of flood and fire damage. We recognize that each situation is unique, and our experts will conduct a thorough assessment of the affected areas to develop a tailored restoration plan. From water extraction and drying to smoke and odor removal, we address all aspects of the restoration process with precision and efficiency.</span>
                        <a href="tel:+18002092709" aria-label="call us at "><button>Call Us Today!</button></a>
                    </div>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_flood_20.jpg' alt='' />
                    </div>
                </div>

                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_fire_12.jpg' alt='' />
                    </div>
                    <div className='para_content'>
                        <h3>Professional Flood & Fire Restoration is of utmost importance when dealing with the aftermath of a disaster.</h3>
                        <span>Without proper remediation, lingering moisture, soot, and smoke residue can lead to further damage and health hazards. Our team follows industry best practices and utilizes advanced techniques to mitigate the effects of floods and fires effectively. We are dedicated to restoring your property to its pre-loss condition, ensuring a safe and comfortable living or working environment.</span>
                    </div>
                </div>

                <div className='para_container_2'>
                    <div className='para_content'>
                        <h3>At Express Water Damage Cleanup</h3>
                        <p>we prioritize timely response and clear communication.</p>
                        <span>We understand the urgency in these situations and act swiftly to minimize secondary damage and prevent further complications. Our team works diligently to remove standing water, dry affected areas, and eliminate smoke and odor, while keeping you informed throughout the entire restoration process. We aim to alleviate your stress and provide peace of mind during this challenging time.</span>
                    </div>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_fire_17.jpg' alt='' />
                    </div>
                </div>

                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_fire_18.jpg' alt='' />
                    </div>
                    <div className='para_content'>
                        <span>With years of experience and a track record of successful restorations, Express Water Damage Cleanup is the go-to choice for Flood & Fire Restoration in Lake of the Ozarks, Branson, Waynesville, Saint Roberts, Cuba, Sullivan, Rolla and the surrounding areas. We are committed to delivering exceptional results and customer satisfaction. By choosing our services, you gain a trusted partner dedicated to restoring your property efficiently and effectively. When disaster strikes, count on Express Water Damage Cleanup to handle your flood and fire restoration needs with expertise and compassion.</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default FloodAndFire;