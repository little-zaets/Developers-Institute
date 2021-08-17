import MyCarousel from './Carousel';
import './App.css';

let styles = {
	margin: 'auto',
	width: '500px'
  };

function App() {
  return (
    <div style={styles}>
		<MyCarousel />
    </div>
  );
}
export default App;