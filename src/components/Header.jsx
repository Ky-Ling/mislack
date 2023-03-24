import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { AccessTimeOutlined } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { HelpOutline } from '@mui/icons-material';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
	const [user] = useAuthState(auth);
	return (
		<HeaderWrapper>
			<HeaderLeft>
				<HeaderAvatar
					src={user?.photoURL}
					alt={user?.displayName}
					onClick={() => signOut(auth)}
				/>

				<AccessTimeOutlined />
			</HeaderLeft>
			<HeaderSearch>
				<Search />
				<input placeholder="Search here..." />
			</HeaderSearch>
			<HeaderRight>
				<HelpOutline />
			</HeaderRight>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	background-color: var(--slack-color);
	color: white;
`;
const HeaderLeft = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 20px;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 30px;
	}
`;
const HeaderAvatar = styled(Avatar)`
	cursor: pointer;

	:hover {
		opacity: 0.8px;
	}
`;

const HeaderSearch = styled.div`
	flex: 0.4;
	display: flex;
	opacity: 1;
	border-radius: 6px;
	border-color: #421f44;
	text-align: center;
	padding: 0 50px;
	color: gray;
	border: 1px gray solid;

	> input {
		background-color: transparent;
		border: none;
		text-align: center;
		min-width: 30vw;
		outline: none;
		color: white;
	}
`;
const HeaderRight = styled.div`
	flex: 0.3;
	display: flex;
	align-items: flex-end;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`;
