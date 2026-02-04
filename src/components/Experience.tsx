import ExperienceDropdown from "./ExperienceDropdown";
import Heading from "./Heading";
import experiences from "../data/experiences.json";

const Experience = () => {
    
    return (
        <div>
            <Heading>
                Experience
            </Heading>
            <div className="flex flex-col gap-2 mb-100">
                {experiences.map((exp) => (
                    <ExperienceDropdown
                        position={exp.position}
                        organization={exp.organization}
                        duration={exp.duration}
                        details={exp.details}
                        key={exp.details[0]}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience;