import React, { FC, useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		try {
			const response = await axios.get<ITodo[]>(
				'https://jsonplaceholder.typicode.com/todos?_limit=10'
			);
			setTodos(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<List
			items={todos}
			renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
		/>
	);
};

export default TodosPage;
