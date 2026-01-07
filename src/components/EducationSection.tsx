import { GiDiploma } from "react-icons/gi";

type EducationSection = {
    degree: string,
    school: string,
    gradDate: string
    direction: string
}

const EducationSection = ({ degree, school, gradDate, direction }: EducationSection) => {
    return (
        <div className={`flex-1 ${direction === "left" && "flex justify-center items-center"}`}>
            {direction === "left" && (
                <div className="h-full flex items-center">
                    <div className={`left-triangle border-white/5`}/>
                </div>
            )}
            <div className="bg-white/5 px-8 py-5 rounded-lg">
                <div className="text-lg sm:text-2xl font-semibold">
                    {degree}
                </div>
                <div className="text-sm sm:text-xl font-medium text-darkgray-35 italic mb-2">
                    {school}
                </div>
                <div className="flex items-center text-darkgray-50 font-medium gap-2 text-sm sm:text-xl">
                    <GiDiploma className="text-2xl"/>
                    {gradDate}
                </div>
            </div>
            {direction === "down" && (
                <div className="w-full flex justify-center items-center">
                    <div className={`triangle-down border-white/5`}/>
                </div>
            )}
        </div>
    )
}

export default EducationSection;