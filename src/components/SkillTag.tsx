import type { ReactNode } from "react";
import { FaHtml5 } from "react-icons/fa";

type SkillTagProps = {
    skill: string
}

const SkillTag = ({skill}: SkillTagProps) => {
    const SKILL_MAP: {[key: string] : {icon: ReactNode, styles: string}} = {
        "html": {
            icon: <FaHtml5 className="text-html-tag"/>,
            styles: "text-[#E44D26] bg-[#E44D26]/10"
        }

    }

    return (
        <div className={`flex gap-1 items-center ${SKILL_MAP[skill.toLowerCase()].styles} px-2 py-1 rounded-full text-xs`}>
            {SKILL_MAP[skill.toLowerCase()].icon}
            {skill}
        </div>
    )
}

export default SkillTag;