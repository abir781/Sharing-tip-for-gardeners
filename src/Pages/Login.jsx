import React, { use, useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { auth, Authcontext } from '../provider/Authprovider';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {

  

  const {signin,setuser}=use(Authcontext);
  const location=useLocation();
  const navigate=useNavigate();
  const provider = new GoogleAuthProvider();

  const emailref=useRef();
   const handlelogin=(e)=>{
        e.preventDefault()
        
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        signin(email,password).then((result)=>{
          const user=result.user;
          console.log(user);
          toast.success('Login Successfull');
          
          navigate(`${location.state?location.state:"/"}`);
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
                      console.log(result);
                      
                      toast.success("Login successfull");
                      navigate("/");
                     
                     })
                     .catch((error)=>{
                      toast.warning(error.message);
                     })
                 }
  
    return (
        <div className="bg-[url('/rain2.jpg')] bg-cover bg-center h-screen w-full">
            <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl py-5 ">
              <h2 className='font-bold text-2xl text-center'>Login your account</h2>
             <form onSubmit={handlelogin} className="card-body">
              <fieldset className="fieldset">
               <label className="label">Email</label>
                 <input type="email" ref={emailref} name='email' className="input" placeholder="Email" required />
               <label className="label">Password</label>
                  <input type="password" name='password' className="input" placeholder="Password" required />
          <div>
            <a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center pt-5'>Don't Have An Account ?
            <Link className='text-red-500' to="/signup">Signup</Link> </p>
        </fieldset>

        <p className='text-center font-semibold'>Or</p>
  <div onClick={handlegooglesignin} className='border border-black py-2 font-semibold cursor-pointer flex items-center justify-center gap-2'><FcGoogle />Login With Google</div>
    
       
      </form>

  
    </div>
      
            
        </div>
        </div>
    );
};

export default Login;