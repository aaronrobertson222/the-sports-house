import React from 'react';

const Content = ({ children }) => (
	<main style={{ 'flex': '1', paddingTop: '30px', marginBottom: '30px' }}>
		<div className="container is-widescreen">
			{children}
		</div>
	</main>
);
export default Content