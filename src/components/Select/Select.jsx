import React, { useState } from 'react';
import { HiChevronUpDown } from 'react-icons/hi2';
import './select.css';

export default function Select({ users, onChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState('all');

	const handleSelect = value => {
		setSelected(value);
		setIsOpen(false);
		onChange?.(value);
	};

	return (
		<div className='wrapper-select'>
			<div className='custom-select' onClick={() => setIsOpen(!isOpen)}>
				<div className='option-content'>
					{users?.find(u => u.id === selected)?.name || 'All Users'}
				</div>
				<HiChevronUpDown className='icon' />
			</div>

			{isOpen && (
				<div className='dropdown'>
					<div
						className={`option ${selected === 'all' ? 'selected' : ''}`}
						onClick={() => handleSelect('all')}
					>
						<div className='option-content'>All Users</div>
					</div>

					{users?.map(user => (
						<div
							key={user.id}
							className={`option ${selected === user.id ? 'selected' : ''}`}
							onClick={() => handleSelect(user.id)}
						>
							<div className='option-content'>{user.name}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
