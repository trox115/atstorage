import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginImage, LoginLogo, LoginContainer } from '../style';
import Logo from '../assets/images/logo.png';
import LoginForm from '../containers/LoginForm';

function LoginPage() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Container fluid>
      <Row>
        <Col md="9" className="p-0">
          <LoginImage />
        </Col>
        <Col md="3">
          <LoginContainer>
            <div>
              <LoginLogo>
                <img src={Logo} alt="NF Logo" />
              </LoginLogo>
              <LoginForm
                input={input}
                onSave={handleSubmit}
                onChange={handleChange}
              />
            </div>
          </LoginContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
