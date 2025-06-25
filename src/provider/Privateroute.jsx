import React, { use } from 'react';
import { Authcontext } from './Authprovider';
import { Navigate, useLocation } from 'react-router';

const Privateroute = ({children}) => {
    const {user,loading}=use(Authcontext);
    
    // console.log(user)
    const location=useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Privateroute;