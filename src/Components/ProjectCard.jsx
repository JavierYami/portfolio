

const ProjectCard = ({name, description, image, deploy, repository}) => {
    
    return (
        <article className="grid grid-cols-2 m-20 p-5">
          <div className="w-5/6">
            <h1 className="text-indigo-500 text-3xl font-bold text-center mb-5">{name}</h1>
            <p className="text-justify">{description}</p>
          </div>
          <div className="rounded-lg border-indigo-500 border-dashed border-4 p-1 w-6/6 relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5 opacity-0 hover:opacity-100 transition-opacity   ">
                <a href={deploy} target="_blank" className="bg-cyan-500 text-white px-4 py-1 rounded transition duration-300 ease-in-out w-2/6 text-center opacity-100 truncate hover:bg-indigo-500">{`Visit ${name}`} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 inline-block ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
            </a>
            {repository.map(repo => {
                return (
                    <a href={repo} target="_blank" className="bg-cyan-500 text-white px-4 py-1 rounded transition duration-300 ease-in-out w-2/6 text-center truncate hover:bg-indigo-500" >Code <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 inline-block ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg></a>
                )
            })}
            </div>
            <img className="transition-opacity hover:opacity-70" src={image} alt={`${name} media`} />
          </div>
        </article>
      );
    
}

export default ProjectCard;