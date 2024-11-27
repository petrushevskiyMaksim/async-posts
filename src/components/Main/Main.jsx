import React from 'react';

export default function Main({ title }) {
	return (
		<main>
			<h1 className='after:content-[""] after:inline-block after:w-64 after:bg-black  after:h-0.5  flex flex-col gap-y-2 items-center  text-4xl font-bold  text-center '>
				{title}
			</h1>
			<section></section>
		</main>
	);
}
