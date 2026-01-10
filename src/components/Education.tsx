import Timeline from "./Timeline/Timeline";

type EducationProps = {
    isSmallScreen: boolean
}

const Education = ({ isSmallScreen }: EducationProps) => {
    
    return (
        <div className="w-full flex justify-center items-center mt-10">
            <Timeline isVertical={isSmallScreen}/>
        </div>
    )
}

export default Education;