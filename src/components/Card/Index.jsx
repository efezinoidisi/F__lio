import styles from "./style.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../../context";

const Card = ({ name, github, live, details, img }) => {
	const darkTheme = useTheme();
	return (
		<div className={darkTheme ? styles.container : styles.container_light}>
			<div className={styles.image_wrap}>
				<img src={img} alt="project display" className={styles.image} />
			</div>
			<div className={styles.content}>
				<h2 className={styles.heading}>{name}</h2>
				<p>{details}</p>
				<div className={styles.links}>
					<a href={live} title="view work">
						<FaExternalLinkAlt className={styles.social} />
					</a>

					<a href={github} title="source code">
						<FaGithub className={styles.social} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
