import React from 'react';
//Exercise 2 : Bootstrap
//Create a function called BootstrapCard that returns the following HTML:
const BootstrapCard = () => {
	return (
		<div>
			<div className="card m-5" style={{width: '30rem'}}>
  				<img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card image cap" />
  				<div className="card-body">
    				<h5 className="card-title">Bob Dylan</h5>
    				<p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
    				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
  				</div>
			</div>
		</div>
	)
}

//Exercise 3 : Component Properties
//Using the code you created in the previous exercise (Exercise 2 - Part 3), 
//replace the hardcoded data from the BootstrapCard function, with properties.Remember to use props.
const BootstrapCard = (props) => {
	console.log(props);
	return (
		<div>
			<div className="card m-5" style={{ width: '30rem' }}>
				<img className="card-img-top" src={ props.singer.imageUrl } alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{ props.singer.title }</h5>
					<p className="card-text">{ props.singer.description }</p>
					<a href={ props.singer.buttonUrl } className="btn btn-primary">{ props.singer.buttonLabel }</a>
				  </div>
			</div>
		</div>
	)
}

export default BootstrapCard;