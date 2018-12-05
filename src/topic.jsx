import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import client from './apiHelpers/contentfulClient';
import TopicHero from './topic/topicHero';
import ArticleFeed from './components/ArticleFeed';


const Topic = ({ match }) => {
	const [topicInfo, setTopicInfo] = useState(null);

	const opts = {
		content_type: 'topic',
		limit: 1,
		'fields.abbreviation': match.params.topic.toUpperCase()
	};

	useEffect(() => {
		client.getEntries(opts).then(response => {
			setTopicInfo(response.items[0]);
		})
	}, [match.params.topic]);

	return (
		<div>
			{
				topicInfo ?
					<div>
						<Helmet title={`${topicInfo.fields.name} | The Sports House`} />
						<TopicHero topicInfo={topicInfo} />
					</div>
					:
					'Loading...'
			}
			<div>
				<h2 className="title is-4 is-uppercase latest-header">Latest</h2>
				<ArticleFeed topic={match.params.topic} />
			</div>
		</div>
	);
};

export default Topic;