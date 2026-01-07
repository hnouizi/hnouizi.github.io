import EducationTimelineHorizontal from "./EducationTimelineHorizontal";
import EducationTimelineVertical from "./EducationTimelineVertical";

type EducationProps = {
    isSmallScreen: boolean
}

const Education = ({ isSmallScreen }: EducationProps) => {
    
    return (
        <div className="w-full flex justify-center items-center mt-10">
            {isSmallScreen
                ? <EducationTimelineVertical/>
                : <EducationTimelineHorizontal/>
            }
        </div>
    )
}

export default Education;