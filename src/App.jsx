import { useState, useEffect } from "react";
import Home from "./pages/Home/index";
import "./App.css";
import { ThemeProvider } from "./context";

function App() {
	// const [location, setLocation] = useState();

	// useEffect(() => {
	// 	fetch("http://ip-api.com/json/?fields=61439")
	// 		.then((res) => res.json())
	// 		.then((data) => setLocation(data?.country));
	// }, []);
	// console.log(location);

	return (
		<div className="App">
			<ThemeProvider>
				<Home />
			</ThemeProvider>
		</div>
	);
}

export default App;
