import { FaHome } from "react-icons/fa";
import { useState } from 'react'
import './App.css'
import TestPage from "../pages/testPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import AdminPage from "../pages/adminPage";
import { Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   
   <div className = "w-full h-screen border-10">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path= "/register" element={<RegisterPage/>} />
      <Route path= "/admin/*" element={<AdminPage/>} />
      <Route path= "/test" element={<TestPage/>} />

    </Routes>
   </div>
  )
}

export default App
