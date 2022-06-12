import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';

const UsersPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	useEffect(() => {
		fetchUsers();
	}, []);
	const fetchUsers = async () => {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<List
			items={users}
			renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
		/>
	);
};

export default UsersPage;
