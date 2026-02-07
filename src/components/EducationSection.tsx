import { FaGraduationCap } from "react-icons/fa6";

const EducationSection = () => {
    return (
        <div className="w-full flex items-center gap-6 p-4 sm:p-5 rounded border-1 border-darkgray-80 bg-white/5 hover:bg-white/6 cursor-pointer hover:scale-102 transition-all duration-75">
            <div className="h-fit p-2 bg-cobaltblue border-4 rounded-full">
                <FaGraduationCap className="text-xl sm:text-2xl"/>
            </div>
            <div>
                <div className="text-xl font-bold">
                    Computer Science, B.S.
                </div>
                <div className="flex items-center text-xs sm:text-sm gap-2 text-darkgray-50 font-medium">
                    <div>
                        UC Irvine
                    </div>
                    <div className="h-[0.4rem] w-[0.4rem] sm:h-2 sm:w-2 rounded-full bg-lightorange"/>
                    <div>
                        May 2023
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationSection;