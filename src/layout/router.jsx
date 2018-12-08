import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Article from '../Article.jsx'
import Home from '../home';
import Topic from '../topic';
import NoMatch from '../noMatch';

const Router = () => (
	<Switch>
		<Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
		<Route path={process.env.PUBLIC_URL + '/topic/:topic(CFB|CBB|NBA|NFL|MLB|Other)'} component={Topic} />
		<Route path={process.env.PUBLIC_URL + '/article/:slug'} component={Article} />
		<Route component={NoMatch} />
	</Switch>
);

export default Router;