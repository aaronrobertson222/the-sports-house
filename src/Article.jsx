import React from 'react';
import Helmet from 'react-helmet';
import useFetchArticles from './apiHelpers/useFetchArticles';

import ArticleHeader from './article/ArticleHeader';
import ArticleContent from './article/ArticleContent';


const Article = ({ match }) => {
	const articleArray = useFetchArticles({
		content_type: 'article',
		'fields.slug': match.params.slug,
		limit: 1
	}, [match]);

	const article = articleArray ? articleArray[0] : null;

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
				</div>
				: 'hello'}
		</div>
	);
}

export default Article;