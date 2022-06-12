import React, { useState, useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import axios from 'axios';
import './App.css';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<div>
					<Link to={'/users'}>See Users</Link>{' '}
					<Link to={'/todos'}> See Todos</Link>
				</div>
				<Routes>
					<Route path={'/users'} element={<UsersPage />} />

					<Route path={'/todos'} element={<TodosPage />} />

					<Route path={'/users/:id'} element={<UserItemPage />} />

					<Route path={'/todos/:id'} element={<TodoItemPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
