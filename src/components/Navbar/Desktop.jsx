import styles from "./style.module.css";

const Desktop = () => {
	return (
        <nav className={styles.nav_desktop}>
			<ul>
				<li>
					<a href="#about">About Me</a>
				</li>

				<li>
					<a href="#projects">Projects</a>
				</li>

				<li>
					<a href="#contact">Contact Me</a>
				</li>
			</ul>
		</nav>
	);
};

export default Desktop;
