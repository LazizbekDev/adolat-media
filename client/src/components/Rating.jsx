import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import PropTypes from "prop-types";

const Rating = ({ value, text }) => {
    return (
        <div style={{marginTop: -5}}>
            <span className={'text-gray-500 tracking-tighter break-normal'} style={{fontSize: 10}}>
                {text && text}
            </span>
            <div className={'flex'}>
            <span>
                {value >= 1 ? <BsStarFill /> : value >= 0.5 ? <BsStarHalf /> : <BsStar />}
            </span>
                <span>
                {value >= 2 ? <BsStarFill /> : value >= 1.5 ? <BsStarHalf /> : <BsStar />}
            </span>
                <span>
                {value >= 3 ? <BsStarFill /> : value >= 2.5 ? <BsStarHalf /> : <BsStar />}
            </span>
                <span>
                {value >= 4 ? <BsStarFill /> : value >= 3.5 ? <BsStarHalf /> : <BsStar />}
            </span>
                <span>
                {value >= 5 ? <BsStarFill /> : value >= 4.5 ? <BsStarHalf /> : <BsStar />}
            </span>
            </div>
        </div>
    );
};

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default Rating;