import React from 'react';
import Logo from '../Logo/Logo';

export default function Header({ text }) {
	return (
		<header className='justify-between'>
			<Logo text={'Fox News'} />
			{/* <Contacts text={'Contacts'} />
			<Admin text={'Admin'} /> */}
		</header>
	);
}
