import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import Users from '../Users/Users';
import Button from '../Button/Button';
import { useFetchUsers } from '../../store/users/useFetchUsers.js';
import { useFetchPosts } from '../../store/posts/useFetchPosts.js';
import '../../index.css';

export default function Posts({ selectedUser, users }) {
	const [isLoading, setIsLoading] = useState(false);
	const [rangePosts, setRangePosts] = useState(12);

	const posts = useFetchPosts(rangePosts, setIsLoading);

	const filteredPosts = selectedUser
		? posts.filter(post => {
				console.log(post.id);
				console.log(selectedUser);
				post.id === selectedUser;
		  })
		: posts;

	console.log(filteredPosts);
	
	return (
		<div>
			{filteredPosts && (
				<section>
					{isLoading && (
						<div className='md:flex flex-wrap justify-between gap-x-5 gap-y-5'>
							{[...Array(12)].map((_, index) => (
								<ContentLoader
									key={index}
									speed={2}
									width={250}
									height={250}
									viewBox='0 0 250 250'
									backgroundColor='#6b6b6b'
									foregroundColor='#ecebeb'
								>
									<rect x='5' y='4' rx='0' ry='0' width='238' height='31' />
									<rect x='9' y='90' rx='0' ry='0' width='234' height='12' />
									<rect x='9' y='115' rx='0' ry='0' width='232' height='12' />
									<rect x='7' y='147' rx='0' ry='0' width='60' height='55' />
									<rect x='38' y='155' rx='0' ry='0' width='6' height='4' />
									<rect x='164' y='215' rx='0' ry='0' width='0' height='1' />
									<rect x='82' y='154' rx='0' ry='0' width='148' height='14' />
									<rect x='90' y='167' rx='0' ry='0' width='1' height='1' />
									<rect x='81' y='178' rx='0' ry='0' width='80' height='13' />
									<rect x='6' y='65' rx='0' ry='0' width='234' height='12' />
								</ContentLoader>
							))}
						</div>
					)}

					{!isLoading && (
						<div>
							<ul className='md:flex flex-wrap justify-between gap-x-5 gap-y-5'>
								{filteredPosts.map((post, index) => {
									return (
										<li
											key={post.id}
											className='md:flex md:flex-col md:gap-4 md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] mb-6'
										>
											<h2 className='mb-2 text-xl sm:text-2xl font-bold capitalize'>
												{post.title}
											</h2>
											<p className='first-letter:uppercase'>{post.body}</p>
											<Users users={users} postIndex={index} />
										</li>
									);
								})}
							</ul>
							{filteredPosts.length >= 100 ? (
								<p className='flex justify-center items-center mx-auto w-48 mt-5 px-2 py-1 text-lg cursor-pointer hover:font-medium bg-zinc-400 rounded hover:bg-zinc-500'>
									THE END
								</p>
							) : (
								<Button
									onClick={() => setRangePosts(rangePosts + 12)}
									text={'Показать еще'}
								/>
							)}
						</div>
					)}
				</section>
			)}
		</div>
	);
}
