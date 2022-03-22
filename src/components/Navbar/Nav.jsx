import React from 'react';
import {BiWindowClose} from "react-icons/bi";
import './Nav.scss';

const Nav = ({onClose, cls}) => {
    return (
        <div className={`navmenu ${cls}`}>
            <div className={'container mx-auto'}>
                <div className={'flex justify-between'}>
                    <>&nbsp;</>
                    <button onClick={onClose}><BiWindowClose /></button>
                </div>
            </div>
        </div>
    );
};

export default Nav;