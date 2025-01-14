import { GiPoisonGas } from "react-icons/gi";
import { Parallax } from 'react-parallax';
import { Helmet } from 'react-helmet';

const Radon = () => {
    const img = "https://express24plumbing.s3.ap-south-1.amazonaws.com/radon_gas_2.webp";
    return (
        <>
            <Helmet>
                <title>Radon Mitigation | Express 24 Water Damage and Cleanup</title>
                <meta name="description" content="Express Water Damage Cleanup is your trusted partner for Radon Mitigation Services." />
                <meta name='keywords' content='About Express Radon Mitigation Services' />
            </Helmet>

            <div>
                <Parallax bgImage={ img } strength={300} bgImageAlt="parallaximg" blur={1}>
                    <div className='ParallaxContainer1'>
                        <div className="ParallaxDiv">
                            <div className='ParallaxPageContent'>
                                <div className='parallax_icon_c'><GiPoisonGas /></div>
                                <h2>Radon Mitigation</h2>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

            <div className='para_container'>
                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/radon_1.webp' alt='How Radon Enters a House' />
                    </div>
                    <div className='para_content'>
                        <h3>How Radon Enters a House</h3>
                        <span>Radon is a naturally occurring radioactive gas that can seep into homes through cracks in the foundation, gaps around pipes, and even through the water supply. This invisible and odorless gas is released from the soil beneath buildings and accumulates indoors, especially in areas with poor ventilation. During water damage cleanup, understanding these entry points becomes crucial. At Express Water Damage Cleanup, we identify these vulnerabilities and take measures to prevent radon infiltration, ensuring a safer indoor environment.</span>
                    </div>
                </div>

                <div className='para_container_2'>
                    <div className='para_content'>
                        <h3>What Radon Gas Does</h3>
                        <span>Radon poses serious health risks as prolonged exposure can damage lung tissue and increase the likelihood of developing lung cancer. It is recognized as a leading cause of lung cancer among non-smokers. The threat is invisible, odorless, and tasteless, making detection and mitigation vital. Express Water Damage Cleanup emphasizes the importance of testing for radon during water damage restoration, as elevated levels often go unnoticed but can severely impact the health and safety of your home.</span><br />
                        <a href="tel:+18002092709" aria-label="call us at +18002092709"><button>Call Us Today!</button></a>
                    </div>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/radon_2.webp' alt='What Radon Gas Does' />
                    </div>
                </div>

                <div className='para_container_1'>
                    <div className='para_image'>
                        <img src='https://express24plumbing.s3.ap-south-1.amazonaws.com/venting.png' alt='' />
                    </div>
                    <div className='para_content'>
                        <h3>How to Mitigate Radon Gas</h3>
                        <span>Radon mitigation involves reducing radon levels to safe standards by addressing its entry points and improving indoor air quality. Effective strategies include sealing foundation cracks, improving ventilation, and installing specialized radon mitigation systems. <strong>Express Water Damage Cleanup</strong> provides comprehensive radon mitigation services, including identifying entry points, sealing cracks, and installing venting systems to safely remove radon from your home. By incorporating these services into our water damage restoration process, we ensure your home is not only free from water damage but also safeguarded from the harmful effects of radon. Our holistic approach creates a healthier and safer living space for you and your family.</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Radon;