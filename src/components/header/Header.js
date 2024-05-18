import React, { useEffect, useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import './header.css';

const Header = () => {
    // const [data, setData] = useState(null);
    const [text, setText] = useState("");
    // useEffect(() => {
    //     getData();
    // }, [])
    return (
        <div className='header'>
            <div className='logo'></div>
            <div className='search'>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            // getData();
                        }
                    }}
                    placeholder='Tìm kiếm sản phẩm...'
                />
                <button>
                    <FaSearch/>
                </button>
            </div>
            <div className='right'>
                <div className='sign'>
                    <IoMdPerson className='icons' />
                    <div className='text'>
                        <p>Đăng nhập / Đăng kí</p>
                        <div className='account'>
                            <p>Tài khoản của tôi </p><IoIosArrowDown />
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <IoCart className='icons' />
                    <p>Giỏ hàng</p>
                </div>
            </div>
        </div>
    );
}

export default Header;