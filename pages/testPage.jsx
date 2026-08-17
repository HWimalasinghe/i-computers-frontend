import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import toast from "react-hot-toast"
import uploadMedia from "../lib/uploadMedia"

const key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsaW9qcmlkbnV3a3RjbGF5bXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1ODc1NjAsImV4cCI6MjEwMjE2MzU2MH0.ETBnkDoxtwrZouW2dTPMHgchSkeK2htky8YW6_ExYtk"
const url= "https://fliojridnuwktclaymrr.supabase.co"
const supabase = createClient(url, key)

export default function TestPage(){

    const [file, setFile]= useState(null)


    function uploadFile(){
        uploadMedia(file).then(
            (res)=>{
                console.log(res)
            }
        ).catch(
            (err)=>{
                console.log(err)
                toast.error("Upload file failed")
            }
        )
    }

    // async function uploadFileAsync() {
    //     try{
    //         const res = await uploadFile(file)
    //         console.log(res)
    //     }catch(err){
    //         console.log(err)
    //         toast.error("Upload file failed")
    //     }
    // }
    // async function uploadFile() {
    //     if (!file) {
    //         toast.error("No file selected");
    //         return;
    //     }

    //     try {
    //         const { data, error } = await supabase.storage
    //         .from("images")
    //         .upload(file.name, file, { upsert: true });

    //         if (error) {
    //         console.error("Upload error:", error);
    //         toast.error("File upload failed: " + (error.message || error));
    //         return;
    //         }

    //         const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data?.publicUrl;
    //         console.log("Public URL:", publicUrl);
    //         toast.success("File uploaded");
    //     } catch (e) {
    //         console.error("Unexpected upload error:", e);
    //         toast.error("File upload failed: " + (e.message || e));
    //     }
    // }

    // async function uploadFile(){
    //     console.log(file)

    //     supabase.storage.from("images").upload(file.name, file).then(
    //         ()=>{
    //             const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl
    //             console.log(publicUrl)
    //         }
    //     ).catch(
    //         ()=>{
    //             toast.error("File upload failed")
    //         }
    //     )
    // }

    return(
        <div className="w-full h-full flex items-center justify-center">
            <input type= "file"
            multiple={true}
            onChange={
            (e)=>{
                setFile(e.target.files[0])
                }
            } />
            <button onClick={uploadFile} className="bg-green-600 text-white p-2 rounded-lg">Submit</button>
        </div>
    )
}


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsaW9qcmlkbnV3a3RjbGF5bXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1ODc1NjAsImV4cCI6MjEwMjE2MzU2MH0.ETBnkDoxtwrZouW2dTPMHgchSkeK2htky8YW6_ExYtk
// project url: https://fliojridnuwktclaymrr.supabase.co

// import {useEffect, useState} from "react";
// import { toast } from "react-hot-toast";

// export default function TestPage() {

//     const [status, setStatus] = useState("Off");
//     const [level, setLevel] = useState(0);

//     return(
//         <div className="flex w-full h-full flex-col items-center justify-center">
//             <h1 className="text-3xl font-bold">{status}</h1>
            
//             <div className="flex justify-center items-center w-75 h-[50px]">

//                 <button onClick={
//                     ()=>{
//                         setStatus ("On")
//                         console.log(status)
//                         toast.success("Status changed to On")
//                     }
//                 } className="p-2 text-white bg-green-600 m-2">Turn on</button>
//                 <button onClick={
//                     ()=>{
//                         setStatus ("Off")
//                         console.log(status)
//                         toast.error("Status changed to Off")
//                     }
//                 } className="p-2 text-white bg-red-600 m-2">Turn off</button>
//                 <button onClick={
//                     ()=>{
//                         setStatus("Idle")
//                         console.log(status)
//                         toast.success("Status changed to Idle")
//                     }
//                 } className="p-2 text-white bg-yellow-600 m-2">Idle</button>

//             </div>

//             <h1 className="text-3xl font-bold">{level}</h1>
            
//             <div className="flex flex-col items-center justify-between bg-amber-400 w-75">
//                 <div className=" w-25 h-[50px] flex justify-center items-center">
//                     <button onClick={
//                         ()=>{
//                             setLevel(1)
//                         }
//                     } className="p-2 text-white bg-blue-600 m-2">1</button>
//                 </div>
//                 <div className="w-25 h-[50px] flex justify-center items-center">
//                     <button onClick={
//                         ()=>{
//                             setLevel(2)
//                         }
//                     } className="p-2 text-white bg-yellow-600 m-2">2</button>
//                 </div>
//                 <div className="w-25 h-[50px] flex justify-center items-center">
//                     <button onClick={
//                         ()=>{
//                             setLevel(3)
//                         }
//                     } className="p-2 text-white bg-red-600 m-2">3</button>
//                 </div>
//             </div>
//         </div>
//     )
// } 






/*
return(
        <div className="w-full h-full">
            <div className="flex flex-col relative w-[600px] h-[600px] justify-center items-center gap-0 bg-yellow-300">
                <div className="w-[100px] h-[100px] bg-red-600"></div>
                <div className="fixed top-[10px] right-[10px] w-[100px] h-[100px] bg-green-600"></div>
                <div className="absolute left-0 w-[100px] h-[100px] bg-blue-600"></div>
                <div className="w-[100px] h-[100px] bg-white"></div>
                <div className="w-[100px] h-[100px] bg-black"></div>
            </div>
        </div>
    )
*/

/*<div className="w-[280px] h-[280px] bg-yellow-300 p-[10px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae placeat 
            reiciendis quibusdam earum id expedita eum explicabo doloribus. 
            Libero, sunt eos modi voluptates nemo ab voluptatibus magnam expedita 
            illum inventore delectus hic quo, et nobis perspiciatis architecto. Sequi quis aliquid 
            consequatur cumque minima.
            </div>
            <div className="w-[280px] h-[280px] bg-yellow-300 p-[10px] m-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae placeat 
            reiciendis quibusdam earum id expedita eum explicabo doloribus. 
            Libero, sunt eos modi voluptates nemo ab voluptatibus magnam expedita 
            illum inventore delectus hic quo, et nobis perspiciatis architecto. Sequi quis aliquid 
            consequatur cumque minima.
            </div><div className="w-[280px] h-[280px] bg-yellow-300 p-[10px] mb-[30px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae placeat 
            reiciendis quibusdam earum id expedita eum explicabo doloribus. 
            Libero, sunt eos modi voluptates nemo ab voluptatibus magnam expedita 
            illum inventore delectus hic quo, et nobis perspiciatis architecto. Sequi quis aliquid 
            consequatur cumque minima.
            </div><div className="w-[280px] h-[280px] bg-yellow-300 p-[10px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae placeat 
            reiciendis quibusdam earum id expedita eum explicabo doloribus. 
            Libero, sunt eos modi voluptates nemo ab voluptatibus magnam expedita 
            illum inventore delectus hic quo, et nobis perspiciatis architecto. Sequi quis aliquid 
            consequatur cumque minima.
            </div><div className="w-[280px] h-[280px] bg-yellow-300 p-[10px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae placeat 
            reiciendis quibusdam earum id expedita eum explicabo doloribus. 
            Libero, sunt eos modi voluptates nemo ab voluptatibus magnam expedita 
            illum inventore delectus hic quo, et nobis perspiciatis architecto. Sequi quis aliquid 
            consequatur cumque minima.
            </div>*/