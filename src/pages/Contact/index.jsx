import Input from "../../components/Input/Index";
import styles from "./style.module.css";

const index = () => {
	const data = [
		{
			id: "fullname",
			title: "Name",
			type: "text",
			placeholder: "Please enter your fullname",
		},
		{
			id: "email",
			title: "Email",
			type: "email",
			placeholder: "Please enter your email address",
		},
	];

	return (
		<div>
			<h1>Contact me</h1>

			<form>
				{data.map((item) => (
					<Input
						key={item.id}
						id={item.id}
						type={item.type}
						title={item.title}
						placeholder={item.placeholder}
					/>
				))}

				<div>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="10"
						value={"Hello, I would love to ..."}
					></textarea>
				</div>
			</form>
		</div>
	);
};

export default index;
