import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { db } from '../firebase';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';

const ChatInput = ({ channelId, channelName, chatRef }) => {
	const [input, setInput] = useState('');

	const handleMessageSend = (e) => {
		e.preventDefault();

		if (!channelId) return;
		const roomDocRef = doc(db, 'rooms', channelId);
		const messagesCollectionRef = collection(roomDocRef, 'messages');

		addDoc(messagesCollectionRef, {
			message: input,
			timestamp: serverTimestamp,
			user: 'Torrid',
			userImage:
				'https://lh3.googleusercontent.com/a/AGNmyxZNs7HQmu5oNwI4ltirWc1v8Q7weLbgcPDDywT6=s360',
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
					placeholder={`Message #${channelName}`}
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
		align-items: center;
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
