import React from 'react';
import { images } from '../../images.js';
import { useFetchUsers } from '../../store/useFetchUsers.js';
import '../../index.css';

export default function Users({ postIndex }) {
	const users = useFetchUsers();

	const userIndex = postIndex % users.length;

	const user = users[userIndex];

	return (
		<>
			{user && (
				<div className='flex items-center gap-x-3 mt-2 md:mt-auto'>
					<img
						className='max-w-14 rounded-2xl'
						src={images[postIndex % images.length].url}
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
