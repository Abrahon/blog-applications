import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err=>console.log(err));
    }
    return (
      
        <div  className="border-b z-40 border-gray-200 shadow-md navbar sticky top-0   backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="navbar-start">
          <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>

              
              

              {/* Mobile navbar */}
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                
                  <li><Link to='/home'>Home</Link></li>
                  <li><Link to='/addblog'>AddBlog</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to='/blogcard'>BlogCard</Link></li>

              </ul>
             
          </div>
          <button className="text-3xl font-bold  ">PERSONAL BLOG</button>
          {/* <button className='btn mr-10 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 '>Personal Blog</button> */}





      </div>
      <div className="navbar-center hidden d-flex lg:flex">
        
          <ul className="flex justify-center items-center gap-5 px-1">
         


          <NavLink to='/home' className="font-bold color-black">
              Home</NavLink>
              <NavLink to='/addblog' className="font-bold color-black">
              AddBlog</NavLink>
              <NavLink to='/blog' className="font-bold color-black">
              MyBlog</NavLink>


 
          </ul>
        
       
       
      </div>
      <div className="navbar-end">
          {
              user?.uid ?
                  <button onClick={handleLogOut} className='btn max-w-sm mx-auto flex justify-center mr-10 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 '>Sign Out</button>
                  :
                  <Link to='/login'> <p className="btn max-w-sm mx-auto flex justify-center mr-10 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 animate-bounce">Login</p>
                  </Link>
          }


      </div>
  </div >
 
    );
};

export default Navbar;