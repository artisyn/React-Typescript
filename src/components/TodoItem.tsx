import React, { FC } from 'react';
import { ITodo, IUser } from '../types/types';

interface TodoItemProps {
	todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input type="checkbox" checked={todo.completed}></input>
			{todo.id}. {todo.title}
		</div>
	);
};

export default TodoItem;
