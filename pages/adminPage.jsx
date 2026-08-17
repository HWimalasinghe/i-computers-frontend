import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { LuShoppingCart } from "react-icons/lu";
import { BsBox } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductsForm from "../src/components/adminAddProductsForm";


export default function AdminPage(){
    return(
        <div className="w-full h-full flex">

            <div className="w-[300px] h-full shadow-2xl bg-primary text-secondary flex flex-col">
                
                <div className="w-full h-10 [100px] flex bg-amber-200 items-center justify-between border mb-2">
                    <img src="/logo.png" alt="logo" className="h-full" />
                    <span>Admin</span>
                </div>

                <Link to="/admin" className="flex items-center text-xl p-2 gap-2 mb-2 hover:bg-ascent hover:text-white"><LuShoppingCart className="text-3xl" />Orders</Link>
                <Link to="/admin/products" className="flex items-center text-xl p-2 gap-2 mb-2 hover:bg-ascent hover:text-white"><BsBox className="text-3xl" />Products</Link>
                <Link to="/admin/users" className="flex items-center text-xl p-2 gap-2 mb-2 hover:bg-ascent hover:text-white"><LuUsersRound className="text-3xl" />Users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full">
                <Routes>
                    <Route path= "/" element={<h1>OrdersPage</h1>} />
                    <Route path= "/products" element={<AdminProductsPage />} />
                    <Route path= "/users" element={<h1>UsersPage</h1>} />
                    <Route path= "/add-products" element={<AdminAddProductsForm />} />
                </Routes>
            </div>
        </div>
    )
}