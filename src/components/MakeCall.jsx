import React from 'react';
import { SlCallOut } from "react-icons/sl";

const MakeCall = () => {
    return (
        <>
            <a href='tel:800-209-2709' aria-label='call us at 800-209-2709'>
                <span className='makeCall_icon'><SlCallOut /></span>
            </a>
        </>
    )
};

export default MakeCall;