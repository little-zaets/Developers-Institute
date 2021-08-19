import Alert from './Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const data = {
	text: "OMG! Something really bad has happended!",
	show: true,
	color: 'green'
}

const dataColor = {
	text: "OMG! Something really bad has happended!",
	color: "red"
}

function App() {
  	return (
    	<div className="App">
				<Alert text="OMG! Something really bad has happended!" show='false'/>
				<Alert {...data} />
				<Alert {...dataColor} />
				<Alert text="OMG! Something really bad has happended!" color='orange' />
				<Alert {...data} />
				<Alert text="OMG! Something really bad has happended!" color='blue' />
    	</div>
  	);
}
export default App;
