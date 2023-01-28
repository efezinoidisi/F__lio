import { useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import styles from "./style.module.css";
import { useTheme } from "../../context";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Index";

const Navbar = () => {
	const [showModal, setShowModal] = useState(false);
	const darkTheme = useTheme();
	return (
		<header className={darkTheme ? styles.container : styles.container_light}>
			<h2 className={styles.heading}>
				<Link to={"/"}>Zee</Link>
			</h2>
			<Mobile showModal={showModal} setShowModal={setShowModal} />
			<Desktop />
			<Sidebar/>
		</header>
	);
};

export default Navbar;
