import React from 'react';
import styled from 'styled-components';

const SideBarOption = ({ Icon, title }) => {
	return (
		<SideBarOptionWrapper>
			{Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<SideBarOptionChannel>
					<span>#</span> {title}
				</SideBarOptionChannel>
			)}
		</SideBarOptionWrapper>
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
