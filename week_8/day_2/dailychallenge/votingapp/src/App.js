import React from 'react';
import './App.css';

class App extends React.Component {
  	constructor(props){
    	super(props);
    	this.state = {
			languages : [
				{name: "Php", votes: 0},
				{name: "Python", votes: 0},
				{name: "JavaSript", votes: 0},
				{name: "Java", votes: 0}
			]
		}
	}

	plusOne = (i) => {
		let allLanguages = [...this.state.languages];
		allLanguages[i].votes++;
		//need curly braces in order to access object within state
		this.setState({ languages: allLanguages });

	}
	render() {
		return (
			<>
				<h1>Vote for your Language!</h1>
				<div className="languages">
					{
						this.state.languages.map((item, i) =>
							//uniqye key is passed down to function parameters to 
							<div key={i} className="language">
								<div className="voteCount">
									{item.votes}
								</div>
								<div className="languageName" >
									{item.name}
								</div>
								<button onClick={() => this.plusOne(i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
 	}
			
}
export default App;