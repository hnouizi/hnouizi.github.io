import { GiDiploma } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";

type EducationSection = {
    degree: string,
    school: string,
    gradDate: string
    direction: string
}

const EducationSection = ({ degree, school, gradDate, direction }: EducationSection) => {
    const isSmallScreen = useMediaQuery({query: '(max-width: 455px)'});
    const isExtraSmallScreen = useMediaQuery({query: '(max-width: 390px)'});
    const isExtraExtraSmallScreen = useMediaQuery({query: '(max-width: 370px)'});

    return (
        <div className={`${direction === "left" && "flex justify-center items-center"}`}>
            {direction === "left" && (
                <div className="h-full flex items-center">
                    <div className={`left-triangle border-white/5`}/>
                </div>
            )}
            <div className="bg-white/5 px-8 py-5 rounded-lg">
                <div className={`${isExtraExtraSmallScreen ? "text-sm" : isExtraSmallScreen ? "text-base" : isSmallScreen ? "text-lg" : "text-2xl"} font-semibold`}>
                    {degree}
                </div>
                <div className={`${isExtraSmallScreen ? "text-xs mb-1" : isSmallScreen ? "text-sm mb-1" : "text-lg mb-2"} font-medium text-darkgray-35 italic`}>
                    {school}
                </div>
                <div className={`${isExtraSmallScreen ? "text-xs" : isSmallScreen ? "text-sm" : "text-base"} flex items-center text-darkgray-50 font-medium gap-2`}>
                    <GiDiploma className={`${isExtraSmallScreen ? "text-lg" : isSmallScreen ? "text-xl" : "text-2xl"}`}/>
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