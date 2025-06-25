import React, { use, useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { Authcontext } from '../provider/Authprovider';
import { toast } from 'react-toastify';

const Navbar = ({dark,setdark}) => {
    const {user,logout}=use(Authcontext);
    const [open,setopen]=useState(false);
    const [openl,setopenl]=useState(false);
      const handlelogout=()=>{
            
            logout().then(()=>{
                toast.success("User logged out successfully");
                setopenl(!openl)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    return (
        <div className=''>
        <div className='flex items-center justify-between py-4  w-11/12 mx-auto'>
            <div className='flex items-center gap-2'>
                <Menu onClick={()=>setopen(!open)} className='md:hidden text-green-500'></Menu>
                <ul className={`md:hidden bg-green-500 text-white absolute duration-500 z-10 ${open?'top-14':'-top-40'}`}>
                    <li className='px-2 py-1'><NavLink className={({isActive})=>(isActive?'font-bold ':'')} to="/">Home</NavLink></li>
                    <li className='px-2 py-1 '><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/sharetip">Share a Garden Tip</NavLink></li>
                    <li className='px-2 py-1 '><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/browsetip">Browse Tips</NavLink></li>
                    <li className='px-2 py-1 '><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/explore">Explore Gardeners</NavLink></li>
                    <li className='px-2 py-1 '><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/mytips">My Tips </NavLink></li>
                    
                </ul>
                
                <img src="/logogarden.png" className='w-15' alt="" />
                <button onClick={()=>setdark(!dark)} className='bg-green-700 py-2 px-4 rounded-2xl text-white'>{dark?'light':'dark'}</button>

              

            </div>
            <div>
                <ul className='hidden md:flex md:gap-5 text-green-700'>
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold ':'')} to="/">Home</NavLink></li>
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/sharetip">Share a Garden Tip</NavLink></li>
                     <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/browsetip">Browse Tips</NavLink></li>
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/explore">Explore Gardeners</NavLink></li>
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/mytips">My Tips </NavLink></li>
                   
                </ul>

            </div>
            <div className='flex items-center gap-3'>
                <div>
                    {/* <img className='w-12  rounded-full' src={`${user ? user.photoURL:""}`} title={`${user?user.displayName:""}`} alt="" /> */}
                   {/* <p className='text-white'>{user && user.email}</p>  */}
                </div>
                <div className='flex gap-5 items-center'>
                    {/* {
                        user?   <button  className='md:py-4 md:px-8 py-2 px-4  md:mr-0 bg-orange-500 text-white font-bold '>Log Out</button>:<Link to="/login" className='md:py-4 md:px-8 py-2 px-4  md:mr-0 bg-orange-500 text-white font-bold '>Login</Link>
                    } */}
                    <div>

                        <Link to="/signup" className='md:py-3 md:px-6 py-2 px-4  md:mr-0 bg-green-500 rounded-2xl text-white font-bold h-fit'>SignUp</Link>

                    </div>

                    <div>

                         {user ? "": <Link to="/login" className='md:py-3 md:px-6 py-2 px-4  md:mr-0 bg-green-500 rounded-2xl text-white font-bold '>Login</Link>}

                    </div>
                    
                   
                   

                     <div>
                        
                    <img className='w-12  rounded-full' onClick={()=>setopenl(!openl)} src={`${user ? user.photoURL:""}`} title={`${user?user.displayName:""}`} alt="" />
                    {openl? <button onClick={handlelogout} className=' py-1 px-2  md:mr-0 bg-green-500 rounded-2xl text-white font-bold z-10'>Logout</button>:""}
                    

                   {/* <p className='text-white'>{user && user.email}</p>  */}
                </div>

                

                </div>

                

            </div>
            
        </div>

        </div>
    );
};

export default Navbar;