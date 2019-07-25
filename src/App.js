import React, { Component, Fragment } from 'react';
import './styles/App.css';
import Loader from './component/loader';
import Home from './component/home';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingScreen: true,
			load: '',
		};
	}
	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				loadingScreen: false,
			});
		}, 7000);
	};

	render() {
		const { load, loadingScreen } = this.state;
		return (
			<Fragment>
				{loadingScreen ? (
					<Loader load={load} />
				) : (
					<div className="App">
						<Home />
					</div>
				)}
			</Fragment>
		);
	}
}

export default App;
