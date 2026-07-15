
function Navbar() {
    return (

        <nav className="fixed top-2">
            <div className="max-w-150 m-auto flex  gap-0.2 p-4 cursor-pointer bg-neutral-900/60 border border-neutral-700 text-white capitalize font-bold rounded-2xl">
                <li className="hover:text-cyan-500 transition duration-300">about</li>
                <li className=" hover:text-cyan-500 transition duration-300 ">skills</li>
                <li className=" hover:text-cyan-500 transition duration-300 ">progetti</li>
                <li className=" hover:text-cyan-500 transition duration-300 ">contatto</li>
                <li className=" hover:text-cyan-500 transition duration-300 ">curriculum</li>
            </div>

        </nav>

    )
}

export default Navbar
