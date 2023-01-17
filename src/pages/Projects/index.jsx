import styles from "./style.module.css";
import projects from "./data";
import Card from "../../components/Card/Index";
const index = () => {
	const projectsCard = projects.map((project) => (
		<Card key={project.id} {...project} />
	));

	return (
		<div>
			<h1>My projects</h1>
			{projectsCard}
		</div>
	);
};

export default index;
