import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { useMediaQuery } from "react-responsive";

const App = () => {
	const isSmallScreen = useMediaQuery({query: '(max-width: 600px)'});

	return (
		<div className="relative bg-radial from-darkgray-97 to-darkgray-100">
			{!isSmallScreen 
				? <Header/>
				: <Sidebar/>
			}

			<Home/>
		</div>
	)
}

export default App;
