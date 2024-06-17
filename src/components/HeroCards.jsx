import { Link } from 'react-router-dom';

const HeroCards = () => {
    return (
        <div className='hero_cards'>
            <div className='hero_card'>
                <div className='hero_thumb'></div>
                <div className='hero_card_info'>
                    <h3>Water Damage Cleanup</h3>
                    <p>At Express Water Damage Cleanup, we utilize advanced techniques for water extraction, thorough drying, and restoring your property to its original state. Our environmentally friendly solutions ensure a safe and healthy living or working environment.</p>
                    <span><Link to="/waterdamage">Learn More</Link></span>
                </div>
            </div>
        </div>
    )
};

export default HeroCards;