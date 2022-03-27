import React from 'react';
import './Input.scss';

const Input = ({placeholder, type}) => {
    return (
        <div className={''}>
            <input
                className={'search-input select-none rounded-md text-gray-900 w-full'}
                type={type}
                placeholder={placeholder} />
        </div>
    );
};

export default Input;