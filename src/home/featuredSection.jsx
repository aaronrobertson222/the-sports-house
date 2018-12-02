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
			(<div className="columns is-gapless featured-container" style={{ marginBottom: '100px' }}>
				<div className="column is-two-thirds">
					<Link to={`/article/${posts[0].fields.slug}`}>
						<div style={{ position: 'relative', height: '550px', border: '1px solid white' }}>
							<figure>
								<div style={{
									backgroundImage: `linear-gradient(
										to bottom,
										rgba(0, 0, 0, 0),
										rgba(0, 0, 0, 0.7)
									),
									url(${posts[0].fields.preview.fields.file.url})`,
									height: '550px',
									backgroundSize: 'cover',
									backgroundPosition: 'center'
								}}>
								</div>
							</figure>
							<div className="content info level">
								<div className="level-left">
									<div>
										<h1 className="is-spaced item-title">{posts[0].fields.title}</h1>
										<p className="subtitle has-text-white published-line">
											By
											<span className="published-line-item">
												{posts[0].fields.author.fields.name}
											</span>
											<span className="published-line-item">
												{moment(posts[0].sys.createdAt).fromNow()}
											</span>
										</p>
									</div>
								</div>
								<div className="level-right">
									<span className="tag is-medium is-light is-rounded">{posts[0].fields.topic.fields.name}</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div className="column is-one-third">
					<div className="item-container">
						<Link to={`/article/${posts[1].fields.slug}`}>
							<div className="featured-item">
								<figure className="item-image">
									<div style={{
										backgroundImage: `linear-gradient(
										to bottom,
										rgba(0, 0, 0, 0),
										rgba(0, 0, 0, 0.7)
									),
									url(${posts[1].fields.preview.fields.file.url})`,
										height: '275px',
										backgroundSize: 'cover',
										backgroundPosition: 'center'
									}}>
									</div>
								</figure>
								<div className="content info">
									<div>
										<div>
											<h1 className="is-spaced item-title">{posts[1].fields.title}</h1>
											<p className="subtitle has-text-white published-line">
												By
											<span className="published-line-item">
													{posts[1].fields.author.fields.name}
												</span>
												<span className="published-line-item">
													{moment(posts[1].sys.createdAt).fromNow()}
												</span>
											</p>
										</div>
									</div>
									<div>
										<span className="tag is-small is-light is-rounded">{posts[1].fields.topic.fields.name}</span>
									</div>
								</div>
							</div>
						</Link>
						<Link to={`/article/${posts[2].fields.slug}`}>
							<div className="featured-item">
								<figure className="item-image">
									<div style={{
										backgroundImage: `linear-gradient(
										to bottom,
										rgba(0, 0, 0, 0),
										rgba(0, 0, 0, 0.7)
									),
									url(${posts[2].fields.preview.fields.file.url})`,
										height: '275px',
										backgroundSize: 'cover',
										backgroundPosition: 'center'
									}}>
									</div>							</figure>
								<div className="content info">
									<div>
										<div>
											<h1 className="is-spaced item-title">{posts[2].fields.title}</h1>
											<p className="subtitle has-text-white published-line">
												By
											<span className="published-line-item">
													{posts[2].fields.author.fields.name}
												</span>
												<span className="published-line-item">
													{moment(posts[2].sys.createdAt).fromNow()}
												</span>
											</p>
										</div>
									</div>
									<div>
										<span className="tag is-small is-light is-rounded">{posts[2].fields.topic.fields.name}</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div >)
			:
			'hello'
	);
}

export default FeaturedSection;