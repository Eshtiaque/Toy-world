
import { Link } from "react-router-dom";
const ToyTable = ({ toy }) => {
    
   
    const { _id,name, price, quantity, category, sellerName } = toy;



    return (
        <>
            <tr className="">
                <td className="border-black text-black bg-pink-300">
                 <div className="font-bold">{name}</div>
                </td>
                <td className="text-center border-black text-white bg-slate-800">{sellerName}</td>
                <td className="text-center border-black  text-black bg-white">{category}</td>
                <td className="text-center border-black text-black bg-pink-300">{price}</td>
                <td className="text-center border-black text-white bg-slate-800">{quantity}</td>

                <th className="bg-white text-center"> 
                    <Link to={`/details/${_id}`}> <button className="btn btn-ghost btn-xs bg-black text-white">details</button></Link>
                </th>
               
            </tr>
        </>
    );
};

export default ToyTable;