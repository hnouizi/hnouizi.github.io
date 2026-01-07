import Heading from "./Heading";
import { IoSchool } from "react-icons/io5";

const Education = () => {
    return (
        <div>
            <div className="w-full flex justify-center items-center mt-15 mb-15">
                <div className="w-200">
                    <Heading>
                        Education
                    </Heading>

                    {/* sections */}
                    <div className="w-full flex mt-10 mb-10">
                        <div className="w-1/2">
                            <div className="bg-white/5 mr-5 rounded-lg px-8 py-5">
                                 <div className="text-2xl font-semibold">
                                    Computer Science, A.S.
                                </div>
                                <div className="text-xl font-medium text-darkgray-35 italic mb-2">
                                    Irvine Valley College
                                </div>
                                <div className="flex items-center text-darkgray-50 font-medium gap-2">
                                    <IoSchool className="text-xl"/>
                                    May 2023
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <div className="downward-triangle border-white/5 mr-5"/>
                            </div>
                        </div>
                        <div className="w-1/2 bg-white/5 ml-5 rounded p-5">
                            uci
                        </div>
                    </div>

                    {/* timeline & icons */}
                    <div className="w-full relative flex items-center">
                        <div className="w-full border-5 rounded"/>
                        <div className="absolute left-1/5 bg-cobaltblue p-2 rounded-full border-5">
                            <IoSchool className="text-3xl"/>
                        </div>
                        <div className="absolute right-1/5 bg-cobaltblue p-2 rounded-full border-5">
                            <IoSchool className="text-3xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;