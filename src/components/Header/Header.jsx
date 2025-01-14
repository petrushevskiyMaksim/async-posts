import React from 'react';
import { Logo } from '@components/Logo/index.js';
import { Contacts } from '@components/Contacts/index.js';
import { Admin } from '@components/Admin/index.js';

export default function Header() {
	return (
		<header className='flex justify-between items-center font-bold md:h-24 h-12 sm:h-16 mb-2'>
			<Logo text={'Fox News'} />
			<Contacts phone={'(348)981.872'} email={'hello@foxnews.com'} />
			<Admin />
		</header>
	);
}
