import { Routes, Route, Outlet } from "react-router-dom";
import Change from "./pages/Home/index";
import "./App.css";
import { ThemeProvider } from "./context";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Hero from "./pages/Hero/Hero";
import Navbar from "./components/Navbar";
import Work from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
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
				<Change />
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
