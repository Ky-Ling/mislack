import React from 'react';
import styled from 'styled-components';
import {
	Add,
	Apps,
	BookmarkBorder,
	Drafts,
	ExpandLess,
	ExpandMore,
	FiberManualRecord,
	FileCopy,
	Inbox,
	InsertComment,
	PeopleAlt,
	Create,
} from '@mui/icons-material';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../firebase';

import SideBarOption from './SideBarOption';

const SideBar = () => {
	const [channels, loading, error] = useCollection(collection(db, 'rooms'), {
		snapshotListenOptions: {
			includeMetadataChanges: true,
		},
	});

	return (
		<SideBarWrapper>
			<SideBarHeader>
				<SideBarInfo>
					<h2>PAPA FAM HQ</h2>
					<h3>
						<FiberManualRecord />
						Torrid
					</h3>
				</SideBarInfo>
				<Create />
			</SideBarHeader>
			<SideBarOption Icon={InsertComment} title="Threads" />
			<SideBarOption Icon={Inbox} title="Mentions & Reactions" />
			<SideBarOption Icon={Drafts} title="Save items" />
			<SideBarOption Icon={BookmarkBorder} title="Channel browser" />
			<SideBarOption Icon={PeopleAlt} title="People & user groups" />
			<SideBarOption Icon={Apps} title="Apps" />
			<SideBarOption Icon={FileCopy} title="File browser" />
			<SideBarOption Icon={ExpandLess} title="Show less" />
			<hr />
			<SideBarOption Icon={ExpandMore} title="Channels" />
			<hr />
			<SideBarOption Icon={Add} addChannelOption title="Add Channel" />

			{channels?.docs.map((doc) => (
				<SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
			))}
		</SideBarWrapper>
	);
};

export default SideBar;

const SideBarWrapper = styled.div`
	background-color: var(--slack-color);
	flex: 3;
	color: white;
	border: 1px solid #49274b;
	max-width: 260px;
	margin-top: 60px;

	> hr {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px solid #49274b;
	}
`;
const SideBarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding-bottom: 10px;
	padding: 13px;
	align-items: center;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: white;
		border-radius: 999px;
	}
`;
const SideBarInfo = styled.div`
	flex: 1;

	> h2 {
		font-size: 15px;
		font-weight: 900px;
		margin-bottom: 5px;
	}

	> h3 {
		display: flex;
		font-size: 13px;
		font-weight: 400px;
		align-items: center;
	}

	> h3 > .MuiSvgIcon-root {
		font-size: 14px;
		margin-top: 1px;
		margin-right: 2px;
		color: green;
	}
`;
