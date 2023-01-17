import React from "react";

const Input = ({ id, title, type, placeholder, value, handleChange }) => {
	return (
		<div>
			<label htmlFor={id}>{title}</label>
			<input
				type={type}
				name={id}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Input;
