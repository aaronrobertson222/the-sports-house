import React from 'react';
import Helmet from 'react-helmet';

import Content from './layout/content';
import Header from './layout/header';
import Footer from './layout/footer';
import Router from './layout/router';
import Site from './layout/site';


const Layout = ({ children }) => (
	<Site>
		<Helmet
			title="The Sports House"
			link={[
				{ 'rel': "stylesheet", 'href': "https://use.fontawesome.com/releases/v5.5.0/css/all.css", 'integrity': "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU", 'crossorigin': "anonymous" }
			]}
		/>
		<Header />
		<Content>
			<Router />
		</Content>
		<Footer />
	</Site>
);

export default Layout;