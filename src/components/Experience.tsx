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
                description="
                Ware Malcomb is a commercial real estate design firm that specializes
                in many fields including architecture, interiors, and civil engineering.
                "
            />
        </div>
    )
}

export default Experience;