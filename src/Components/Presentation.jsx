
const Presentation = () => {

        const handleDownload = () => {
          const fileUrl = '/CV-Javier Rivera-EN.pdf'; // Ruta relativa al archivo que deseas descargar
          const link = document.createElement('a');
          link.href = fileUrl;
          link.download = 'CV-Javier Rivera-EN'; // Nombre de archivo deseado para la descarga
          link.click();
        };
        
    return (
        <header className="h-4/6 flex justify-center mt-10">
            <div className="grid grid-cols-2 gap-10 w-3/6 content-center p-3 place-items-center">
                <div>
            <h1 className="font-black text-center mb-5 text-5xl">{'<Full Stack Web Developer />'}</h1>
            <h2 className="text-center font-normal mb-5 text-xl">Javier Ignacio Rivera Valencia</h2>
            <p className="text-justify mb-5 text-slate-600">Hello! I'm a passionate Full Stack web developer and Computer Science student. Recently graduating from Henry Bootcamp, I am currently seeking my first job opportunity as a versatile developer specializing in Full Stack, Front End, or Back End development.</p>
            <ul className="flex justify-evenly">
                <li><a href="https://github.com/JavierYami"><img className="w-10" src="https://res.cloudinary.com/dvldakcin/image/upload/v1681611897/Countries/github_uihy1p.png" alt="github" /></a></li>
                <li><a href="https://www.linkedin.com/in/javier-ignacio-rivera-valencia-22b19525a/"><img className="w-10" src="https://res.cloudinary.com/dvldakcin/image/upload/v1681612281/Countries/linkedin_jfyi7s.png" alt="linkedin" /></a></li>
                <li>
                    <button onClick={handleDownload} className="bg-black px-2  text-white rounded font-black h-full">CV</button>
                </li>
            </ul>
                </div>
                <img className="w-6/6 rounded-md" src="https://res.cloudinary.com/dvldakcin/image/upload/v1683586179/vpgsdfoe8i03zv3yvnnt.jpg" alt="picture" />
            </div>
        </header>
    )
}

export default Presentation;