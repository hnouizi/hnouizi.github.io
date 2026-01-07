import { GiDiploma } from "react-icons/gi";

type EducationSection = {
    degree: string,
    school: string,
    gradDate: string
    direction: string
    isSuperSmallScreen?: boolean
}

const EducationSection = ({ degree, school, gradDate, direction, isSuperSmallScreen }: EducationSection) => {
    return (
        <div className={`flex-1 ${direction === "left" && "flex justify-center items-center"}`}>
            {direction === "left" && (
                <div className="h-full flex items-center">
                    <div className={`left-triangle border-white/5`}/>
                </div>
            )}
            <div className="bg-white/5 px-8 py-5 rounded-lg">
                <div className={`${isSuperSmallScreen ? "text-lg" : "text-2xl"} font-semibold`}>
                    {degree}
                </div>
                <div className={`${isSuperSmallScreen ? "text-sm" : "text-lg"} font-medium text-darkgray-35 italic mb-2`}>
                    {school}
                </div>
                <div className={`flex items-center text-darkgray-50 font-medium gap-2 ${isSuperSmallScreen ? "text-sm" : "text-base"}`}>
                    <GiDiploma className={`${isSuperSmallScreen ? "text-xl" : "text-2xl"}`}/>
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