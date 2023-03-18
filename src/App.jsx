import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Header />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
