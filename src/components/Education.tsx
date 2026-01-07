import { useMediaQuery } from "react-responsive";
import EducationTimelineHorizontal from "./EducationTimelineHorizontal";
import EducationTimelineVertical from "./EducationTimelineVertical";

const Education = () => {
    const showVerticalTimeline = useMediaQuery({query: '(max-width: 820px)'});
    
    return (
        <div className="w-full flex justify-center items-center">
            {showVerticalTimeline
                ? <EducationTimelineVertical/>
                : <EducationTimelineHorizontal/>
            }
        </div>
    )
}

export default Education;