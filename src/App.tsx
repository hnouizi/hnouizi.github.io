import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "react-responsive";

const App = () => {
	const isSmallScreen = useMediaQuery({query: '(max-width: 600px)'});

	return (
		<div className="relative">
			{!isSmallScreen 
				? <Header/>
				: <Sidebar/>
			}
		</div>
	)
}

export default App;
