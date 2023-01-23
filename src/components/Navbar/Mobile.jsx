import styles from "./style.module.css";
import { FaGithub, FaTwitter } from "react-icons/fa";

import { TfiMenu, TfiClose } from "react-icons/tfi";
import { useTheme ,useToggle} from "../../context";

const Mobile = ({ showModal, setShowModal }) => {
	const toggleModal = () => {
		setShowModal((prev) => !prev);
	};

	const darkTheme = useTheme();
	const toggle = useToggle();

	return (
		<div className={styles.nav_mobile}>
			{showModal ? (
				<TfiClose
					style={darkTheme ? { color: "#fff" } : { color: "#fff" }}
					onClick={toggleModal}
		
				/>
			) : (
				<TfiMenu
					style={darkTheme ? { color: "#fff" } : { color: "#fff" }}
					onClick={toggleModal}
				/>
			)}
			{showModal && (
				<nav className={styles.nav_mobile_links}>
					<ul>
						<li onClick={toggleModal}>
							<a href="/about">About Me</a>
						</li>

						<li onClick={toggleModal}>
							<a href="/projects">Projects</a>
						</li>

						<li onClick={toggleModal}>
							<a href="/contact">Contact Me</a>
						</li>
					</ul>

					<div className={styles.sidebar}>
						
						<div className={styles.socials}>
							<a href="/">
								<FaGithub
									className={darkTheme ? styles.socials_d : styles.socials_l}
								/>
							</a>
							<a href="/">
								<FaTwitter
									className={darkTheme ? styles.socials_d : styles.socials_l}
								/>
							</a>
						</div>
					</div>
				</nav>
			)}
		</div>
	);
};

export default Mobile;
