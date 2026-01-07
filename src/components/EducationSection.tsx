import { IoSchool } from "react-icons/io5";

type EducationSection = {
    degree: string,
    school: string,
    gradDate: string
}

const EducationSection = ({ degree, school, gradDate}: EducationSection) => {
    return (
        <div className="flex-1">
            <div className="bg-white/5 px-8 py-5 rounded-lg">
                    <div className="text-2xl font-semibold">
                    {degree}
                </div>
                <div className="text-xl font-medium text-darkgray-35 italic mb-2">
                    {school}
                </div>
                <div className="flex items-center text-darkgray-50 font-medium gap-2">
                    <IoSchool className="text-xl"/>
                    {gradDate}
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className={`downward-triangle border-white/5`}/>
            </div>
        </div>
    )
}

export default EducationSection;