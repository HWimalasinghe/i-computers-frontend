import { FaHome } from "react-icons/fa";
import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (
   
   <div>
    <ProductCard name="Apple iPhone 5s" price="$100" image="https://picsum.photos/id/3/200/300"/>
    <ProductCard name="Apple Laptop" price="$1000" image="https://picsum.photos/id/0/200/300"/>
    <ProductCard name="Women Shoes" price="$50" image="https://picsum.photos/id/21/200/300"/>
    <FaHome className= "text-[500px] text-green-600"/>
   </div>
  )
}

export default App
