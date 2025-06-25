import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Root.css'

const Root = () => {
    const [dark,setdark]=useState(false);
    return (
        <div className={` ${dark && "dark"}`}>
            <Navbar dark={dark} setdark={setdark}></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;