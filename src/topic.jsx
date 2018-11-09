import React from 'react';
import useFetchContent from './useFetchContent';

const Topic = ({ match }) => {

	const posts = useFetchContent({
		content_type: 'article',
		'fields.topic.sys.contentType.sys.id': 'topic',
		'fields.topic.fields.name': `${match.params.topic.toUpperCase()}`
	});

	return (
		<div>
			Topic Page
		</div>
	);
};

export default Topic;