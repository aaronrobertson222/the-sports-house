import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './ArticleItem.scss';

const Article = ({ preview, title, author, date, slug, topic }) => (
	<article className="media">
		<figure className="media-left">
			<p className="thumbnail">
				<Link to={`${process.env.PUBLIC_URL}/article/${slug}`}>
					<img src={preview.fields.file.url} alt={title} className="thumbnail-img" />
				</Link>
			</p>
		</figure>
		<div className="media-content">
			<Link to={`${process.env.PUBLIC_URL}/article/${slug}`}>
				<h1 className="title is-spaced title-link">{title}</h1>
			</Link>

			<div>
				<p className="subtitle is-6 published-line">
					By
					<span>{author.fields.name}</span>
					<span>{moment(date).fromNow()}</span>
				</p>
			</div>

			<div className="item-tag">
				<span className="tag is-small is-rounded is-dark">
					{topic.fields.name}
				</span>
			</div>
		</div>
	</article >
);

export default Article;