import React from 'react';
import Helmet from 'react-helmet';
import { Timeline } from 'react-twitter-widgets';
import './home.scss'

import ArticleFeed from './components/ArticleFeed';
import FeaturedSection from './home/featuredSection';

const Home = ({ match }) => {

	return (
		<div>
			<Helmet title="Home | The Sports House" />
			<FeaturedSection />
			<div className="columns">
				<div className="column is-two-thirds">
					<h2 className="title is-4 is-uppercase latest-header">Latest</h2>
					<ArticleFeed noFeatured />
				</div>
				<div className="column is-one-third twitter-tl">
					<Timeline
						dataSource={{
							sourceType: 'profile',
							screenName: 'TheSports_House'

						}}
						options={{
							username: 'Sports House',
							height: '800',
						}}
						style={{ border: '1px solid grey' }}
					/>
				</div>
			</div>

		</div >
	);
}


export default Home;