import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	EmailShareButton,
	EmailIcon
} from 'react-share';

import './ArticleFooter.scss';

const ArticleFooter = () => (
	<div className="article-footer has-text-centered">
		<p className="has-text-weight-semibold is-size-5">Like this article? Share It!</p>
		<div className="footer-share-buttons">
			<FacebookShareButton url={window.location.href}>
				<FacebookIcon size={48} round />
			</FacebookShareButton>
			<TwitterShareButton url={window.location.href}>
				<TwitterIcon size={48} round />
			</TwitterShareButton>
			<EmailShareButton url={window.location.href}>
				<EmailIcon size={48} round />
			</EmailShareButton>
		</div>
	</div>
);

export default ArticleFooter;