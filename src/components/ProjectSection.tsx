import SkillTag from "./SkillTag";

type ProjectSectionProps = {
    title: string,
    description: string,
    skills: string[]
}

const ProjectSection = ({ title, description, skills }: ProjectSectionProps) => {
    return (
        <div className="w-full flex flex-col gap-3 p-4 sm:p-5 rounded border-1 border-darkgray-80 bg-white/5 hover:bg-white/6 cursor-pointer hover:scale-102 transition-all duration-75">
            <div className="text-lg xs:text-xl sm:text-2xl font-bold">
                {title}
            </div>
            <div className="text-xs sm:text-sm">
                {description}
            </div>
            <div className="w-full flex flex-wrap gap-2">
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