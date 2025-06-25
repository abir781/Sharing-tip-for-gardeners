import React, { use, useState } from 'react';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { auth, Authcontext } from '../provider/Authprovider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signup = () => {
    const [showp,setshowp]=useState(false);
     const provider = new GoogleAuthProvider();
    const {createuser,setuser,updateuser}=use(Authcontext);
    const navigate=useNavigate();
     const handlesignup=(e)=>{
            e.preventDefault();
            console.log(e.target)
            const name=e.target.name.value;
            const photo=e.target.photo.value;
            const email=e.target.email.value;
            const password=e.target.password.value;
            console.log(name,photo,email,password);
            const passwordregexp=/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}/;
            if(passwordregexp.test(password)===false){
              toast.warning("Password must be  8 characters and include 1 uppercase, 1 lowercase, and a special character.");
              return;
            }
            createuser(email,password)
             .then((result)=>{
                const user=result.user;
                // console.log(user);
                // setuser(user);
                toast.success("Register Successfull");
                // console.log(user)
                updateuser({displayName:name,photoURL:photo}).then(()=>{
                  setuser({...user,displayName:name,photoURL:photo});
                  navigate("/");
                })
                .catch((error) => {
                  console.log(error);
                  setuser(user);
                });
                
             })
             .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.warning(errorMessage);
                // ..
              });
    
        }

        const handlegooglesignin=()=>{
                  signInWithPopup(auth,provider)
                     .then((result)=>{
                      
                      toast.success("Login successfull");
                       navigate("/");
                     
                     })
                     .catch((error)=>{
                       toast.warning(error.message);
                     })
                 }
    return (
        <div className='flex justify-center min-h-screen items-center'>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Signup</h2>
               <form onSubmit={handlesignup} className="card-body">
                <fieldset className="fieldset">
               
                      {/* name */}
                 <label className="label">Name</label>
                   <input type="text" name='name' className="input" placeholder="Name" required />
                            {/* PhotoUrl */}
                 <label className="label">Photo URL</label>
                   <input type="text" name='photo' className="input" placeholder="Photo URL" required />
                   {/* email */}
                 <label className="label">Email</label>
                   <input type="email" name='email' className="input" placeholder="Email" required />
                   {/* password */}
                 <label className="label">Password</label>
                 <div className='relative'>
                    <input type={showp ?"text":"password"} name='password' className="input" placeholder="Password" required />
                    <div onClick={()=>setshowp(!showp)} className='btn btn-xs absolute top-2 right-6'>{showp ? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</div>
       
                 </div>
                   
            
            <button type='submit' className="btn btn-neutral mt-4">Signup</button>
            <p className='font-semibold text-center pt-5'>Already Have An Account ?
              <Link className='text-red-500' to="/login">Login</Link> </p>
              
          </fieldset>
       
          <p className='text-center font-semibold'>Or</p>
        <div onClick={handlegooglesignin} className='border border-black py-2 font-semibold cursor-pointer flex items-center justify-center gap-2'><FcGoogle />Continue With Google</div>
          
        </form>
        
       </div>
              
          </div>
    );
};

export default Signup;