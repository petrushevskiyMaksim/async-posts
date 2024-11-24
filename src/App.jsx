import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';

export default function App() {
	return (
		<div className='flex flex-col text-3xl max-w-7xl my-0 mx-auto'>
			<Header text={'HEADER'} />
			<Main text={'MAIN'} />
		</div>
	);
}
