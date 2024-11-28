import React, { useState, useEffect } from 'react';

const urlUsers = 'https://jsonplaceholder.typicode.com/users';

export default function Main({ title }) {
	const [posts, setPosts] = useState(null);

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

	useEffect(() => {
		getPosts();
	}, []);
	console.log(posts);
	// {
	// 	const list = posts.map(post => <li>{post.title}</li>);
	// }
	return (
		posts && (
			<main>
				<h1 className='after:content-[""] after:inline-block after:w-64 after:bg-black  after:h-0.5  flex flex-col gap-y-2 items-center  text-4xl font-bold  text-center mb-7'>
					{title}
				</h1>
				<section>
					<div>
						<ul>
							{posts.map(post => (
								<li key={post.id}>{post.title}</li>
							))}
						</ul>
					</div>
				</section>
			</main>
		)
	);
}
