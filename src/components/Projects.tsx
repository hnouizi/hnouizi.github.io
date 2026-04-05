import Heading from "./Heading";
import ProjectSection from "./ProjectSection";

const Projects = () => {
    return (
        <div className="mt-30">
            <Heading>
                Projects
            </Heading>
            <div className="flex flex-col gap-1">
                <ProjectSection
                    title="Fabflix"
                    duration="April - June 2025"
                    description="A full-stack web application that allows users to search for, browse, and purchase movies"
                    skills={["HTML", "CSS", "Javascript", "Java", "Tomcat", "MySQL", "AWS"]}
                />
            </div>
        </div>
    )
}

export default Projects;