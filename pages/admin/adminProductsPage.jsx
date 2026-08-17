import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AdminProductsPage(){
    return(
        <div className="flex flex-col w-full h-full bg-amber-700">
            {/* <Link className = "w-[80px] h-[80px] bg-ascent text-white rounded-full text-2xl flex justify-center items-center fixed right-[35px] bottom-[35px]"><FaPlus /></Link> */}
            <Link to="/admin/add-products" className = "w-[80px] h-[80px] bg-ascent text-white rounded-full text-2xl flex justify-center items-center fixed right-[35px] bottom-[35px]"><FaPlus /></Link>
            {/* <button className = "w-[80px] h-[80px] bg-ascent text-white rounded-full text-2xl flex justify-center items-center fixed right-[35px] bottom-[35px]"><FaPlus /></button> */}
        </div>
    )
}