import React from 'react';

const Content = ({ children }) => (
	<main className="section" style={{ 'flex': '1' }}>
		<div className="container">
			{children}
		</div>
	</main>
);
export default Content