import { useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import styles from "./style.module.css";
import { useTheme } from "../../context";

const Navbar = () => {
	const [showModal, setShowModal] = useState(false);
	const darkTheme = useTheme();
	return (
		<header className={darkTheme ? styles.container : styles.container_light}>
			<h2>Zee</h2>
			<Mobile showModal={showModal} setShowModal={setShowModal} />
			<Desktop />
		</header>
	);
};

export default Navbar;
