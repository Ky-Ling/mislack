import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
	const handleSignIn = async (e) => {
		e.preventDefault();

		signInWithPopup(auth, provider).catch((error) => alert(error.message));
	};

	return (
		<LoginWrapper>
			<LoginInnerWrapper>
				<img
					src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
					alt="logo"
				/>
				<h1>Sign In to Slack </h1>
				<p>mirid.slack.com</p>
				<Button onClick={handleSignIn}>Sign in with Google</Button>
			</LoginInnerWrapper>
		</LoginWrapper>
	);
};

export default Login;

const LoginWrapper = styled.div`
	background-color: #f8f8f8;
	height: 100vh;
	display: grid;
	place-items: center;
`;

const LoginInnerWrapper = styled.div`
	padding: 100px;
	text-align: center;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	> img {
		object-fit: contain;
		height: 100px;
		margin-bottom: 40px;
	}

	> button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #0a8d48 !important;
		color: white;
	}
`;
