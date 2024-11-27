import React from 'react';
import Logo from '../Logo/Logo';
import Contacts from '../Contacts/Contacts';
import Admin from '../Admin/Admin';

export default function Header() {
	return (
		<header className='flex justify-between items-center font-bold h-24 mb-4'>
			<Logo text={'Fox News'} />
			<Contacts phone={'(348)981.872'} email={'hello@foxnews.com'} />
			<Admin />
		</header>
	);
}
