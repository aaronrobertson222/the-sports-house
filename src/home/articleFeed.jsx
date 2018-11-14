import React from 'react';

import ArticleItem from './ArticleItem';

const ArticleFeed = ({ articles }) => {
	return (
		<div className="column is-two-thirds">
			<h1 className="title">Latest</h1>
			{
				articles ?
					articles.map((article => (
						<ArticleItem
							{...article.fields}
							key={article.fields.slug} />
					)))
					:
					'loading...'
			}
		</div>
	);
}

export default ArticleFeed;