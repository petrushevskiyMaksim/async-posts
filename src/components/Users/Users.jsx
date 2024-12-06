import React, { useState, useEffect } from 'react';
import { images } from '../../images.js';
import '../../index.css';

export default function Users({ index, id }) {
	const [users, setUsers] = useState([]);

	async function getUsers() {
		const urlUsers = 'https://jsonplaceholder.typicode.com/users';

		try {
			const response = await fetch(urlUsers);
			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUsers();
	}, []);

	const getUserById = userId => {
		return users.find(user => user.id === userId);
	};

	const user = getUserById(id);

	return (
		<>
			{user && (
				<div className='flex items-center gap-x-3'>
					<img
						className='max-w-14 rounded-2xl'
						src={images[index % images.length].url}
						alt=''
					/>
					<div>
						<p className='font-medium'>
							<strong>{user.name}</strong>
						</p>
						<p className='text-sm opacity-80'>{user.username}</p>
					</div>
				</div>
			)}
		</>
	);
}
