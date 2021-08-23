import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	
	// static getDerivedStateFromError(error, hasError) {
	// 	// Update state so the next render will show the fallback UI.
	// 	return { error, hasError: true };
	// }

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		// Catch errors in any components below and re-render with error message
		this.setState({ hasError: true });
	}
	render() {
		if (this.state.hasError) {
		// custom fallback UI
			return (
				<>
					<h1>An error has occurred.</h1>
				</>	
			);
		}
		return this.props.children; 
  	}
}
	
export default ErrorBoundary;