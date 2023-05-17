import { projects } from "../Utils/projects";
import ProjectCard from "./ProjectCard";

const Projects  = () => {

    return (
        <section className="container mx-auto w-5/6">
            <h1 className="font-black text-cyan-500 text-center mb-5 text-5xl">{'<Projects />'}</h1>
            {projects.map(project =>{
                return(
                <ProjectCard
                name={project.name}
                description={project.description}
                image={project.image}
                deploy={project.deploy}
                repository={project.repository}
                /> 
                )
            })}
        </section>
    )
}

export default Projects;