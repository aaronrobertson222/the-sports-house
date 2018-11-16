import React, { Fragment } from 'react';

import ArticleItem from './ArticleItem';

const ArticleFeed = ({ articles }) => {
	return (
		<Fragment>
			<h2 className="title is-3 is-uppercase">Latest</h2>
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
		</Fragment>
	);
}

export default ArticleFeed;