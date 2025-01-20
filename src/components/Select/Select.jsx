import React from 'react';

export default function Select({ users, onChange }) {
	return (
		<select onChange={onChange}>
			<option value={'all'}>All Users</option>
			{users.map(user => (
				<option key={user.id} value={user.id}>
					{user.name}
				</option>
			))}
		</select>
	);
}
