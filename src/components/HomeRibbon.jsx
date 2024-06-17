import React from 'react';
import { Link } from 'react-router-dom';

const HomeRibbon = () => {
    return (
        <div className='home_ribbon_container'>
            <div className='home_ribbon'>
                <div className='ribbon_content'>
                    <p>Restoration shouldn't be a nightmare!</p>
                    <span>We can your home or business back to the way it was…</span>
                </div>

                <Link className='ribbon_link' to="/contact">Free Consultation</Link>
            </div>
        </div>
    )
};

export default HomeRibbon;