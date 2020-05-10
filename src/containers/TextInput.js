import React from 'react';
import { InputForm } from '../style';
import PropTypes from 'prop-types';

const TextInput = ({
	name,
	label,
	onChange,
	placeholder,
	value,
	error,
	type,
}) => {
	return (
		<InputForm
			name={name}
			label={label}
			placeholder={placeholder}
			value={value}
			type={type}
			onChange={onChange}
			error={error}
		/>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
};

export default TextInput;
