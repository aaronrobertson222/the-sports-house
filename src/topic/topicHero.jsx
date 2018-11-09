import React from 'react';

const TopicHero = ({ topicInfo }) => (
	<section className="hero is-light" style={{ borderBottom: '3px solid grey' }}>
		<div className="hero-body has-text-centered">
			<figure className="image" style={{ height: '200px', width: 'auto' }}>
				<img src={topicInfo ? topicInfo.fields.image.fields.file.url : ""} alt="" style={{ height: '100%', width: 'auto', margin: 'auto' }} />
			</figure>
			<h1 className="title">{topicInfo ? topicInfo.fields.name : 'loading...'}</h1>
		</div>
	</section>
);

export default TopicHero