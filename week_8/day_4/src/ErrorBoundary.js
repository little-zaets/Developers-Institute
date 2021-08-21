import React from 'react';

class ErrorBoundary extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = { error: null, info: null };
  	}
	componentDidCatch(error, info) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error: error,
			info: info
		})
  	}
	render() {
		if (this.state.info) {
		// custom fallback UI
			return (
				<div>
					<h2>Something went wrong.</h2>
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.info.componentStack}
					</details>
				</div>
			);
		}
		return this.props.children; 
  	}
}

export default ErrorBoundary;