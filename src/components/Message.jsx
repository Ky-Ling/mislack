import React from 'react';
import styled from 'styled-components';

const Message = ({ message, timestamp, user, userImage }) => {
	return (
		<MessageWrapper>
			<img src={userImage} alt="user" />
			<MessageInfo>
				<h4>
					{user}
					<span>{new Date(timestamp?.toDate()).toUTCString()} </span>
				</h4>
				<p>{message}</p>
			</MessageInfo>
		</MessageWrapper>
	);
};

export default Message;

const MessageWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;

	> img {
		height: 50px;
		border-radius: 8px;
	}
`;
const MessageInfo = styled.div`
	padding-left: 10px;
	> h4 > span {
		color: gray;
		font-weight: 300px;
		margin-left: 4px;
		font-size: 10px;
	}
`;
