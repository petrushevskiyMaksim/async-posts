import React from 'react';

export default function Button({ text, onClick }) {
	return (
		<>
			<button
				className='flex justify-center items-center mx-auto w-48 mt-5 px-2 py-1 text-lg hover:font-medium bg-zinc-400 rounded hover:bg-zinc-500'
				onClick={onClick}
			>
				{text}
			</button>
		</>
	);
}
