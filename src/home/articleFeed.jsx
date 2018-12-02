import React, { useState, useEffect, Fragment } from 'react';
import client from '../apiHelpers/contentfulClient';

import ArticleItem from './ArticleItem';

const ArticleFeed = ({ topic }) => {
	const [loading, setLoading] = useState(true);
	const [articles, setArticles] = useState(null);

	// options for contentful api request
	const opts = {
		content_type: 'article',
		order: '-sys.createdAt',
		limit: 10,
	};

	// if topic prop is specified add topic fields to options for api request
	if (topic !== null && topic !== undefined) {
		opts['fields.topic.sys.contentType.sys.id'] = 'topic';
		opts['fields.topic.fields.name.fields.topic.fields.name.fields.topic.fields.name'] = `${topic.toUppercase}`;
	}

	useEffect(() => {
		client.getEntries(opts).then(response => {
			setArticles(response.items);
			setLoading(false);
		});
	}, [topic]);

	return (
		loading ?
			<p>loading..</p>
			:
			<Fragment>
				{
					articles ?
						articles.map((article => (
							<ArticleItem
								{...article.fields}
								key={article.fields.slug} />
						)))
						:
						<p>Kevin really still hasn't written an article</p>
				}
			</Fragment>
	);
}

export default ArticleFeed;