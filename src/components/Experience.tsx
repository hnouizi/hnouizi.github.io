import ExperienceDropdown from "./ExperienceDropdown";
import Heading from "./Heading";

const Experience = () => {
    return (
        <div>
            <Heading>
                Experience
            </Heading>
            <ExperienceDropdown
                position="Software Engineer"
                organization="Ware Malcomb"
                duration="Feb 2026 - Present"
            />
        </div>
    )
}

export default Experience;