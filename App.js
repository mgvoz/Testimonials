import './index.css';
import './data.js';
import Review from './Review';

function App() {
	return (
		<div className='container'>
			<h2 className='title'>Our Reviews</h2>
			<hr className='underline' />
			<Review />
		</div>
	);
}

export default App;
