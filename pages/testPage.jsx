export default function TestPage() {

    let status = "Off";

    return(
        <div className="flex w-full h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{status}</h1>
            <div className="flex justify-center items-center w-75 h-[50px]">

                <button onClick={
                    ()=>{
                        status = "On";
                        console.log(status)
                    }
                } className="p-2 text-white bg-green-600 m-2">Turn on</button>
                <button className="p-2 text-white bg-red-600 m-2">Turn off</button>
                <button className="p-2 text-white bg-yellow-600 m-2">Idle</button>

            </div>
        </div>
    )
} 






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