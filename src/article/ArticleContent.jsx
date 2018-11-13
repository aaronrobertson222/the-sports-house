import React from 'react';
import marked from 'marked';

import './ArticleContent.scss';

const ArticleContent = ({ content }) => {
	const markup = { __html: marked(content, { sanitize: true }) }
	return (
		<div
			dangerouslySetInnerHTML={markup}
			className="article-body" />
	);
};

export default ArticleContent;