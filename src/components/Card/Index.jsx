const Card = ({ name, github, live, details, img }) => {
	return (
		<div>
			<h2>{name}</h2>
			<img src={img} alt="project display" />
			<p>{details}</p>
			<div>
				<a href={github}>Github</a>
				<a href={live}>Livesite</a>
			</div>
		</div>
	);
};

export default Card;
