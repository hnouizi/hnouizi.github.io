import ExperienceDropdown from "./ExperienceDropdown";
import Heading from "./Heading";
import { experiences } from "../data/experiences.tsx";

const Experience = () => {
    
    return (
        <div
            id="experience"
            className="pt-20"
        >
            <Heading>
                Experience
            </Heading>
            <div className="flex flex-col gap-2">
                {experiences.map((exp) => (
                    <ExperienceDropdown
                        key={exp.position + exp.organization}
                        position={exp.position}
                        organization={exp.organization}
                        duration={exp.duration}
                        details={exp.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience;