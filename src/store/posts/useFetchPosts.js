import { useEffect, useState } from 'react';

export function useFetchPosts(rangePosts, setIsLoading) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

			try {
				setIsLoading(true);
				const response = await fetch(urlPosts);
				const data = await response.json();
				setIsLoading(false);
				// const sliceArr = data.slice(0, rangePosts);
				setPosts(data);
			} catch (error) {
				console.error('Failed to fetch users:', error);
			}
		}
		fetchPosts();
	}, [rangePosts]);

	return posts;
}
