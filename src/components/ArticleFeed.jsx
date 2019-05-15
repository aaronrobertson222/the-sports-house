import React, { useState, useEffect, Fragment } from 'react';
import client from '../apiHelpers/contentfulClient';

import ArticleItem from './ArticleItem';

import './ArticleFeed.scss';

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
			if (response.total > 0) setArticles(response.items);
			setLoading(false);
		});
	}, [topic, opts]);

	return (
		loading ?
			<Fragment>
				<div className="article-feed-loading" />
			</Fragment>
			:
			articles === null ?
				<h2 className="has-text-weight-bold has-text-centered is-size-5">There's nothing here yet...</h2>
				:
				<Fragment>
					{
						articles.map((article => (
							<ArticleItem
								{...article.fields}
								key={article.fields.slug}
							/>
						)))
					}
				</Fragment>
	);
}

export default ArticleFeed;