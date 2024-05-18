import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='left'>
                <p>Giới thiệu</p>
            </div>
            <div className='mid'>
                <p>Hỗ trợ khách hàng</p>
            </div>
            <div className='left'>
                <p>Chăm sóc khách hàng</p>
            </div>
        </div>
    );
}

export default Footer;
