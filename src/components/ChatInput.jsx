import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { db } from '../firebase';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';

const ChatInput = ({ channelId, channelName, chatRef }) => {
	const [input, setInput] = useState('');

	const handleMessageSend = (e) => {
		e.preventDefault();

		if (!channelId) {
			return;
		}

		const roomDocRef = doc(db, 'rooms', channelId);

		const messageCollectionRef = collection(roomDocRef, 'messages');
		addDoc(messageCollectionRef, {
			message: input,
			timestamp: serverTimestamp(),
			user: user?.displayName,
			userImage: user?.photoURL,
		});

		chatRef?.current?.scrollIntoView({
			behavior: 'smooth',
		});

		setInput('');
	};

	return (
		<ChatInputWrapper>
			<form>
				<input
					value={input}
					placeholder={`Message # ${channelName}`}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button hidden type="submit" onClick={handleMessageSend}>
					Send
				</Button>
			</form>
		</ChatInputWrapper>
	);
};

export default ChatInput;

const ChatInputWrapper = styled.div`
	border-radius: 20px;
	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}
	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid gray;
		border-radius: 3px;
		padding: 20px;
		outline: none;
	}
	> form > button {
		display: none !important;
	}
`;
