import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from 'react-router-dom'
import HomeAside from "../components/HomeAside/HomeAside";

const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <div className="content">
                        <HomeAside/>
                        <Outlet/>
                    </div>
                </div>
            </main>
            <Footer/>

        </div>
    );
};

export default Layout;