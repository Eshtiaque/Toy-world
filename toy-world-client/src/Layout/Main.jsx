import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-w-7xl mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;