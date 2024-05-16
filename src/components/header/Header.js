import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'></div>
            <div className='search'></div>
            <div className='right'>
                <FaRegHeart />
                <IoMdPerson />
                <IoCart />
            </div>
        </div>
    );
}

export default Header;