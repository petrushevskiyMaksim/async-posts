import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.cash);
	return (
		<div className='flex flex-col max-w-7xl my-0 mx-auto px-3'>
			<div>
				<div>{cash}</div>
				<button>ADD</button>
				<button>GET</button>
			</div>
			<Header />
			<Main title={'Latest Updates'} />
		</div>
	);
}
