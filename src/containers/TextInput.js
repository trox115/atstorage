import React from 'react';
import PropTypes from 'prop-types';
import { InputForm } from '../style';

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  type,
}) => (
  <InputForm
    name={name}
    label={label}
    placeholder={placeholder}
    value={value}
    type={type}
    onChange={onChange}
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
