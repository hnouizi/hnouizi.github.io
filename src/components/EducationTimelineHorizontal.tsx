import { IoSchool } from "react-icons/io5";
import EducationSection from "./EducationSection";
import Heading from "./Heading";

const EducationTimelineHorizontal = () => {
    return (
        <div className="min-w-200">
            <Heading>
                Education
            </Heading>

            {/* sections */}
            <div className="w-full flex gap-5 mt-10 mb-10">
                <EducationSection
                    degree="Computer Science, B.S."
                    school="University of California, Irvine"
                    gradDate="December 2025"
                    direction="down"
                />
                <EducationSection
                    degree="Computer Science, A.S."
                    school="Irvine Valley College"
                    gradDate="May 2023"
                    direction="down"
                />
            </div>

            {/* timeline & icons */}
            <div className="w-full relative flex items-center">
                <div className="w-full border-5 rounded"/>
                <div className="absolute left-42 bg-cobaltblue p-2 rounded-full border-5">
                    <IoSchool className="text-3xl"/>
                </div>
                <div className="absolute right-42 bg-cobaltblue p-2 rounded-full border-5">
                    <IoSchool className="text-3xl"/>
                </div>
            </div>
        </div>
    )
}

export default EducationTimelineHorizontal;