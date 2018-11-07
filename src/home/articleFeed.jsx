import React from 'react';

import Article from './article';

const ArticleFeed = ({ articles }) => {
	return (
		<div className="column is-two-thirds">
			<h1 className="title">Latest</h1>
			{
				articles ?
					articles.map((article => (
						<Article info={article} />
					)))
					:
					'howdy'
			}
		</div>
	);
}

export default ArticleFeed;