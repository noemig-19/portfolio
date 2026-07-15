import { Link } from "react-router-dom"

function Navbar() {
    return (

        <nav className="fixed top-4 left-0 right-0 z-50">
            <div className="max-w-150 flex gap-4 p-4 cursor-pointer bg-neutral-900/60 border border-neutral-700 text-white capitalize font-bold rounded-2xl">
                <Link to={"/"}><li className="hover:text-cyan-500 transition duration-300">about</li></Link>
                <Link to={"/skills"}><li className=" hover:text-cyan-500 transition duration-300 ">skills</li></Link>


                <li className=" hover:text-cyan-500 transition duration-300 ">progetti</li>
                <li className=" hover:text-cyan-500 transition duration-300 ">contatto</li>
                <li className=" hover:text-cyan-500 transition duration-300 ">curriculum</li>
            </div>

        </nav>

    )
}

export default Navbar
