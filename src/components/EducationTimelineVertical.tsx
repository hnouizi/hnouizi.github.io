import { IoSchool } from "react-icons/io5";
import Heading from "./Heading";

const EducationTimelineVertical = () => {
    return (
        <div className="h-110 flex flex-col z-0">
            <Heading>
                Education
            </Heading>

            <div className="h-full flex mt-10">
                {/* timeline & icons */}
                <div className="flex-1 relative flex justify-center">
                    <div className="h-full border-5 rounded"/>
                    <div className="absolute top-15 bg-cobaltblue p-2 rounded-full border-5">
                        <IoSchool className="text-3xl"/>
                    </div>
                    <div className="absolute bottom-15 bg-cobaltblue p-2 rounded-full border-5">
                        <IoSchool className="text-3xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationTimelineVertical;