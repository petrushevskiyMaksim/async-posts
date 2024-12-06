import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import Users from '../Users/Users';
import '../../index.css';

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function getPosts() {
		const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

		try {
			setIsLoading(true);
			const response = await fetch(urlPosts);
			const data = await response.json();
			setIsLoading(false);
			const sliceArr = data.slice(0, 12);
			setPosts(sliceArr);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			{posts && (
				<section>
					{isLoading && (
						<div className='list'>
							{[...Array(12)].map((_, index) => (
								<ContentLoader
									key={index}
									speed={2}
									width={400}
									height={300}
									viewBox='0 0 400 300'
									backgroundColor='#f3f3f3'
									foregroundColor='#ecebeb'
								>
									<rect x='5' y='4' rx='0' ry='0' width='338' height='31' />
									<rect x='9' y='90' rx='0' ry='0' width='334' height='12' />
									<rect x='9' y='115' rx='0' ry='0' width='332' height='12' />
									<rect x='7' y='147' rx='0' ry='0' width='60' height='55' />
									<rect x='38' y='155' rx='0' ry='0' width='6' height='4' />
									<rect x='164' y='215' rx='0' ry='0' width='0' height='1' />
									<rect x='82' y='154' rx='0' ry='0' width='148' height='14' />
									<rect x='90' y='167' rx='0' ry='0' width='1' height='1' />
									<rect x='81' y='178' rx='0' ry='0' width='80' height='13' />
									<rect x='6' y='65' rx='0' ry='0' width='334' height='12' />
								</ContentLoader>
							))}
						</div>
					)}

					{!isLoading && (
						<div>
							<ul className='list'>
								{posts.map((post, index) => {
									return (
										<li key={post.id} className='list__item'>
											<h2 className='text-2xl font-bold capitalize'>
												{post.title}
											</h2>
											<p className='first-letter:uppercase'>{post.body}</p>
											<Users index={index} id={post.id} />
										</li>
									);
								})}
							</ul>
						</div>
					)}
				</section>
			)}
		</div>
	);
}
