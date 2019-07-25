import React, { Fragment } from 'react';
import '../styles/loader.css';

const Loader = ({ load }) => {
	return (
		<Fragment>
			<div className="Loader">{load}</div>
			<p>LOADER</p>
			<h1>Welcome, now loading</h1>
		</Fragment>
	);
};

export default Loader;
