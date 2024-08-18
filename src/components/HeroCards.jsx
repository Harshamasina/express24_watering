import { Link } from 'react-router-dom';

const HeroCards = () => {
    return (
        <div>
            <div className='hero_desc'>
                <h2>Locally Owned and Operated</h2>
                <span>We charge by the job not by the hour!</span>
            </div>

            <div className='hero_cards'>
                <div className='hero_card'>
                    <div className='hero_thumb_1'></div>
                    <div className='hero_card_info'>
                        <h3>Water Damage Cleanup</h3>
                        <p>At Express Water Damage Cleanup, we utilize advanced techniques for water extraction, thorough drying, and restoring your property to its original state. Our environmentally friendly solutions ensure a safe and healthy living or working environment.</p>
                        <span><Link className="link_button" to="/waterdamage" aria-label='Click to know about Express 24 Water Damage Cleanup Services'>Learn More</Link></span>
                    </div>
                </div>

                <div className='hero_card'>
                    <div className='hero_thumb_3'></div>
                    <div className='hero_card_info'>
                        <h3>Flood and Fire Restoration</h3>
                        <p>Our team works diligently to remove standing water, dry affected areas, and eliminate smoke and odor, while keeping you informed throughout the entire restoration process. We aim to alleviate your stress and provide peace of mind during this challenging time.</p>
                        <span><Link className="link_button" to="/floodandfire" aria-label='Click to know about Express 24 FLood and Flood Restoration'>Learn More</Link></span>
                    </div>
                </div>

                <div className='hero_card'>
                    <div className='hero_thumb_2'></div>
                    <div className='hero_card_info'>
                        <h3>Mold Remediation</h3>
                        <p>We understand the urgency of mold removal and will prioritize your project to provide timely solutions that minimize disruption to your daily life or business operations. With our meticulous attention to detail, we leave no corner unchecked, ensuring thorough and effective mold removal.</p>
                        <span><Link className="link_button" to="/mold" aria-label='Click to know about Express 24 Mold Remediation '>Learn More</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroCards;