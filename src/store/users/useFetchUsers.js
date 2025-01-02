import { useEffect, useState } from 'react';

export function useFetchUsers() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			const urlUsers = 'https://jsonplaceholder.typicode.com/users';

			try {
				const response = await fetch(urlUsers);
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				console.error('Failed to fetch users:', error);
			}
		}
		fetchUsers();
	}, []);

	return users;
}
