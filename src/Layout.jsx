import React from 'react';
import Helmet from 'react-helmet';

import Content from './layout/content';
import Header from './layout/header';
import Footer from './layout/footer';
import Router from './layout/router';
import Site from './layout/site';


const Layout = ({ children }) => (
	<Site>
		<Helmet title="The Sports House" />
		<Header />
		<Content>
			<Router />
		</Content>
		<Footer />
	</Site>
);

export default Layout;