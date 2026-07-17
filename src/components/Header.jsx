

function Header() {
  return (

    <header className="fixed top-0  p-2 bg-neutral-900/50 border border-neutral-700 rounded-2xl flex flex-col gap-4">
      <div className="flex flex-col gap-1.8">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/050/907/439/small/3d-cartoon-woman-with-brown-hair-in-blue-shirt-png.png" alt="my picture" className="max-w-50 " />

        <h1 className=" text-xl font-bold text-taupe-200 "> Noemi Guadalupe Bonilla</h1>
        <div className="bg-neutral-900 p-2 border border-neutral-800 rounded-2xl cursor-pointer hover:border-neutral-700 hover:bg-neutral-900/80 transition duration-250">
          <h2 className="text-md font-medium text-mauve-200 capitalize ">frontend web developer</h2>
        </div>
      </div>
      <div >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-mauve-400">Puoi trovarmi nei seguenti social:</p>
          <li className="text-mauve-200 capitalize">github</li>
          <li className="text-mauve-200 capitalize">linkedin</li>
          <li className="text-mauve-200 capitalize">istagram</li>
        </div>
      </div>
    </header>

  )
}

export default Header
