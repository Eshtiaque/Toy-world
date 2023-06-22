// import React from 'react';
// import Left from "./Left";
// import Right from "./Right";

//import{ img } from "../../../../../assets/Panda/panda/couple-teddy-cute-love-bear.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

const Aos = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
              <h1 className="text-center m-2 bg-black text-pink-300 p-4 font-black text-4xl rounded-full">Aos Section !</h1>
             <div className='grid grid-cols-2 text-center font-black text-black mt-5 mb-5 '>
            
            <div data-aos="flip-down">
                <img className='w-full' src="https://i.ibb.co/FqQHvFN/minions-cartoon-watermarked-despicable-me-wallpaper-preview.jpg" alt="" />
            </div>
            <div data-aos="flip-up">
                <img className='w-full'  src="https://i.ibb.co/5FR5P18/woody-toy-story-4-wallpaper-preview.jpg"  alt="" />
            </div>
            <div data-aos="flip-down">
                <img className='w-full'  src="https://i.ibb.co/QCqhKf8/barbie-doll-waving-wave-hello-blonde.jpg"alt="" />
            </div>
            <div data-aos="flip-up">
                <img className='w-full'  src="https://i.ibb.co/kqv37W7/love-gift-roses-bear-wallpaper-preview.jpg" alt="" />
            </div>
            <div data-aos="flip-down">
                <img className='w-full'  src="https://i.ibb.co/C1ZnH3f/toy-teddy-bear-backgrounds-christmas-download-3840x2400-toy-wallpaper-preview.jpg"  alt="" />
            </div>
            <div data-aos="flip-up">
                <img className='w-full' src="https://i.ibb.co/r2gzh6y/teddy-bear-bear-bears-stuffed-animal.jpg" alt="" />
            </div>
          
        </div>
        </div>
      


       
    );
};

export default Aos;