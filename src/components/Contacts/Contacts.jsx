import React from 'react';

export default function Contacts({ phone, email }) {
	return (
		<div>
			<a className='mr-1' href='#'>
				Call Us {phone}
			</a>{' '}
			/{' '}
			<a className='ml-3' href='#'>
				{email}
			</a>
		</div>
	);
}
