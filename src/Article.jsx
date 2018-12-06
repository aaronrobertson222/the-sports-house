import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import client from './apiHelpers/contentfulClient';

import ArticleHeader from './article/ArticleHeader';
import ArticleContent from './article/ArticleContent';
import ArticleFooter from './article/ArticleFooter';


const Article = ({ match }) => {
	const [article, setArticle] = useState(null);

	useEffect(() => {
		client.getEntries({
			content_type: 'article',
			'fields.slug': match.params.slug,
			limit: 1,
		}).then(response => {
			console.log(response);
			setArticle(response.items[0]);
		});
	}, [match.params.slug]);

	return (
		<div className="column is-8 is-offset-2">
			{article ?
				<div>
					<Helmet title={article.fields.title} />
					<ArticleHeader
						articleTitle={article.fields.title}
						category={article.fields.topic.fields.name}
						author={article.fields.author.fields.name}
						publishedDate={article.sys.createdAt}
						image={article.fields.preview.fields.file.url}
					/>
					<ArticleContent content={article.fields.content} />
					<ArticleFooter />
				</div>
				: 'hello'}
		</div>
	);
}

export default Article;