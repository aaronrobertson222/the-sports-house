import React from 'react';
import moment from 'moment';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	EmailShareButton,
	EmailIcon
} from 'react-share';

import './ArticleHeader.scss';

const ArticleHeader = ({ articleTitle, category, author, publishedDate, image }) => (
	<section className="header-section">
		<div>
			<span className="tag is-dark is-medium is-rounded is-capitalized">{category}</span>
			<h1 className="title is-1 is-spaced" style={{ padding: '15px 0 15px 0' }}>
				{articleTitle}
			</h1>
			<div className="level">
				<div className="level-left">
					<h2 className="subtitle is-5 published-line">
						By&nbsp;
						<span
							className="published-line-item">
							{author}
						</span>
						<span
							className="published-line-item">
							{moment(publishedDate).format('MMMM DD, YYYY')}
						</span>
					</h2>
				</div>
				<div className="level-right share-buttons">
					<FacebookShareButton url={window.location.href}>
						<FacebookIcon size={32} round />
					</FacebookShareButton>
					<TwitterShareButton url={window.location.href}>
						<TwitterIcon size={32} round />
					</TwitterShareButton>
					<EmailShareButton subject={articleTitle} url={window.location.href}>
						<EmailIcon size={32} round />
					</EmailShareButton>
				</div>
			</div>
			<img src={image} alt={articleTitle} style={{ display: 'block', width: '100%', margin: 'auto' }} />
		</div>
	</section>
);

export default ArticleHeader;
