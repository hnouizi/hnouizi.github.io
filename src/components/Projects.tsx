import { FaCalendar } from "react-icons/fa";
import Heading from "./Heading";
import SkillTag from "./SkillTag";

const Projects = () => {
    return (
        <div className="mt-30">
            <Heading>
                Projects
            </Heading>
            <div className="w-full flex flex-col gap-3 p-4 sm:p-5 rounded border-1 border-darkgray-80 bg-white/5 hover:bg-white/6 cursor-pointer hover:scale-102 transition-all duration-75">
                <div className="w-full flex justify-between">
                    <div className="text-2xl font-bold">
                        Fabflix
                    </div>
                    <div className="flex items-center gap-2 text-sm text-darkgray-50 font-medium">
                        <div className="p-[0.3rem] bg-darkgray-50 rounded-full">
                            <FaCalendar className="text-xs text-neutral-100"/>
                        </div>
                        April - June 2025
                    </div>
                </div>
                <div className="text-sm font-medium">
                    A full-stack web application that allows users to search for, browse, and purchase movies
                </div>
                <div className="flex gap-1">
                    <SkillTag skill="HTML"/>
                </div>
            </div>
        </div>
    )
}

export default Projects;