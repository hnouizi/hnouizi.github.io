import "./App.css";
import Header from "./components/Header";
import { useMediaQuery } from "react-responsive";
import { IoMenu } from "react-icons/io5";

const App = () => {
	const isSmallScreen = useMediaQuery({query: '(max-width: 600px)'});

	return (
		<div className="relative w-screen h-screen">
			{!isSmallScreen 
				? (
					<div className="absolute w-full flex justify-center mt-5">
						<Header/>
					</div>
				)
				: (
					<div className="absolute ml-4 mt-4">
						<button>
							<IoMenu className="text-4xl"/>
						</button>
					</div>
				)
			}
		</div>
	)
}

export default App;
