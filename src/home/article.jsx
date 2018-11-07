import React from 'react';

const Article = ({ info }) => (
	<article
		key={info.sys.id}
		className="media"
	>
		<figure className="media-left">
			<p className="image" style={{ 'max-height': '180px', 'max-width': '340px' }}>
				<img src={info.fields.preview.fields.file.url} alt={info.fields.title} style={{ 'width': '100%', 'height': '180px', 'object-fit': 'cover' }} />
			</p>
		</figure>
		<div className="media-right">
			<h1 className="title">{info.fields.title}</h1>
			<p>{info.fields.author.fields.name}</p>
		</div>
	</article>
);

export default Article;