import { IoSchool } from "react-icons/io5";
import Heading from "./Heading";
import EducationSection from "./EducationSection";

const EducationTimelineVertical = () => {
    return (
        <div className="w-full flex justify-center">
             <div className="h-100 flex flex-col items-center">
                <div className="w-full ml-15 sm:ml-0">
                    <Heading>
                        Education
                    </Heading>
                </div>

                <div className="h-full w-fit flex mt-10 ml-10 mr-5">
                    {/* timeline & icons */}
                    <div className="flex-1 relative flex justify-center">
                        <div className="h-full border-5 rounded"/>
                        <div className="absolute top-12 bg-cobaltblue p-2 rounded-full border-5">
                            <IoSchool className="text-3xl"/>
                        </div>
                        <div className="absolute bottom-12 bg-cobaltblue p-2 rounded-full border-5">
                            <IoSchool className="text-3xl"/>
                        </div>
                    </div>

                    {/* sections */}
                    <div className="h-full flex flex-col gap-5 ml-10">
                        <EducationSection
                            degree="Computer Science, B.S."
                            school="University of California, Irvine"
                            gradDate="December 2025"
                            direction="left"
                        />
                        <EducationSection
                            degree="Computer Science, A.S."
                            school="Irvine Valley College"
                            gradDate="May 2023"
                            direction="left"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationTimelineVertical;