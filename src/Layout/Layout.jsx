import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Navigate, Outlet, useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";

const Layout = () => {


    const {user} = useSelector((store) =>  store.user)


    return (
        <div>
            <Header/>
            <main>
                  <Outlet/>
            </main>
            <Footer/>

        </div>
    );
};

export default Layout;