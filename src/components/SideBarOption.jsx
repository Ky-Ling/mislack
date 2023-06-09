import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

const SideBarOption = ({ Icon, title, addChannelOption, id }) => {
	const dispatch = useDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [channelName, setChannelName] = useState('');

	const handleModalClose = () => {
		setIsModalOpen(false);
		setChannelName('');
	};

	const handleSubmit = async (event) => {
		if (event.key === 'Enter') {
			handleModalClose();
			await addDoc(collection(db, 'rooms'), {
				name: channelName,
			});
		}
	};
	const selectChannelHandler = async () => {
		if (id) {
			dispatch(
				enterRoom({
					roomId: id,
				})
			);
		}
	};

	return (
		<>
			<SideBarOptionWrapper
				onClick={
					addChannelOption ? () => setIsModalOpen(true) : selectChannelHandler
				}
			>
				{Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
				{Icon ? (
					<h3>{title}</h3>
				) : (
					<SideBarOptionChannel>
						<span>#</span> {title}
					</SideBarOptionChannel>
				)}
			</SideBarOptionWrapper>
			<Dialog
				open={isModalOpen}
				onClose={handleModalClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'Please enter the channel name'}
				</DialogTitle>
				<DialogContent>
					<TextField
						size="small"
						value={channelName}
						onKeyDown={handleSubmit}
						onChange={(e) => setChannelName(e.target.value)}
						label="Channel name"
						id="outlined-start-adornment"
						sx={{ m: 1, width: '25ch' }}
					/>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default SideBarOption;

const SideBarOptionWrapper = styled.div`
	display: flex;
	font-size: 12px;
	align-items: center;
	padding-left: 2px;
	cursor: pointer;

	:hover {
		opacity: 0.9;
		background-color: #340e36;
	}

	> h3 {
		font-weight: 500;
	}

	> h3 > span {
		padding: 15px;
	}
`;
const SideBarOptionChannel = styled.h3`
	padding: 10px 0;
	font-weight: 300;
`;
