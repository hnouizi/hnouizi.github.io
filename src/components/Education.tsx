import EducationSection from "./EducationSection";
import Timeline from "./Timeline/Timeline";

type EducationProps = {
    isSmallScreen: boolean
}

const Education = ({ isSmallScreen }: EducationProps) => {
    
    return (
        <div className="w-full flex justify-center items-center mt-10">
            <Timeline isVertical={isSmallScreen}>
                <EducationSection
                    degree="Computer Science, B.S."
                    school="University of Calfiornia, Irvine"
                    gradDate="December 2025"
                    direction={isSmallScreen ? "left" : "down"}
                />
                <EducationSection
                    degree="Computer Science, A.S."
                    school="Irvine Valley College"
                    gradDate="May 2023"
                    direction={isSmallScreen ? "left" : "down"}
                />
            </Timeline>
        </div>
    )
}

export default Education;