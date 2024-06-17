import { useEffect, useState } from 'react';
import {slides} from '../data/Slider.json';

const HomeSlider = () => {
    const img1 = "https://express24plumbing.s3.ap-south-1.amazonaws.com/w_fire_29.jpg";
    const img2 = "https://express24plumbing.s3.ap-south-1.amazonaws.com/w_flood_20.jpg";
    const img3 = "https://express24plumbing.s3.ap-south-1.amazonaws.com/w_fire_13.jpg";
    const img4 = "https://express24plumbing.s3.ap-south-1.amazonaws.com/w_mold_9.jpg";
    const [heroCount, setHeroCount] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setHeroCount((count) => (count === 3 ? 0 : count + 1));
                setIsFading(false);
            }, 300);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const imagesArray = [img1, img2, img3, img4];

    return (
        <>
            <div className='hero_slider'>
                <img src={imagesArray[heroCount]} alt='' className={`slider_img ${isFading ? 'fade' : ''}`} />
                <div className={`hero_text ${isFading ? 'fade' : ''}`}>
                    <h1>{slides[heroCount]?.heading || ''}</h1>
                    <h2>{slides[heroCount]?.subHeading || ''}</h2>
                    <span>{slides[heroCount]?.Desc || ''}</span>
                </div>

                <div className='hero_dot_play'>
                    <ul className='hero_dots'>
                        {imagesArray.map((_, index) => (
                            <li
                                key={index}
                                onClick={() => setHeroCount(index)}
                                className={heroCount === index ? "hero_dot hero_dot_active" : "hero_dot"}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default HomeSlider;