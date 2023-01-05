import React from "react";

const Input = ({ id, title, type, placeholder }) => {
	return (
		<div >
			<label htmlFor={id}>{title}</label>
			<input type={type} name={id} id={id} placeholder={placeholder} />
		</div>
	);
};

export default Input;
