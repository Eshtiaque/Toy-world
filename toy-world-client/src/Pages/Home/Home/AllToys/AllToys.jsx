// import React from 'react';


import ToyTable from "../ToyTable/ToyTable";
import img from "../../../../../assets/banner/pexels-photo-207983.jpeg"
import { useEffect, useState } from "react";

const AllToys = () => {
 
    const [toys, setToys] = useState([]);
const [loading, setLoading] = useState(true)

    // const { _id,name, price, quantity, category, sellerName } = toys;
    // console.log(_id,name, price, quantity, category, sellerName )
  useEffect(()=>{
    setLoading(true)
    fetch('https://toy-world.vercel.app/allToys')
    .then(res=>res.json())
    .then(data=>{
        setToys(data)
        setLoading(false)
    })

  },[])
console.log(toys);
    useEffect ( () => {
        document.title = "All Toy's";
    },[])

    return (
        <div>
            <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                <div className="w-1/2">
                    <img className="w-full" src={img} alt="" />
                </div>
                <div className="w-1/2">
                    <img className="w-full" src={img} alt="" />
                </div>
            </div>
            <div>
            <div className="">
         <h1 className="font-black text-5xl text-center text-white p-5 bg-gradient-to-r from-pink-500 from-20% via-black via-50% to-pink-500 to-90% ">ToYs</h1>
        
                </div>
            </div>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr >
                            <th className="bg-black border rounded text-center text-white">Toy Name</th>
                            <th className="bg-black border rounded text-center text-white">Seller</th>
                            <th className="bg-black border rounded text-center text-white">Sub-category </th>
                            <th className="bg-black border rounded text-center text-white">Price</th>
                            <th className="bg-black border rounded text-center text-white" >Quantity</th>
                            <th className="bg-black border rounded text-center text-white">Details</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {toys &&
                            toys?.slice(0,20).map(toy => <ToyTable
                                key={toy.id}
                                toy={toy}
                            ></ToyTable>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;