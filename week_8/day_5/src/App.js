import React from 'react';
import Blockquote from './Components/Blockquote';
import quotes from './QuotesDatabase';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			quote: quotes[0].quote,
			author: quotes[0].author,
		};
	}
	randomize() {
    	const randomized = Math.floor(Math.random() * quotes.length);
    	return quotes[randomized];
    
	}
	filteredShuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
	}
  	handleClick = () => {
    	const randomQuote = this.randomize();
    	this.setState({
      		quote: randomQuote.quote,
      		author: randomQuote.author
    	});
		this.filteredShuffle(quotes);
		};
	randomizeColor() {
		const color = `rgb(
			${Math.floor(Math.random() * 155)},
			${Math.floor(Math.random() * 155)},
			${Math.floor(Math.random() * 155)})`;
		return color;
	}
	render() {
		return (
			<div>
				<Blockquote generateColor={this.randomizeColor} handleClick={this.handleClick} {...this.state} />
			</div>
		);
	}
}
export default App;
