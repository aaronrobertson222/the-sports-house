import React from 'react';
import useFetchContent from './useFetchContent';

import TopicHero from './topic/topicHero';
import ArticleFeed from './home/articleFeed';


const Topic = ({ match }) => {

	const topicInfo = useFetchContent({
		content_type: 'topic',
		'fields.abbreviation': match.params.topic.toUpperCase()
	});

	const posts = useFetchContent({
		content_type: 'article',
		'fields.topic.sys.contentType.sys.id': 'topic',
		'fields.topic.fields.name': `${match.params.topic.toUpperCase()}`
	});

	return (
		<div>
			{
				topicInfo ?
					<TopicHero topicInfo={topicInfo[0]} />
					:
					'Loading...'

			}
			{
				posts ?
					<ArticleFeed articles={posts} />
					:
					'hello'
			}
		</div>
	);
};

export default Topic;