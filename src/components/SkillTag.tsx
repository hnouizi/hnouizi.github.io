import type { ReactNode } from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { FaAngular, FaAws, FaGitlab, FaJava, FaPython } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiApachetomcat, SiCplusplus, SiGithub, SiSqlite } from "react-icons/si";

type SkillTagProps = {
    skill: string
}

const SkillTag = ({skill}: SkillTagProps) => {
    const SKILL_MAP: {[key: string] : {icon: ReactNode, styles: string}} = {
        "html": {
            icon: <FaHtml5/>,
            styles: "text-[#E44D26] bg-[#E44D26]/10"
        },
        "css": {
            icon: <FaCss3Alt/>,
            styles: "text-[#1572B6] bg-[#1572B6]/10"
        },
        "javascript": {
            icon: <IoLogoJavascript/>,
            styles: "text-[#F0DB4F] bg-[#F0DB4F]/10"
        },
        "java": {
            icon: <FaJava/>,
            styles: "text-[#EA2D2E] bg-[#EA2D2E]/10"
        },
        "tomcat": {
            icon: <SiApachetomcat/>,
            styles: "text-[#FFDC76] bg-[#FFDC76]/10"
        },
        "mysql": {
            icon: <GrMysql/>,
            styles: "text-[#0080B5] bg-[#0080B5]/10"
        },
        "aws": {
            icon: <FaAws/>,
            styles: "text-[#FF9900] bg-[#FF9900]/10"
        },
        "python": {
            icon: <FaPython/>,
            styles: "text-[#FFDC50] bg-[#FFDC50]/10"
        },
        "angular": {
            icon: <FaAngular/>,
            styles: "text-[#E90765] bg-[#E90765]/10"
        },
        "c++": {
            icon: <SiCplusplus/>,
            styles: "text-[#659AD2] bg-[#659AD2]/10"
        },
        "sqlite3": {
            icon: <SiSqlite/>,
            styles: "text-[#65B8E6] bg-[#65B8E6]/10"
        },
        "github": {
            icon: <SiGithub/>,
            styles: "text-[#F9F9F9] bg-[#F9F9F9]/10"
        },
        "gitlab": {
            icon: <FaGitlab/>,
            styles: "text-[#FCA326] bg-[#FCA326]/10"
        },
        "git": {
            icon: <FaGitAlt/>,
            styles: "text-[#F34F29] bg-[#F34F29]/10"
        }
    }

    const skillKey = skill.toLowerCase();

    if (!Object.keys(SKILL_MAP).includes(skillKey)) {
        console.error(`Skill "${skillKey}" does not exist.`);
        return null;
    }

    return (
        <div className={`flex gap-1 items-center ${SKILL_MAP[skillKey].styles} px-2 py-1 rounded-full text-xs`}>
            {SKILL_MAP[skillKey].icon}
            {skill}
        </div>
    )
}

export default SkillTag;