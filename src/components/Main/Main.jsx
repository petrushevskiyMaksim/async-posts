import React, { useState, useEffect } from 'react';

export default function Main({ title }) {
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);

	async function getPosts() {
		const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

		try {
			const response = await fetch(urlPosts);
			const data = await response.json();
			setPosts(data);
		} catch (error) {
			console.error(error);
		}
	}

	async function getUsers() {
		const urlUsers = 'https://jsonplaceholder.typicode.com/users';

		try {
			const response = await fetch(urlUsers);
			const data = await response.json();
			console.log(data);
			setUsers(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUsers();
	}, []);

	useEffect(() => {
		getPosts();
	}, []);

	const getUserById = userId => {
		return users.find(user => user.id === userId);
	};

	return (
		<main>
			<h1 className='after:content-[""] after:inline-block after:w-64 after:bg-black  after:h-0.5  flex flex-col gap-y-2 items-center  text-4xl font-bold  text-center mb-14'>
				{title}
			</h1>
			{posts && (
				<section>
					<div>
						<ul className='list'>
							{posts.map(post => {
								const user = getUserById(post.id);

								return (
									<li key={post.id} className='list__item'>
										<h2 className='text-2xl font-bold capitalize'>
											{post.title}
										</h2>
										<p className='first-letter:uppercase'>{post.body}</p>
										{user && (
											<div className='flex items-center gap-x-3'>
												<img
													className='max-w-14 rounded-2xl'
													src='src/assets/user-image-1.jpg'
													alt=''
												/>
												<div>
													<p className='font-medium'>
														<strong>{user.name}</strong>
													</p>
													<p className='text-sm opacity-80'>{user.username}</p>
												</div>
											</div>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			)}
		</main>
	);
}
