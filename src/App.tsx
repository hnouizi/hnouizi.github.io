import "./App.css";
import Header from "./components/Header";
import { useMediaQuery } from "react-responsive";
import { IoMenu } from "react-icons/io5";

const App = () => {
	const isSmallScreen = useMediaQuery({query: '(max-width: 600px)'});

	return (
		<div className="bg-radial from-neutral-100/3 to-neutral-100/0">
			{!isSmallScreen 
				? (
					<div className="w-full flex justify-center mt-5">
						<Header/>
					</div>
				)
				: (
					<div className="ml-4 mt-4">
						<button>
							<IoMenu className="text-4xl"/>
						</button>
					</div>
				)
			}

			{/* Home Page */}
			<div className="w-screen h-screen">
			</div>
		</div>
	)
}

export default App;
