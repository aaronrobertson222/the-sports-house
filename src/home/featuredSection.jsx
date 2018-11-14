import React from 'react';

import useFetchContent from '../useFetchContent';

const FeaturedSection = () => {

	const featuredPosts = useFetchContent({
		content_type: 'article',
		'fields.featured': true,
		limit: 3
	});

	console.log(featuredPosts);

	return (
		featuredPosts ?
			(<div className="columns">

				<div className="column is-half">
					<div style={{ height: '650px', border: '1px solid red' }}>
						<figure className="image" style={{ height: '75%', width: '100%' }}>
							<img src={featuredPosts[0].fields.preview.fields.file.url} alt="" style={{ height: '100%', width: '100%', 'objectFit': 'cover' }} />
						</figure>
						<div className="content" style={{ height: '25%', border: '1px solid red' }}>
							<h1 className="title">{featuredPosts[0].fields.title}</h1>
						</div>
					</div>
				</div>

				<div className="column is-half">
					<div style={{ height: '650px' }}>
						<div className="media" style={{ boxSizing: 'border-box' }}>
							<div className="media-left" style={{ height: '33%' }}>
								<figure className="image" style={{ height: '33%', maxWidth: '220px' }}>
									<img src={featuredPosts[1].fields.preview.fields.file.url} alt="test" style={{ height: '100%', width: '220px', 'objectFit': 'cover' }} />
								</figure>
							</div>
							<div className="media-content">
								<h1 className="title">{featuredPosts[1].fields.title}</h1>
							</div>
						</div>
						<div className="media" style={{ boxSizing: 'border-box' }}>
							<div className="media-left" style={{ height: '33%' }}>
								<figure className="image" style={{ height: '33%', maxWidth: '240px' }}>
									<img src={featuredPosts[0].fields.preview.fields.file.url} alt="test" style={{ width: '240px', height: '100%', 'objectFit': 'cover' }} />
								</figure>
							</div>
							<div className="media-right">
								<h1 className="title">{featuredPosts[0].fields.title}</h1>
							</div>
						</div>
						<div className="media" style={{ boxSizing: 'border-box' }}>
							<div className="media-left" style={{ height: '33%' }}>
								<figure className="image" style={{ height: '33%', maxWidth: '240px' }}>
									<img src={featuredPosts[0].fields.preview.fields.file.url} alt="test" style={{ width: '240px', height: '100%', 'objectFit': 'cover' }} />
								</figure>
							</div>
							<div className="media-right">
								<h1 className="title">{featuredPosts[0].fields.title}</h1>
							</div>
						</div>
					</div>
				</div>
			</div >)
			:
			'hello'
	);
}

export default FeaturedSection;