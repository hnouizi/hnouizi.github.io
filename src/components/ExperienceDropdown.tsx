import { useState, type ReactNode } from "react";
import { FaBriefcase, FaChevronDown } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

type ExperienceDropdownProps = {
    position: string,
    organization: string,
    duration: string,
    details: ReactNode[]
}

const ExperienceDropdown = ({
    position,
    organization,
    duration,
    details
}: ExperienceDropdownProps) => {
    const [ isExpanded, setIsExpanded ] = useState<boolean>(false);

    return (
        <div
            className="w-full p-4 sm:p-5 rounded border-1 border-darkgray-80 bg-white/5 hover:bg-white/7 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="max-sm:hidden p-2 bg-cobaltblue border-4 rounded-full">
                        {position === "Secretary"
                            ? <FaUserGroup className="text-xl sm:text-2xl"/>
                            : <FaBriefcase className="text-xl sm:text-2xl"/>
                        }
                        
                    </div>
                    <div>
                        <div className="text-xl font-bold">
                            {position}
                        </div>
                        <div className="flex text-xs sm:text-sm items-center gap-2 text-darkgray-50 font-medium">
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
            <div className={`grid transition-all duration-200 ease-in-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                    <div className="text-xs mt-3 sm:mt-4 mr-10 sm:ml-18">
                        <hr className="text-darkgray-80 mt-5 mb-3"/>
                        <ul className="list-disc ml-6 flex flex-col gap-1">
                            {details.map((detail, i) => (
                                <li key={i}>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceDropdown;