import React, { useState, useEffect, Fragment } from 'react';
import client from '../apiHelpers/contentfulClient';

import ArticleItem from './ArticleItem';

const ArticleFeed = ({ topic, noFeatured }) => {
	const [loading, setLoading] = useState(true);
	const [articles, setArticles] = useState(null);

	// options for contentful api request
	const opts = {
		content_type: 'article',
		order: '-sys.createdAt',
		limit: 10,
	};

	// if topic prop is specified add topic fields to options for api request
	if (topic) {
		opts['fields.topic.sys.contentType.sys.id'] = 'topic';
		opts['fields.topic.fields.name'] = `${topic.toUpperCase()}`;
	}

	// if noFeatured prop is true add option to exclude featured posts in response
	if (noFeatured) {
		opts['fields.featured[nin]'] = true;
	}

	useEffect(() => {
		client.getEntries(opts).then(response => {
			setArticles(response.items);
			setLoading(false);
		});
	}, [topic]);

	return (
		loading ?
			<div className="lds-dual-ring"></div>
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