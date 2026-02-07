import { FaGraduationCap } from "react-icons/fa6";

type EducationSectionProps = {
    degree: string,
    school: string,
    gradDate: string
}

const EducationSection = ({ degree, school, gradDate }: EducationSectionProps) => {
    return (
        <div className="w-full flex items-center gap-4 p-4 sm:p-5 rounded border-1 border-darkgray-80 bg-white/5 hover:bg-white/6 cursor-pointer hover:scale-102 transition-all duration-75">
            <div className="h-fit p-2 bg-cobaltblue border-4 rounded-full">
                <FaGraduationCap className="text-2xl"/>
            </div>
            <div>
                <div className="text-lg font-bold">
                    {degree}
                </div>
                <div className="flex items-center text-xs gap-2 text-darkgray-50 font-medium">
                    <div>
                        {school}
                    </div>
                    <div className="h-[0.4rem] w-[0.4rem] sm:h-2 sm:w-2 rounded-full bg-lightorange"/>
                    <div>
                        {gradDate}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationSection;