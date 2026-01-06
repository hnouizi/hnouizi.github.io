type HomeProps = {
    isSmallScreen: boolean
}
const Home = ({ isSmallScreen }: HomeProps) => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className={`flex justify-center items-center ${isSmallScreen ? "flex-col gap-10" : "gap-15"}`}>
                <div className={`${isSmallScreen ? "w-2/3 max-w-130" : "w-80"}`}>
                    <img className="rounded-full" src="headshot.png"/>
                </div>
                <div className={`flex flex-col ${isSmallScreen && "text-center"}`}>
                    <div className="text-5xl font-bold">
                        Hanna Nouizi
                    </div>
                    <div className="text-2xl font-semibold text-cobaltblue">
                        Software Engineer
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;