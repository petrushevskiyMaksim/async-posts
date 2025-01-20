import { useEffect, useState } from 'react';

export function useFetchPosts(setIsLoading) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

			try {
				setIsLoading(true);
				const response = await fetch(urlPosts);
				const data = await response.json();
				setIsLoading(false);
				setPosts(data);
			} catch (error) {
				console.error('Failed to fetch users:', error);
			}
		}
		fetchPosts();
	}, []);

	return posts;
}
