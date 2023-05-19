
const Footer = () => {

    return (

        <footer className="bg-cyan-50 p-5 flex flex-row justify-evenly">
            <p className="text-sm opacity-70 mt-2" >Made with React and Tailwind CSS</p>
            <a href="https://github.com/JavierYami/portfolio" target="_blank" className="text-sm text-cyan-600 opacity-50 mt-2"  >Repository</a>
            <p className="text-sm mt-2  opacity-50 ">
				&copy; {new Date().getFullYear()} Javier Rivera. All rights reserved.
			</p>
        </footer>
    )

}

export default Footer;