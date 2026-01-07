import type { ReactNode } from "react";

type HeadingProps = {
    children: ReactNode
}

const Heading = ({ children }: HeadingProps) => {
    return (
        <div className="w-fit flex flex-col items-center text-3xl font-bold">
            {children}
            <div className="border-b-4 w-4/5 rounded border-lightorange"/>
        </div>
    )
}

export default Heading;