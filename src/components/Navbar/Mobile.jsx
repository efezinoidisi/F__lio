import styles from "./style.module.css";
import { FaGithub, FaTwitter } from "react-icons/fa";

import { TfiMenu, TfiClose } from "react-icons/tfi";
import { useTheme, useToggle } from "../../context";

import {Link} from "react-router-dom"

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
				<nav
					className={darkTheme ? styles.nav_mobile_links : styles.nav_mobile_links_light}
				>
					<ul>
						<li onClick={toggleModal}>
							<Link to={"/"}> Home</Link>
						</li>
						<li onClick={toggleModal}>
							<Link to={"/about"}> About Me</Link>
						</li>

						<li onClick={toggleModal}>
							<Link to={"/projects"}> Projects</Link>
						</li>

						<li onClick={toggleModal}>
							<Link to={"/contact"}> Contact Me</Link>
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
