import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Authprovider from './provider/Authprovider.jsx';
import Sharetip from './Pages/Sharetip.jsx';
import Privateroute from './provider/Privateroute.jsx';
import Mytips from './Pages/Mytips.jsx';
import Browsetips from './Pages/Browsetips.jsx';
import Tipdetails from './Pages/Tipdetails.jsx';
import Updatetip from './Pages/Updatetip.jsx';
import Errorpage from './Pages/Errorpage.jsx';
import Explore from './Pages/Explore.jsx';
import Browsetips2 from './Pages/Browsetips2.jsx';
import Dashboard from './Pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'/login',
        Component:Login,
      },
        {
        path:'/signup',
        Component:Signup,
      },
           {
        path:'/browsetip2',
        hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
        loader:()=>fetch("https://gardening-server-nine.vercel.app/sharetip/public"),
        Component:Browsetips2,
      },
            {
        path:'/tipdetails/:id',
         hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
        loader:({params})=>fetch(`https://gardening-server-nine.vercel.app/sharetip/${params.id}`),
        element:(<Privateroute>
          <Tipdetails></Tipdetails>
        </Privateroute>),
      },
        {
        path:'/sharetip',
        element:(<Privateroute>
          <Sharetip></Sharetip>
        </Privateroute>),
      },
         {
        path:'/mytips',
         hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
        loader:()=>fetch("https://gardening-server-nine.vercel.app/sharetip"),

        element:(<Privateroute>
          <Mytips></Mytips>
        </Privateroute>),
      },
        {
        path:'/updatetip/:id',
        hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
         loader:({params})=>fetch(`https://gardening-server-nine.vercel.app/sharetip/${params.id}`),

        element:(<Privateroute>
          <Updatetip></Updatetip>
        </Privateroute>),
      },
      {
        path:'/explore',
        hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
        loader:()=>fetch("https://gardening-server-nine.vercel.app/gardener"),
        Component:Explore,
      },
         {
        path:'/dashboard',
        hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
         loader:()=>fetch("https://gardening-server-nine.vercel.app/sharetip"),
       
         element:(<Privateroute>
          <Dashboard></Dashboard>
        </Privateroute>),
         children:[
      {
        index:true,
        path:'dashboard/sharetip',
        Component:Sharetip,
      },
          {
        path:'dashboard/browsetip2',
        hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
        loader:()=>fetch("https://gardening-server-nine.vercel.app/sharetip/public"),
        Component:Browsetips2,
      },
           {
        path:'dashboard/mytips',
         hydrateFallbackElement:(<div className='flex justify-center items-center'>
          <span className="loading loading-spinner loading-lg "></span>
        </div>),
        loader:()=>fetch("https://gardening-server-nine.vercel.app/sharetip"),

        element:(<Privateroute>
          <Mytips></Mytips>
        </Privateroute>),
      },
    ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>

      <RouterProvider router={router} />

    </Authprovider>
   
  </StrictMode>,
)
