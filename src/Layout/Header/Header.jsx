import React from 'react';
import {IoMdNotifications} from 'react-icons/io'
import HeaderSearch from "./HeaderSearch";
import noUser from '../../assets/noUser.png'
import {BiChevronsDown} from 'react-icons/bi'
import SwitchLang from "./SwitchLang/SwitchLang";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className='header__left'>
                        <Link to={'/'}>
                            <h1 className='header__title'>IT-RUN web</h1>
                        </Link>

                        <HeaderSearch/>
                    </div>
                    <div className='header__right'>
                        <span className='header__notif'>
                            <IoMdNotifications/>
                        </span>
                        <SwitchLang/>
                        <span className='header__user'>
                            <img className='header__user-photo' src={noUser} alt="User photo not found"/>
                            <span className='header__user-icon'>
                                <BiChevronsDown/>
                            </span>
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;