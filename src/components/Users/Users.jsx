import React from 'react';
import { images } from '../../images.js';
import '../../index.css';

export default function Users({ postIndex, users }) {
	const user = users[postIndex - 1];

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
