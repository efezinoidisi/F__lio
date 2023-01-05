import styles from "./style.module.css";
import { TfiMenu, TfiClose } from "react-icons/tfi";

const Mobile = ({ showModal, setShowModal }) => {
	const toggleModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<div className={styles.nav_mobile}>
			{showModal ? (
				<TfiClose onClick={toggleModal} />
			) : (
				<TfiMenu style={{ color: "#110111" }} onClick={toggleModal} />
			)}
			{showModal && (
				<nav className={styles.nav_mobile_links}>
					<ul>
						<li onClick={toggleModal}>
							<a href="#about">About Me</a>
						</li>

						<li onClick={toggleModal}>
							<a href="#projects">Projects</a>
						</li>

						<li onClick={toggleModal}>
							<a href="#contact">Contact Me</a>
						</li>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default Mobile;
