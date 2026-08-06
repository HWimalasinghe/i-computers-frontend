export default function TestPage() {
    return(
        <div className="w-full h-full">
            <div className="flex flex-col w-[600px] h-[600px] justify-center items-center gap-2 bg-yellow-300">
                <div className="w-[100px] h-[100px] bg-red-600"></div>
                <div className="w-[100px] h-[100px] bg-green-600"></div>
                <div className="w-[100px] h-[100px] bg-blue-600"></div>
                <div className="w-[100px] h-[100px] bg-white"></div>
                <div className="w-[100px] h-[100px] bg-black"></div>
            </div>
        </div>
    )
}