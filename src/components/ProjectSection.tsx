import { FaCalendar } from "react-icons/fa";
import SkillTag from "./SkillTag";

type ProjectSectionProps = {
    title: string,
    duration: string,
    description: string,
    skills: string[]
}

const ProjectSection = ({ title, duration, description, skills }: ProjectSectionProps) => {
    return (
        <div className="w-full flex flex-col gap-3 p-4 sm:p-5 rounded border-1 border-darkgray-80 bg-white/5 hover:bg-white/6 cursor-pointer hover:scale-102 transition-all duration-75">
            <div className="w-full flex justify-between">
                <div className="text-2xl font-bold">
                    {title}
                </div>
                <div className="flex items-center gap-2 text-sm text-darkgray-50 font-medium">
                    <div className="p-[0.3rem] bg-darkgray-50 rounded-full">
                        <FaCalendar className="text-xs text-neutral-100"/>
                    </div>
                    {duration}
                </div>
            </div>
            <div className="text-sm font-medium">
                {description}
            </div>
            <div className="w-full flex flex-wrap gap-1">
                {skills.map((skill) => (
                    <SkillTag
                        key={`${title}:${skill}`}
                        skill={skill}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectSection;