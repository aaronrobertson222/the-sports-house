import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import useFetchContent from '../apiHelpers/useFetchArticles';

import './featuredSection.scss';

const FeaturedSection = () => {

	const { posts } = useFetchContent({
		content_type: 'article',
		'fields.featured': true,
		limit: 3,
		order: '-sys.createdAt'
	});

	return (
		posts ?
			(<div className="featured-section">
				{
					posts.map((article, i) => (
						<div className="featured-item" key={article.fields.slug}>
							<Link to={`/article/${article.fields.slug}`}>
								<div style={{
									backgroundImage: `linear-gradient(
										to bottom,
										rgba(0, 0, 0, 0),
										rgba(0, 0, 0, 0.8)
									),
									url(${article.fields.preview.fields.file.url})`,
									height: '100%',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									maxWidth: '100%'
								}}>
									<div className="info">
										<h1 className="has-text-white item-title title">{article.fields.title}</h1>
										<p className="subtitle has-text-white published-line">
											By
			 								<span className="published-line-item">
												{article.fields.author.fields.name}
											</span>
											<span className="published-line-item">
												{moment(article.sys.createdAt).fromNow()}
											</span>
										</p>
									</div>
								</div>
							</Link>
						</div>
					))
				}
			</div>)
			:
			(
				<div className="featured-section">
					<div className="featured-item">
						<div className="loading"></div>
					</div>
					<div className="featured-item">
						<div className="loading"></div>
					</div>
					<div className="featured-item">
						<div className="loading"></div>
					</div>
				</div>
			)
	);
}

export default FeaturedSection;