import React from 'react';

export default function Admin() {
	return (
		<div className='flex gap-x-5'>
			<button className='max-sm:hidden'>Login</button>
			<button className='bg-slate-950 text-white px-4 py-1 hidden'>
				Get 1 year for $50 USD
			</button>
			<div className='flex items-center gap-x-2'>
				<button>Menu</button>
				<button className='flex flex-col gap-y-1'>
					<span className=' h-1 w-6 bg-black'></span>
					<span className=' height w-5 bg-black'></span>
				</button>
			</div>
		</div>
	);
}
