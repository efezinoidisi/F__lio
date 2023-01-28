import styles from "./style.module.css";
import projects from "./data";
import Card from "../../components/Card/Index";
import { useTheme } from "../../context";
const index = () => {
	const projectsCard = projects.map((project) => (
		<Card key={project.id} {...project} />
	));
	
	const darkTheme = useTheme()

	return (
		<div className={darkTheme?styles.container:styles.container_light}>
			<h2 className={styles.heading}>Projects</h2>
			{projectsCard}
		</div>
	);
};

export default index;
