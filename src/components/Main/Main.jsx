import React, { useState } from 'react';
import { Posts } from '@components/Posts/index.js';
import { Select } from '@components/Select/index.js';
import { useFetchUsers } from '@store/users/useFetchUsers';

export default function Main({ title }) {
	const [selectedUser, setSelectedUser] = useState(null);
	const users = useFetchUsers();

	function handleUserChange(event) {
		setSelectedUser(Number(event.target.value));
	}

	return (
		<main className='mb-5'>
			<div className='flex items-center justify-between w-full mb-4 sm:mb-8 md:mb-12'>
				<h1 className='text-2xl mx-auto  sm:text-3xl md:text-4xl font-bold after:content-[""] after:block after:mt-2 after:w-full after:bg-black after:h-0.5'>
					{title}
				</h1>
				<Select users={users} onChange={handleUserChange} />
			</div>
			<Posts users={users} selectedUser={Number(selectedUser)} />
		</main>
	);
}
