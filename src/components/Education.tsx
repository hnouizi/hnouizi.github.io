import { useMediaQuery } from "react-responsive";
import HorizontalEducationTimeline from "./HorizontalEducationTimeline";

const Education = () => {
    const showVerticalTimeline = useMediaQuery({query: '(max-width: 820px)'});
    
    return (
        <div className="w-full flex justify-center items-center mt-10 mb-15">
            {showVerticalTimeline
                ? <div> wip </div>
                : <HorizontalEducationTimeline/>
            }
        </div>
    )
}

export default Education;