import React from 'react';

class ErrorBoundary extends React.Component {
  	constructor(props) {
    	super(props);
			this.state = {
				error: null,
				hasError: false,
				errorInfo: null
			};
		}
	static getDerivedStateFromError(error, hasError) {
    	// Update state so the next render will show the fallback UI.
    	return { error, hasError: true };
  	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		// Catch errors in any components below and re-render with error message
		this.setState({ errorInfo });
  	}
	render() {
		if (this.state.hasError) {
		// custom fallback UI
			return (
				<div className='card my-5'>
					<div className='card-header'>
						<p>An error has occurred in this component. <span style={{ cursor: 'pointer', color: 'rgb(0, 119, 255)' }} onClick={() => { window.location.reload()}}>Reload this page</span>
						</p>
					</div>
					<div className='card-body'>
						<details className='error-details'>
							<summary>Click for error details:</summary>
							{this.state.error && this.state.error.toString()}
						</details>
					</div>	
				</div>
			);
		}
		return this.props.children; 
  	}
}

export default ErrorBoundary;