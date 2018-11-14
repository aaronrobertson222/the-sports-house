import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './ArticleItem.scss';

const Article = ({ preview, title, author, date, slug, topic }) => {

	return (
		<article
			className="media"
		>
			<figure className="media-left">
				<p className="image thumbnail">
					<Link to={`/article/${slug}`}>
						<img src={preview.fields.file.url} alt={title} className="thumbnail-image" />
					</Link>
				</p>
			</figure>
			<div className="media-content article-content">
				<Link to={`/article/${slug}`}>
					<h1 className="title is-spaced title-link">{title}</h1>
				</Link>
				<p className="subtitle is-6 published-line">
					By&nbsp;
					<span className="published-line-item">{author.fields.name}</span>
					<span className="publisehd-line-item">{moment(date).format('MMMM DD, YYYY')}</span>
				</p>
				<Link to={`/topic/${topic.fields.abbreviation}`} >
					<div
						className="tag is-medium is-rounded is-dark">
						{topic.fields.name}
					</div>
				</Link>
			</div>
		</article >
	)
};

export default Article;