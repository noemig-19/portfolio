import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Header() {
  return (

    <header className="fixed top-4 p-2 left-2  bg-neutral-900/50  border border-neutral-700 rounded-2xl flex flex-col gap-4 max-lg:w-screen max-lg:top-0 max-lg:left-0 max-lg:pt-4 max-lg:border-b-0 max-lg:rounded-none max-[1050px]:hidden  max-lg:block">
      <div className="flex flex-col gap-1.8 ">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/050/907/439/small/3d-cartoon-woman-with-brown-hair-in-blue-shirt-png.png" alt="my-picture" className="max-w-50 max-[1100px]:hidden" />
        <h1 className=" pb-2 text-xl font-bold text-taupe-200 "> Noemi Guadalupe Bonilla</h1>
        <div className="bg-neutral-900 p-2 border border-neutral-800 rounded-2xl cursor-pointer hover:border-neutral-700 hover:bg-neutral-900/80 transition duration-250">
          <h2 className="text-lg max-lg:text-sm font-medium text-mauve-200 capitalize ">frontend web developer</h2>
        </div>
      </div>
      <div ><p className="text-sm font-medium text-mauve-400 pb-2 max-lg:p-0 max-lg:hidden">Puoi trovarmi nei seguenti social:</p>
        <div className="max-lg:hidden flex gap-1.8 p-2">

          <Link to={""} ><li className="text-mauve-200 capitalize"><FaLinkedin size={30} /></li></Link>
          <Link to={"https://github.com/noemig-19"}><li className="text-mauve-200 capitalize"><FaGithub size={30} /></li> </Link>

        </div>
      </div>
      {/**mobile icons responsive*/}
      <div className="hidden max-lg:block fixed top-0 right-0 p-4">
        <div className="flex flex-col gap-4">
          <Link to={""} ><li className="text-mauve-200 capitalize"><FaLinkedin size={32} /></li></Link>
          <Link to={"https://github.com/noemig-19"}><li className="text-mauve-200 capitalize"><FaGithub size={32} /></li> </Link>
        </div>
      </div>
    </header>

  )
}

export default Header
