import React from 'react';
import { Parallax } from 'react-parallax';
import { FaBacteria } from "react-icons/fa";

const Mold = () => {
    const img = "https://express24plumbing.s3.ap-south-1.amazonaws.com/w_mold_6.jpg";
    return (
        <>
            <div>
                <Parallax bgImage={ img } strength={300} bgImageAlt="parallaximg" blur={2}>
                    <div className='ParallaxContainer1'>
                        <div className="ParallaxDiv">
                            <div className='ParallaxPageContent'>
                                <div className='parallax_icon_c'><FaBacteria /></div>
                                <h2>Mold Remediation</h2>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

            <div className='para_container'>
                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_mold_7.png' alt='' />
                    </div>
                    <div className='para_content'>
                        <h3>At Express Water Damage Cleanup</h3>
                        <p>we offer comprehensive mold remediation services to address one of the most common and potentially hazardous consequences of water damage.</p>
                        <span>Mold growth can occur rapidly in damp environments, posing serious health risks and compromising the structural integrity of your property. With our expertise and cutting-edge techniques, we are dedicated to eliminating mold infestations and restoring a healthy living or working environment.</span>
                    </div>
                </div>

                <div className='para_container_2'>
                    <div className='para_content'>
                        <span>Mold can be a silent threat, often hiding behind walls, under carpets, or in other hard-to-reach areas. Our highly trained mold remediation specialists have the knowledge and experience to identify the presence of mold, even in its early stages. We utilize advanced testing methods and industry-leading equipment to accurately assess the extent of the mold problem, allowing us to tailor our remediation strategies accordingly.</span><br />
                        <a href="tel:+18002092709" aria-label="call us at "><button>Call Us Today!</button></a>
                    </div>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_mold_7.jpg' alt='' />
                    </div>
                </div>

                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_mold_8.jpg' alt='' />
                    </div>
                    <div className='para_content'>
                        <span>The importance of professional mold remediation cannot be overstated. Mold spores can easily spread throughout your property, exacerbating allergies and respiratory issues for occupants. Attempting to remove mold without proper training and equipment can lead to ineffective results and further contamination. Our team follows strict industry guidelines and employs proven techniques to not only remove existing mold but also prevent future growth, ensuring a safe and healthy environment for you and your loved ones.</span>
                    </div>
                </div>

                <div className='para_container_2'>
                    <div className='para_content'>
                        <h3>When you choose Express Water Damage Cleanup</h3>
                        <p>for mold remediation, you can expect a comprehensive and personalized approach.</p>
                        <span>Our team will work closely with you to develop a customized remediation plan that suits your specific needs. We understand the urgency of mold removal and will prioritize your project to provide timely solutions that minimize disruption to your daily life or business operations. With our meticulous attention to detail, we leave no corner unchecked, ensuring thorough and effective mold removal.</span>
                    </div>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_mold_9.jpg' alt='' />
                    </div>
                </div>

                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/w_mold_10.jpg' alt='' />
                    </div>
                    <div className='para_content'>
                        <span>Our commitment to quality and customer satisfaction sets us apart as a trusted provider of mold remediation services  in Lake of the Ozarks, Branson, Waynesville, Saint Roberts, Cuba, Sullivan, Rolla and the surrounding areas. We prioritize communication and transparency, keeping you informed throughout every step of the process. Our goal is not only to eradicate mold but also to provide long-term solutions that help prevent future occurrences. By hiring Express Water Damage Cleanup for mold remediation, you can rest assured that your property is in capable hands, and the health and safety of your loved ones or employees are our top priority.</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Mold;