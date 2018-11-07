import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home';
import NoMatch from '../noMatch';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/cfb" />
		<Route path="/cbb" />
		<Route path="/nba" />
		<Route path="/other" />
		<Route path="/article/:id" />
		<Route component={NoMatch} />
	</Switch>
);

export default Router;