import React from 'react';

class Blockquote extends React.Component {
	render() {
		console.log(this);
		const color = this.props.generateColor();
		const html = document.documentElement;
		html.style.backgroundColor = color;
		return (
			<div style={{ background: `linear-gradient(to bottom, transparent 0%, ${color} 100%)` }} className="box">
				<div className="fadeIn" key={Math.random()} style={{ color: "white" }}>
					<h1 id="quote">"{this.props.quote}"</h1>
          			<h5 id="author">--{this.props.author ? this.props.author : "Unknown"}</h5>
				</div>
				<button style={{ backgroundColor: color }} id="newquote" onClick={this.props.handleClick}>
					Next Quote
				</button>
			</div>
		)
	}
	
}

export default Blockquote;