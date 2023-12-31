


import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from 'react-router-dom';
//  import { useLoaderData } from "react-router-dom";

// import EdiToy from "../EditToy/EditToy";





const MyToys = () => {
//  const step =useLoaderData();
 
    const { user } = useContext(AuthContext)
    const [Toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    // const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        fetch(`https://toy-world.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
                document.title = "My Toys";
            })
    }, [user])

    const handleSearch = () => {
        fetch(`https://toy-world.vercel.app/searchText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };

const handleDelete =_id =>{
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover it!",
        textColor:'#0000',
        icon: 'warning',
        iconColor:'red',
        background:'black',
        Color:'#545454',
        showCancelButton: true,
        confirmButtonColor: '#F40D0D',
        cancelButtonColor: '#gray',
        // cancelButtonAriaLabel:'white',
        confirmButtonText: 'Yes, delete it!',
        confirmButtonTextColor:'black'
        
      }).then((result) => {
        if (result.isConfirmed) {
       
        fetch(`https://toy-world.vercel.app/myToys/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire(
                        'Deleted!',
                        'Your toy has been deleted.',
                        'success'
                      )
        const remaining =Toys.filter(toy=>toy._id!==_id)
        setToys(remaining);
            }
        })
        }
      })
}

    return (


        <div className="my-jobs-container">
            <h1 className="text-center m-2 bg-black text-pink-300 p-4 font-black text-4xl rounded-full">My Toys !</h1>
            <div className="search-box  text-center">
                <input
               
                        onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1 rounded-lg bg-pink-200 text-black"
                placeholder="Toy Name "
                    />{" "}
                <button onClick={handleSearch} className="btn btn-sm m-4">Search</button>
               
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr >
                            <th className="bg-black border rounded text-center text-white">#</th>
                            <th className="bg-black border rounded text-center text-white">Toy Name</th>
                            <th className="bg-black border rounded text-center text-white">Seller</th>
                            <th className="bg-black border rounded text-center text-white">Sub-category </th>
                            <th className="bg-black border rounded text-center text-white">Price</th>
                            <th className="bg-black border rounded text-center text-white" >Quantity</th>
                            <th className="bg-black border rounded text-center text-white">Edit</th>
                            <th className="bg-black border rounded text-center text-white">Delete</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white text-white text-center">
                        {
                            Toys.map((toy, index) => <tr key={toy}>
                                <td>{index + 1}</td>
                                <td className="font bold">{toy.name}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.category}</td>
                                <td >{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={`/editToy/${toy._id}`}>
                                    <button className="btn rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black " >Edit</button>
                                    </Link>
                                    
                                </td>
                                <td>
                                    {" "}
                                    <button onClick={()=>handleDelete(toy._id)} className="btn bg-gradient-to-r from-black via-purple-500 to-black text-white">Delete
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
};

export default MyToys;