import { useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import styles from "./style.module.css";

const Navbar = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<header className={styles.container}>
			<h2>Zee</h2>
			<Mobile showModal={showModal} setShowModal={setShowModal} />
			<Desktop />
		</header>
	);
};

export default Navbar;
