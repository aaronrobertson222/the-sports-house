import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Article from '../Article.jsx'
import Home from '../home';
import Topic from '../topic';
import NoMatch from '../noMatch';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/topic/:topic(CFB|CBB|NBA|NFL|MLB)" component={Topic} />
		<Route path="/article/:slug" component={Article} />
		<Route component={NoMatch} />
	</Switch>
);

export default Router;