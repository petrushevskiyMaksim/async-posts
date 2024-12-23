import { useEffect, useState } from 'react';

function fetchUsers() {
	const [users, setUsers] = useState([]);

	async function fetchFn() {
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
		fetchFn();
	}, []);

	return { users };
}

export const { users } = fetchUsers();
