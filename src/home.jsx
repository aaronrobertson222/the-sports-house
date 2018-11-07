import React from 'react';
import useFetchContent from './useFetchContent';

import ArticleFeed from './home/articleFeed';


const Home = () => {
	const posts = useFetchContent({
		content_type: 'article',
	});

	return (
		<div>
			<ArticleFeed articles={posts} />
		</div>
	);
}


export default Home;