import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';

export default function Main({ title }) {
	return (
		<main className=''>
			<div className='flex items-center justify-center mb-4 sm:mb-8 md:mb-12'>
				<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold after:content-[""] after:block after:mt-2 after:w-full after:bg-black after:h-0.5'>
					{title}
				</h1>
			</div>
			<Posts />
		</main>
	);
}
