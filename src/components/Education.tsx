import EducationSection from "./EducationSection";
import Heading from "./Heading";

const Education = () => {
    
    return (
        <div
            id="education"
            className="pt-20"
        >
            <Heading>
                Education
            </Heading>
            <div className="flex max-sm:flex-col gap-2">
                <EducationSection
                    degree="Computer Science, B.S."
                    school="UC Irvine"
                    gradDate="Dec 2025"
                />
                <EducationSection
                    degree="Computer Science, A.S."
                    school="Irvine Valley College"
                    gradDate="May 2023"
                />
            </div>
        </div>
    )
}

export default Education;