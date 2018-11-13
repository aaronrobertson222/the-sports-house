import React from 'react';
import useFetchContent from './useFetchContent'

import ArticleHeader from './article/ArticleHeader';
import ArticleContent from './article/ArticleContent';


const Article = ({ match }) => {
	const articleArray = useFetchContent({
		content_type: 'article',
		'fields.slug': match.params.slug,
		limit: 1
	}, [match]);

	const article = articleArray ? articleArray[0] : null;


	return (
		<div className="column is-8 is-offset-2">
			{article ?
				<div>
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