import React from 'react';
import styled from 'styled-components';
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks';
import { doc, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { selectedRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import Message from './Message';

const Chat = () => {
	const roomId = useSelector(selectedRoomId);
	let roomDocRef;
	let roomMessagesRef;
	let messageQuery;

	if (roomId) {
		roomDocRef = doc(db, 'rooms', roomId);
		roomMessagesRef = collection(roomDocRef, 'message');
		messageQuery = query(roomMessagesRef, orderBy('timestamp', 'asc'));
	}

	const [roomDetails] = useDocumentData(roomDocRef);
	const [roomMessages] = useCollectionData(messageQuery);

	return (
		<ChatWrapper>
			<Header>
				<HeaderLeft>
					<h4>
						<strong># {roomDetails?.name}</strong>
					</h4>
					<StarBorderOutlined />
				</HeaderLeft>
				<HeaderRight>
					<p>
						<InfoOutlined /> Details
					</p>
				</HeaderRight>
			</Header>
			<ChatMessages>
				{roomMessages?.docs.map((doc) => {
					const { message, timestamp, user, userImage } = doc;
					return (
						<Message
							key={doc.id}
							message={message}
							timestamp={timestamp}
							user={user}
							userImage={userImage}
						/>
					);
				})}
			</ChatMessages>
			<ChatInput channelId={roomId} channelName={roomDetails?.name} />
		</ChatWrapper>
	);
};

export default Chat;

const ChatWrapper = styled.div`
	flex: 0, 7;
	flex-grow: 1;
	overflow-y: scroll;
	margin-top: 60px;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
	display: flex;
	align-items: center;

	> h4 {
		display: flex;
		text-transform: lowercase;
		margin-right: 10px;
	}

	> h4 > .MuiSvgIcon-root {
		margin-left: 10px;
		font-size: 18px;
	}
`;
const HeaderRight = styled.div`
	> p {
		display: flex;
		align-items: center;
		font-size: 14px;
	}

	> p > .MuiSvgIcon-root {
		margin-right: 5px !important;
		font-size: 16px;
	}
`;
const ChatMessages = styled.div``;
