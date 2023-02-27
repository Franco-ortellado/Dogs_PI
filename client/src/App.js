import './App.css';
// import {useNavigate, useLocation} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';

import LandingPage from './components/landingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import DogCreate from './components/DogCreate/DogCreate';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
	return (
		<div className="App">
			{/* <h1>Henry Dogs</h1> */}
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route exact path="/home" element={<Home />} />
				<Route path="/home/:id" element={<Detail />} />
				<Route path="/dogs" element={<DogCreate />} />
			</Routes>
		</div>
	);
}

export default App;
