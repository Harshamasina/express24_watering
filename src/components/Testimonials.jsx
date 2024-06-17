import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { testimonials } from "../data/Testimonials.json";
import Quote from '../assets/blockquote.svg';

const Testimonials = () => {
    return (
        <div className='testimonial_container'>
            <div className='title'>
                <h6>Testimonial</h6>
                <p>What members are saying</p>
            </div>

            <div className='slider_container'>
                <blockquote>
                    <img className="top-quote quote" src={Quote} alt="quote" />
                    <img className="bottom-quote quote" src={Quote} alt="quote" />
                </blockquote>

                <Splide
                    options={{
                        perPage: 1,
                        autoplay: true,
                        speed: 1000,
                        rewind: true,
                        rewindByDrag: true,
                    }}
                >
                    {
                        testimonials && testimonials.map((review, index) => (
                            <SplideSlide key={index}>
                                <img className='review_img' src={review.img} alt='' />
                                <div className='content'>
                                    <p className='text'>{review.text}</p>
                                    <div className="info">
                                        <div className="rating">
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9734;</span>
                                        </div>
                                        <p className="user">{review.name}</p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
        </div>
    )
};

export default Testimonials;