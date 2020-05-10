import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from '../style';
import TextInput from './TextInput';

const LoginForm = ({
  onSave,
  onChange,
  saving = false,
  input,
  errors = {},
}) => {
  return (
    <StyledForm onSubmit={onSave}>
      <TextInput
        name="email"
        label="Email"
        value={input.email}
        onChange={onChange}
        placeholder="Email"
        type="email"
      />

      <TextInput
        name="password"
        label="Password"
        value={input.password}
        onChange={onChange}
        placeholder="Password"
        type="password"
      />

      <button type="submit" disabled={saving} className="btn btn-outline-dark">
        {saving ? 'A entrar...' : 'Login'}
      </button>
    </StyledForm>
  );
};

export default LoginForm;
