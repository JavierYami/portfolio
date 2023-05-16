

const ProjectCard = ({name, description, image, deploy, repository}) => {
    
    return (
        <article className="grid grid-cols-2 m-20 p-5">
        <div className="w-5/6">
            <h1 className="text-cyan-500 font-bold text-center mb-5">{name}</h1>
            <p className="text-justify">{description}</p>
        </div>
        <div className="rounded-lg border-cyan-500 border-dashed border-4 p-1 w-6/6" >
            <button >Hola</button>
            <img className="transition ease-in hover:opacity-0" src={image} alt={`${name} media`} />
        </div>
    </article>
    )
}

export default ProjectCard;