import { useState } from "react"
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <nav className="bg-blue-500 py-1.5">
            <div className="flex justify-between text-white px-6 md:px-20 items-center">
                <div>
                    <span className="text-2xl font-bold">Logo</span>
                </div>
                <div className="space-x-4 items-center justify-center hidden md:block">
                    <a href="" className="hover:bg-blue-600 py-1.5 px-4">Home</a>
                    <a href="" className="hover:bg-blue-600 py-1.5 px-4">Contato</a>
                    <a href="" className="hover:bg-blue-600 py-1.5 px-4">Sobre</a>
                    <a href="" className="hover:bg-blue-600 py-1.5 px-4">Galeria</a>
                </div>
                <span 
                    className={`${isActive ? "hidden" : "block"} md:hidden`}
                    onClick={() => setIsActive(true)}
                ><IoMdMenu size={24} /></span>
                <span 
                    className={`${isActive ? "block" : "hidden"} md:hidden`}
                    onClick={() => setIsActive(false)}
                ><IoMdClose size={24} /></span>
            </div>
            {
                isActive && (
                    <div className="md:hidden flex flex-col space-y-4 text-white mt-4">
                        <a href="" className="hover:bg-blue-600 py-1.5 px-4">Home</a>
                        <a href="" className="hover:bg-blue-600 py-1.5 px-4">Contato</a>
                        <a href="" className="hover:bg-blue-600 py-1.5 px-4">Sobre</a>
                        <a href="" className="hover:bg-blue-600 py-1.5 px-4">Galeria</a>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar