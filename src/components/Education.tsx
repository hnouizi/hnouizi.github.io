import EducationSection from "./EducationSection";
import Heading from "./Heading";
import Timeline from "./Timeline/Timeline";

type EducationProps = {
    isSmallScreen: boolean
}

const Education = ({ isSmallScreen }: EducationProps) => {
    
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-fit">
                <Heading>
                    Education
                </Heading>
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
        </div>
    )
}

export default Education;