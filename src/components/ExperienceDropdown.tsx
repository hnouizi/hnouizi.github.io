import { useState } from "react";
import { FaBriefcase, FaChevronDown } from "react-icons/fa";

type ExperienceDropdownProps = {
    position: string,
    organization: string,
    duration: string
    description: string
}

const ExperienceDropdown = ({ position, organization, duration, description }: ExperienceDropdownProps) => {
    const [ isExpanded, setIsExpanded ] = useState<boolean>(false);

    return (
        <div
            className="w-full p-4 sm:p-5 rounded border-1 border-darkgray-80 bg-white/5 hover:bg-white/6 cursor-pointer hover:scale-102 transition-all duration-75"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="max-sm:hidden p-2 bg-cobaltblue border-4 rounded-full">
                        <FaBriefcase className="text-xl sm:text-2xl"/>
                    </div>
                    <div>
                        <div className="text-xl font-bold">
                            {position}
                        </div>
                        <div className="flex text-xs sm:text-sm items-center gap-2 text-darkgray-50 font-bold">
                            <div>
                                {organization}
                            </div>
                            <div className="h-[0.4rem] w-[0.4rem] sm:h-2 sm:w-2 rounded-full bg-lightorange"/>
                            <div>
                                {duration}
                            </div>
                        </div>
                    </div>
                </div>
                <FaChevronDown className={`flex-none text-darkgray-50 text-xl ${isExpanded && "rotate-180"}`}/>
            </div>
            {isExpanded && (
                <div className="text-xs sm:text-sm font-medium mt-1 sm:ml-18 sm:mt-2 sm:mr-10">
                    {description}
                </div>
            )}
        </div>
    )
}

export default ExperienceDropdown;