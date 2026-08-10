import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";


export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(){
        axios.post("http://localhost:3000/users/login",
            {
                email: email,
                password: password
            }
        ).then(
            (res)=>{
                // toast.success("Login successful")
                console.log(res.data)
            }
        ).catch(
            (err)=>{
                toast.error("Login failed")
                toast.error("login failed")
            }
        )
    }

    return(
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="flex flex-col items-center w-[450px] h-[550px] backdrop-blur-md shadow-2xl rounded-lg p-6">
                <img src="/logo.png" className="w-[120px] h-[100px] object-cover bg-ascent rounded-lg"></img>
                <h1 className="text-3xl font-bold text-secondary">Login</h1>

                <label className="text-lg font-medium text-secondary w-full">Email</label>
                <input 
                onChange={
                    (e)=>{
                        setEmail(e.target.value)
                    }
                }
                type="email" placeholder="user@gmail.com" className="w-full h-[40px] rounded-lg p-2 mb-2 bg-secondary-20 border-2 border-ascent-300 outline-none text-secondary "></input>

                <label className="text-lg font-medium text-secondary w-full">Password</label>
                <input 
                onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                }
                type="password" placeholder="••••••••" className="w-full h-[40px] rounded-lg p-2 mb-2 bg-secondary-20 border-2 border-ascent-300 outline-none text-secondary "></input>

                <p className="w-full text-end">Forget Password reset <Link to="/reset_password" className="text-ascent">here</Link></p>

                <button onClick={handleLogin} className="w-full h-[40px] rounded-lg p-2 mb-2 bg-ascent text-white font-bold" type="submit">Login</button>

                <p className="w-full text-end">Do not have an account? <Link to="/register" className="text-ascent">Sign up</Link></p>

                <button className="w-full h-[40px] rounded-lg p-2 mb-2 bg-ascent text-white font-bold flex justify-center items-center gap-2"><FcGoogle />Login with Google</button>


            </div>
        </div>
    )

}