import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='left'>
                <FaRegHeart />
                <IoMdPerson />
                <IoCart />
            </div>
        </div>
    );
}

export default Footer;
