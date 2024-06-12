import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { BiSolidUpArrowSquare } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    };
    
    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll > heightToHidden){
            setIsVisible(true);
        }else{
           setIsVisible(false); 
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    },[])

    return (
        <>
            <div className="goToTop_icon" onClick={goToBtn}>
                {isVisible && (<BsFillArrowUpCircleFill />)}
            </div>
        </>
    )
};

export default GoToTop;