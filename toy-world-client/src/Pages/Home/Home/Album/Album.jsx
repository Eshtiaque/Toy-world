// import React from 'react';

import { Link } from "react-router-dom";

const Album = () => {
  return (

    <div>

      <div className=" p-3 mt-2 lg:hidden md:hidden d-block rounded-xl items-center h-full flex  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%);]">
        <div className='text-white space-y-7 pl-4  ps-7   '>
          <h2 className='text-6xl font-bold'>Lets Play!
            with Children</h2>
          <p className="text-xl">Give children toys that are powered by their imagination,<br /> not by batteries.They are Our next generation</p>
          <div className="grid">
            <Link to="/login"><button className='mb-3 btn w-3/4 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mr-5'>LOG-IN</button></Link>
            <Link to="/blogs"> <button className='w-3/4 text-white btn btn-secondary bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%);]'>BLOGS</button></Link>
          </div>
        </div>
      </div>



      <h1 className="text-center m-2 bg-black text-pink-300 p-4 font-black text-4xl rounded-full">Gallery Section</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-black mb-2">

        <div className="grid gap-4
         ">
          <div>

            <img className="h-auto max-w-full rounded-lg" src="https://c0.wallpaperflare.com/preview/394/177/139/couple-teddy-cute-love-bear.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/287/329/217/angry-birds-the-angry-birds-movie-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/1000/696/917/love-wallpaper-preview.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">

          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/830/742/448/toy-story-4-woody-animation-pixar-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/720/257/167/angry-birds-birds-movies-animated-movies-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/468/848/12/beauty-barbie-pretty-doll.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/89/899/627/doraemon-dorachan-anime-japan.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c0.wallpaperflare.com/preview/978/265/208/action-figures-art-boy-character.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/106/60/51/zootopia-judy-hopps-nick-wilde-orange-wallpaper-preview.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/606/588/925/love-gift-roses-bear-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/53/581/240/toys-baby-doll-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg mb-3" src="https://c4.wallpaperflare.com/wallpaper/364/883/580/rust-video-games-minimalism-grass-wallpaper-preview.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>


  );
};

export default Album;