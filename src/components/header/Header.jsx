import React, { useState } from 'react';
import './Header.scss';
import {HiMenu} from "react-icons/hi";
import Nav from "../Navbar/Nav";

const Header = () => {
    const [openMenu, setOpenMenu] = useState('closed')

    const openHandler = () => {
        setOpenMenu(openMenu === 'closed' ? 'opened' : 'closed')
    }
  return (
    <>
        <nav className={'container mx-auto my-4 flex justify-between items-center navbar'}>
            <div className={'text-2xl select-none logo-box'}>
        <span className={
            'bg-gray-900 rounded-md text-white px-3.5 py-2'
        }>Adolat</span><span className={'logo'}> Media</span>
            </div>

            <div className={'flex justify-around items-center bg-gray-900 text-white'}>
                <div className={'border-2 flex justify-around items-center'}>
                    <input
                        type={'text'}
                        className={'form-input search-input outline-0 border-0'}
                        placeholder={"Qidiruv"}
                        id={'searchBar'}
                    />
                </div>
                <button className={'bg-transparent'} onClick={openHandler}>
                    <HiMenu className={'text-4xl'}/>
                </button>
            </div>
        </nav>

        <Nav onClose={openHandler} cls={openMenu}/>
    </>
  )
}

export default Header