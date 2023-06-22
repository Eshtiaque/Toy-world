// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../../assets/icons/3082060.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "../../../Firebase/firebase.config";
// import { useState } from "react";


const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="bg-black lg:p-80 p-40">

      <div className="radial-progress text-red-600" style={{ "--value": 80 }}>Loading............................................80%</div>

    </div>
  }


  // const { signIn } = useContext(AuthContext);

  const auth = getAuth(app);
  // const googleProvider = new GoogleAuthProvider();
  console.log(user);
  const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/allToys">All Toys</Link></li>
    <li><Link to="/myToys">My Toys</Link></li>
    <li><Link to="/addToy">Add a Toys</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>

  </>


  const handleLogOut = () => {
    logOut(auth)
      .then(result => { result })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="navbar bg-black text-pink-200  h-24">
      <div className="navbar-start">
        <div className="dropdown text-pink-300">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          
          <ul tabIndex={0} className="menu menu-compact text-pink-400 dropdown-content mt-3 p-2 shadow bg-black  rounded-box w-52">
            {navItems}
            <li><a></a></li>
          </ul>
          
        </div>
        
        <div>
          <Link to="/" className=" text-xl"><img className=" h-20 w-20" src={logo} alt="" /></Link>
        </div>
        <h2 className="font-black text-pink-500">{"Toy's World"}</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ?
            <span className="flex">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <img  src={user.photoURL} alt="" />
                </div>
              </div>

              <div className="ps-4 mt-2">
                <button onClick={handleLogOut} className="btn btn-outline btn-secondary">Sign Out</button>
              </div>

            </span>

            :

            <span className="flex">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&usqp=CAU" alt="" />
                </div>
              </div>

              <div className="ps-4 mt-2">
                <Link to="/login">  <button className="btn btn-outline btn-secondary">Sign In</button></Link>
              </div>

            </span>
        }



      </div>
    </div>
  );
};

export default Navbar;