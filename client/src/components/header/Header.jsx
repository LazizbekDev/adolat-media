import React, { useState } from 'react';
import './Header.scss';
import {HiMenu} from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';
import Nav from "../Navbar/Nav";
import Input from "../searchbar/Input";

const Header = () => {
    const [openMenu, setOpenMenu] = useState('closed')

    const openHandler = () => {
        setOpenMenu(openMenu === 'closed' ? 'opened' : 'closed')
    }
  return (
    <div className={'bg-gray-100 text-white shadow-lg w-full navbar navbar-expand-lg'}>
        <nav className={'container mx-auto my-4 flex md:justify-between justify-around items-center'}>
            <div className={'text-2xl select-none logo-box relative'}>
                <span className={'bg-gray-900 rounded-md text-white px-3.5 py-2'}>
                    Adolat
                </span>
                <span className={'logo relative z-40 text-gray-900'}>Media</span>
            </div>

            <div className={'md:w-3/12 w-auto flex items-center justify-between'}>
                <div className={'md:block hidden mr-2 logo-box'}>
                    <Input
                        type={'text'}
                        placeholder={'Qidiruv'} />
                </div>

                <button className={'rounded-md items-center bg-gray-900 text-white logo-box'} onClick={openHandler}>
                    {openMenu === 'closed' ? <HiMenu className={'text-4xl text-white p-2'}/>
                    : <AiOutlineClose className={'text-4xl text-white p-2'} />}
                </button>
            </div>
        </nav>

        <Nav cls={openMenu}/>
    </div>
  )
}

export default Header