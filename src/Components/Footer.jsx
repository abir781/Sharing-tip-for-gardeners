import React from 'react';
import { Facebook,  Instagram,  Youtube } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-green-700 py-15'>
            <div className='flex flex-col gap-5 lg:flex-row lg:justify-between items-center w-11/12 mx-auto border-b border-white pb-20'>
                <div>
                <h1 className='text-3xl font-bold text-white'>NearEvents</h1>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-white'>Follow Us</h2>
                    <div className='flex gap-5'>
                    <a href="https://www.facebook.com/profile.php?id=61554893068010" target="_blank">
                    <Facebook color="#01ACFF" />
                    </a>
                    
                     <a href="https://www.instagram.com/abirhasan7691/" target="_blank">
                     <Instagram color='#ff0059' />
                       </a>
                      <a href="https://www.youtube.com/@WhateverComestoMind-qk2nl" target="_blank">
                      <Youtube color="#ff0000" />

                       </a>

                    </div>
                 
                </div>
                <div>
                       <h1 to="/contact" className='text-2xl font-bold text-white text-center'>Contact Us</h1>
                       <h2 className='text-xl font-bold text-white text-center'>Mobile: 01871917336</h2>
                        <h2 className='text-xl font-bold text-white text-center'>Email: hasan.abir3176@gmail.com</h2>
                       

                </div>
            </div>
            <div className='flex gap-5 text-center justify-center items-center pt-10'>
                <a className='text-white text-2xl font-bold' href="">Privacy Policy</a>
                <a className='text-white text-2xl font-bold' href="">Terms and Conditions</a>
            </div>
          
            
        </div>
    );
};

export default Footer;