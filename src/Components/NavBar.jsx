

const NavBar = () => {


    return (
        <nav className="flex bg-white w-full sticky p-5 m-0">
            <h1 className="font-black text-xl">{'<JR/>'}</h1>
            <ul className=" w-full flex justify-end space-x-10 ">
                <li><a className="text-xl hover:text-slate-400	 transition duration-200 ease-in-out" href="">Home</a></li>
                <li><a className="text-xl hover:text-slate-400	 transition duration-200 ease-in-out" href="">About</a></li>
                <li><a className="text-xl hover:text-slate-400	 transition duration-200 ease-in-out" href="">Projects</a></li>
                <li><a className="text-xl bg-black font-medium px-4 py-1 rounded text-white hover:translate-y-[-2px] transition duration-200 ease-in-out" href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;