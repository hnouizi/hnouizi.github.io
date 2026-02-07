import ExperienceDropdown from "./ExperienceDropdown";
import Heading from "./Heading";
import { experiences } from "../data/experiences.tsx";

const Experience = () => {
    
    return (
        <div className="mt-30">
            <Heading>
                Experience
            </Heading>
            <div className="flex flex-col gap-2">
                {experiences.map((exp) => (
                    <ExperienceDropdown
                        position={exp.position}
                        organization={exp.organization}
                        duration={exp.duration}
                        details={exp.details}
                        key={exp.position + exp.organization}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience;