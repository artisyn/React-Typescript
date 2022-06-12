import React, { FC } from 'react';
import { IUser } from '../types/types';
import { useNavigate } from 'react-router-dom';

interface UserItemProps {
	user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				navigate(`/users/${user.id}`);
			}}
			style={{
				padding: 15,
				border: '2px solid teal',
				marginBottom: '1rem',
			}}
		>
			{user.id}. {user.name} lives in town {user.address.city} on the
			{user.address.street} street
		</div>
	);
};

export default UserItem;
