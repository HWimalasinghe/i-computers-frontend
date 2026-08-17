import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import api from "../lib/api";


export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    function handleRegister(){

        if(password !== confirmPassword){
            toast.error("Password do not match")
        }
        api.post("/users/",
            {
                email: email,
                firstName:firstName,
                lastName: lastName,
                password: password
            }
        ).then(
            (res)=>{
                
                toast.success("Register Successfully")
                navigate("/login")
            }
        ).catch(
            (err)=>{
                console.log(err)
                toast.error("Registration faild")
            }
        )
    }

    return(
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="flex flex-col items-center w-[450px] backdrop-blur-md shadow-2xl rounded-lg p-6">
                <img src="/logo.png" className="w-[120px] h-[100px] object-cover bg-ascent rounded-lg"></img>
                <h1 className="text-3xl font-bold text-secondary">Login</h1>

                <label className="text-lg font-medium text-secondary w-full">Email</label>
                <input 
                value={email}
                onChange={
                    (e)=>{
                        setEmail(e.target.value)
                    }
                }
                type="email" placeholder="user@gmail.com" className="w-full h-[40px] rounded-lg p-2 mb-2 bg-secondary-20 border-2 border-ascent-300 outline-none text-secondary "></input>

                <div className="w-full flex gap-2">
                    <div className="w-1/2 flex flex-col">
                        <label className="w-full text-lg text-secondary font-semibold mb-1">First Name</label>
                        <input
                            value={firstName}
                            onChange={
                                (e)=>{
                                    setFirstName(e.target.value)
                                }
                            }
                        type="email" placeholder="enter first name" className="w-full h-[40px] rounded-lg p-2 mb-2 bg-secondary-20 border-2 border-ascent-300 outline-none text-secondary "></input>
                    </div>
                    
                    <div className="w-1/2 flex flex-col">
                        <label className="w-full text-lg text-secondary font-semibold mb-1">Last Name</label>
                        <input
                            value={lastName}
                            onChange={
                                (e)=>{
                                    setLastName(e.target.value)
                                }
                            }
                        type="email" placeholder="enter last name" className="w-full h-[40px] rounded-lg p-2 mb-2 bg-secondary-20 border-2 border-ascent-300 outline-none text-secondary "></input>
                    </div>
                </div>

                <label className="text-lg font-medium text-secondary w-full">Password</label>
                <input 
                value={password}
                onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                }
                type="password" placeholder="••••••••" className="w-full h-[40px] rounded-lg p-2 mb-2 bg-secondary-20 border-2 border-ascent-300 outline-none text-secondary "></input>

                <label className="text-lg font-medium text-secondary w-full">Confirm Password</label>
                <input 
                value={confirmPassword}
                onChange={
                    (e)=>{
                        setConfirmPassword(e.target.value)
                    }
                }
                type="password" placeholder="••••••••" className="w-full h-[40px] rounded-lg p-2 mb-2 bg-secondary-20 border-2 border-ascent-300 outline-none text-secondary "></input>

                <button onClick={handleRegister} className="w-full h-[40px] rounded-lg p-2 mb-2 bg-ascent text-white font-bold" type="submit">Register</button>

                <p className="w-full text-end">Already have an account? <Link to="/login" className="text-ascent">Login</Link></p>

                <button className="w-full h-[40px] rounded-lg p-2 mb-2 bg-ascent text-white font-bold flex justify-center items-center gap-2"><FcGoogle />Register with Google</button>


            </div>
        </div>
    )

}