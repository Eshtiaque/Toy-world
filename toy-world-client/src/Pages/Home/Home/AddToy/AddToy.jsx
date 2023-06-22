import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { MdToys } from 'react-icons/md';
import photo from "../../../../../assets/banner/pexels-photo-220137.jpeg"
import { useEffect } from "react";
const AddToy = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://toy-world.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You Added a Toy Successfully',
                        'success'
                      )
                } 
            })

    }

    useEffect ( () => {
        document.title = "Add a Toys";
    },[])
    return (
        <div className="bg-black text-black">
            <div>
                <img className="w-full h-1/2 rounded-es-full" src={photo} alt="" />
                <h1></h1>
            </div>
            <div className="bg-gradient-to-r from-pink-200  via-purple-500 to-blue-500 rounded p-2" >
                <h1 className="text-left font-black ps-5 text-5xl mt-5 mb-4">Add Your ToYs </h1>
                <p className='text-left font-bold p-5'>NB: You can Add your toys in Our website.This is Best platform for our Child.<br />You Can find proper Toy what you have needed ! PLEASE <br /> give the true and right information.<br /> # Thank You #</p>
                <span className="flex justify-center gap-3 text-5xl "><MdToys /><MdToys /><MdToys /></span>
                <h2 className="text-center justify-end mb-5">________________________________________</h2>
            </div>
            <div className="bg-gradient-to-r from-pink-200  via-purple-500 to-blue-500">
                <form className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3  p-5 gap-3  justify-end" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h5 className="font-bold pt-3 ">Toy - Name :</h5>
             <input className="p-2 w-full text-black  bg-pink-200 border border-black
                         rounded-3xl" defaultValue=""
                            {...register("name")} />
                    </div>
                    <div >
                        <h5 className="font-bold mt-3">Seller - Name :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black  rounded-3xl" defaultValue=""
                            {...register("sellerName")} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3">Seller - Email :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("email", { required: true })} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3">Photo :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("photoURL")} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3">Price :</h5>
                        <input className="p-2  w-full text-black    bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("price")} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3">Rating :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("Rating")} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3">Quantity :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("quantity")} />
                    </div>
                    <div className=" gap-1 mt-3 ">
                        <h5 className="font-bold y-center ">Category :</h5>
                        {/* <input {...register("example")} /> */}
                        <select className=" w-full  h-10 p-2 text-black  bg-pink-200 border border-black rounded-3xl"
                            {...register("category")}>
                            <option value="panda">Panda</option>
                            <option value="doll">Doll</option>
                            <option value="animal">Animal</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="font-bold mt-3"> Details :</h5>
                        <input className="p-2  w-full text-black  bg-pink-200 border border-black rounded-3xl" defaultValue="" {...register("details")} />
                    </div>
                    <div>

                    </div>
                    <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3">

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" className='btn bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500  
                       hover:text-black text-black  w-full mt-3 mb-3  '/>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;