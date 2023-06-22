// import React from 'react';

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel mt-1 w-full">
            <hr className="white"></hr>
            <div id="slide1" className="carousel-item relative w-full">
                <img className="w-full"  src="https://i.ibb.co/ZMKWnpj/1bear-bench-child-children-toys.jpg" 
                />
                <div className="absolute rounded-xl items-center h-full flex  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%);]">
     <div className='text-white space-y-7 w-3/4 pl-4  ps-7   '>
                        <h2 className='text-8xl md:text-6xl font-bold hidden md:block lg:block'>Let<span className="text-pink-500">&#39;</span>s <span className="text-pink-500">Play </span>!
                        with Children</h2>
                        <p className="hidden md:hidden lg:block text-xl">Give children toys that are powered by their imagination,<br/> not by batteries.They are Our next generation</p>
                        <div >
                            <Link to="/login"><button className='text-lg w-3/4 mb-3 hidden  md:block  lg:block btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mr-5'>LOG-IN</button></Link>
                           <Link to="/blogs"> <button className='text-lg w-3/4 hidden  md:block  lg:block btn btn-outline btn-secondary'>BLOGS</button></Link>
                        </div>
                    </div>
                </div>
            
            </div>

        </div>
    );
};

export default Banner;
