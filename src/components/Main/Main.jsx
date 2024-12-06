import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';

export default function Main({ title }) {
	return (
		<main>
			<h1 className='after:content-[""] after:inline-block after:w-64 after:bg-black  after:h-0.5  flex flex-col gap-y-2 items-center  text-4xl font-bold  text-center mb-14'>
				{title}
			</h1>
			<Posts />
		</main>
	);
}
