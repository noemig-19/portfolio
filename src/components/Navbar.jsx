import { useState } from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [active, setActive] = useState(false)

    const toggleHamburger = () => {
        setActive(!active)
    }

    return (
        <nav className="fixed top-4 left-0 right-0 z-50  ">
            <div className=" fixed right-2 p-2 bg-neutral-900/80 border border-neutral-700 w-16 rounded-2xl hidden  max-lg:block max-lg:bottom-2" onClick={toggleHamburger}><GiHamburgerMenu size={32} color="white" /></div>
            {/**desktop buttons */}
            <div className="max-w-150 flex gap-4 p-4 cursor-pointer bg-neutral-900/60 border border-neutral-700 text-white capitalize font-bold rounded-2xl max-lg:hidden">
                <Link to={"/"}><li className="hover:text-cyan-500 transition duration-300">about</li></Link>
                <Link to={"/skills"}><li className=" hover:text-cyan-500 transition duration-300 ">skills</li></Link>
                <Link to={"/contact"}><li className=" hover:text-cyan-500 transition duration-300 ">contatto</li></Link>

                <li className=" hover:text-cyan-500 transition duration-300 ">progetti</li>

                <li className=" hover:text-cyan-500 transition duration-300 ">curriculum</li>
            </div>
            {/**mobile bottons */}
            <div className={`${active ? "max-lg:block" : "hidden"} z-8 fixed top-18 right-0 w-full p-6 bg-neutral-900 border border-neutral-700 text-white capitalize font-bold rounded-2xl`}>
                <Link to={"/"}><li className="hover:text-cyan-500 transition duration-300 py-2">about</li></Link>
                <Link to={"/skills"}><li className=" hover:text-cyan-500 transition duration-300 py-2">skills</li></Link>
                <Link to={"/contact"}><li className=" hover:text-cyan-500 transition duration-300 py-2">contatto</li></Link>


                <li className=" hover:text-cyan-500 transition duration-300 py-2">progetti</li>

                <li className=" hover:text-cyan-500 transition duration-300 py-2">curriculum</li>
            </div>

        </nav>

    )
}

export default Navbar
