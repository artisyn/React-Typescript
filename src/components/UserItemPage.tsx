import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';
interface UserItemPageParams {
	id: string;
}

const UserItemPage: FC = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams();
	useEffect(() => {
		fetchUser();
	}, []);
	const fetchUser = async () => {
		try {
			const response = await axios.get<IUser>(
				`https://jsonplaceholder.typicode.com/users/${params.id}`
			);
			setUser(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<h1>This is users {user?.name} Page</h1>
			<div>{user?.email}</div>
			<button
				onClick={() => {
					navigate('/users');
				}}
			>
				back
			</button>
		</div>
	);
};

export default UserItemPage;
