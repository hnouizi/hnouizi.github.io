import Heading from "./Heading";
import ProjectSection from "./ProjectSection";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div className="mt-30">
            <Heading>
                Projects
            </Heading>
            <div className="flex flex-col gap-2">
                {projects.map((project) => (
                    <ProjectSection
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;