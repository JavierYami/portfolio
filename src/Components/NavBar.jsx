

const NavBar = () => {


    return (
        <nav className="flex  w-full z-50 p-5 m-0 fixed top-0 bg-cyan-50">
            <h1 className="font-black text-xl text-cyan-500">{'<JR/>'}</h1>
            <ul className=" w-full flex justify-end space-x-10 ">
                <li><a className="text-l hover:text-indigo-500	 transition duration-200 ease-in-out" href="#home">Home</a></li>
                <li><a className="text-l hover:text-indigo-500	 transition duration-200 ease-in-out" href="#about">About</a></li>
                <li><a className="text-l hover:text-indigo-500	 transition duration-200 ease-in-out" href="#projects">Projects</a></li>
                <li><a className="text-l bg-cyan-500 font-medium px-4 py-1 rounded text-white transition duration-300 ease-in-out hover:bg-indigo-500" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;