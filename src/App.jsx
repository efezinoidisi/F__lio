import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Index"
import "./App.css";
import { ThemeProvider } from "./context";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import Hero from "./pages/Hero/Index";
import Navbar from "./components/Navbar/Index";
import Work from "./pages/Projects/Index";
import Footer from "./components/Footer/Index"

	

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
				<Navbar />
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Work />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Home />
				<Footer/>
			</ThemeProvider>
		</div>
	);
}

export default App;
