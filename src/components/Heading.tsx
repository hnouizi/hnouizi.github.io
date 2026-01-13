import type { ReactNode } from "react";

type HeadingProps = {
    children: ReactNode
}

const Heading = ({ children }: HeadingProps) => {
    return (
        <div className="w-fit flex flex-col items-center text-4xl font-bold my-10">
            {children}
            <div className="border-b-5 w-4/5 mt-[0.1rem] rounded border-lightorange"/>
        </div>
    )
}

export default Heading;