import EducationSection from "./EducationSection";
import Heading from "./Heading";

const Education = () => {
    
    return (
        <div>
            <Heading>
                Education
            </Heading>
            <div className="flex max-sm:flex-col">
                <EducationSection/>
            </div>
        </div>
    )
}

export default Education;