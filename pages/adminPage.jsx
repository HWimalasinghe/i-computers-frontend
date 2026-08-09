import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

export default function AdminPage(){
    return(
        <div className="w-full h-full flex">
            <div className="w-[300px] h-full bg-amber-400 text-white flex flex-col">
                
                <h1 className="p-2">Using 'a' tags</h1>

                <a href="/admin">Admin Dashboard</a>
                <a href="/admin/products">Products</a>
                <a href="/admin/users">Users</a>

                <h1 className="p-2">Using 'Link' tags</h1>

                <Link to="/admin">Admin dashboard</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-red-500">
                <Routes>
                    <Route path= "/" element={<h1>OrdersPage</h1>} />
                    <Route path= "/products" element={<h1>ProductsPage</h1>} />
                    <Route path= "/users" element={<h1>UsersPage</h1>} />
                </Routes>
            </div>
        </div>
    )
}