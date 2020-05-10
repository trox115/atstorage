import styled from 'styled-components';
import Background from './assets/images/background.jpg';

export const LoginImage = styled.div`
	min-width: 100%;
	height: 100vh;
	background-image: url(${Background});
	background-size: containt;
`;

export const LoginContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	text-align: center;
`;
export const LoginLogo = styled.figure`
	width: 100%;

	img {
		height: 150px;
	}
`;

export const InputForm = styled.input`
	background-image: linear-gradient(#fb9678, #fb9678),
		linear-gradient(#e9ecef, #e9ecef);
	border: 0;
	border-radius: 0;
	box-shadow: none;
	float: none;
	background-color: rgba(0, 0, 0, 0);
	background-position: center bottom, center calc(100% - 1px);
	background-repeat: no-repeat;
	background-size: 0 2px, 100% 1px;
	padding: 0;
	transition: background 0s ease-out 0s;
	width: 100%;
	margin-top: 20px;
`;

export const StyledForm = styled.form`
	button {
		margin-top: 30px;
		width: 100%;
	}
`;
