// import React from 'react';

import { Link } from "react-router-dom";

const Section = () => {
    return (
        <div>
            <h1 className="text-center m-2 bg-black text-pink-300 p-4 font-black text-4xl rounded-full">Exclusive Offer !</h1>
    <div className="hero min-h-scree bg-black mt-1 mb-1 rounded text-white ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/MVkQCkf/photo-1608977004948-488cf29a48f6-MConverter-eu.png" className=" rounded-lg shadow-2xl h-100" />
                    <img src="https://i.ibb.co/MVkQCkf/photo-1608977004948-488cf29a48f6-MConverter-eu.png" className="max-w-sm rounded-lg shadow-2xl h-60 " />

                    <div>
                        <h1 className="text-5xl font-bold ">Get your <span className="text-pink-400 underline  underline-offset-8"><Link to="/offer">Offer</Link></span> easily !</h1>
                        <p className="py-6">The Cell-toy Panda is not your ordinary stuffed animal. With its innovative design and interactive features, this adorable panda toy brings a whole new level of fun and companionship. Perfect for children and adults alike, the Cell-toy Panda combines the charm of a traditional plush toy with cutting-edge technology, making it an ideal companion for playtime and relaxation.
                            <br />
                            The Cell-toy Panda combines the charm of a classic stuffed animal with modern technology, providing an interactive, educational, and comforting experience. With its range of features and customization options, this adorable panda toy is sure to capture the hearts of both children and adults, becoming a beloved companion for years to come.</p>

                        {/* The button to open modal */}
                        <a href="#my-modal-2" className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Read More ...</a>

                        <div className="modal" id="my-modal-2">
                            <div className="modal-box bg-">
                                <h3 className="font-bold text-lg border border-pink-400  text-pink-200 p-3 rounded-xl"> Interactive Features
                                    Equipped with advanced sensors and built-in Bluetooth connectivity, the Cell-toy Panda responds to touch, sound, and movement. It can mimic real panda behaviors, such as blinking its eyes, wiggling its ears, and even performing playful somersaults. By interacting with the toy, children can develop their creativity and imagination while engaging in hours of entertainment.
                                    <br />
                                    Educational Benefits
                                    Beyond its interactive features, the Cell-toy Panda offers educational value. Through a dedicated smartphone application, users can access a range of informative content about pandas, including facts, photos, and even virtual experiences of panda habitats.

                                    <br /> Comfort and Relaxation
                                    The Cell-toy Panda doubles as a cozy and comforting companion. Its soft, plush exterior and gentle vibrations create a soothing sensation, perfect for cuddling during naptime or before bedtime. The pandas rhythmic breathing sounds and lullabies help create a serene environment, promoting relaxation and peaceful sleep.

                                </h3>
                                <div className="modal-action">
                                    <a href="#" className="btn btn-secondary justify-center text-black">Yay...!</a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Section;