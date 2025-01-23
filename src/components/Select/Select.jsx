import React from 'react';
import { HiChevronUpDown } from 'react-icons/hi2';
import './select.css';

export default function Select({ users, onChange }) {
	return (
		<div className='wrapper-select'>
			<select className='' onChange={onChange}>
				<option className='my-option' value={'all'}>
					<div>All Users</div>
				</option>
				{users.map(user => (
					<option className='my-option' key={user.id} value={user.id}>
						{user.name}
					</option>
				))}
			</select>
			<HiChevronUpDown className='icon' />
		</div>
	);
}
