import styles from "./style.module.css";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { useTheme } from "../../context";

const Mobile = ({ showModal, setShowModal }) => {
	const toggleModal = () => {
		setShowModal((prev) => !prev);
	};
	
	const darkTheme = useTheme()

	return (
		<div className={styles.nav_mobile}>
			{showModal ? (
				<TfiClose onClick={toggleModal} />
			) : (
				<TfiMenu style={darkTheme?{color:"#fff"}:{ color: "#fff" }} onClick={toggleModal} />
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
