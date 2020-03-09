import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import GlobalStyle from './styled-components/GlobalStyle';
import ModeProvider from './contexts/ModeContext';
import { NavBar, Footer } from './components';
import { Main, About, Contact } from './pages';

function App() {
	return (
		<div className='App'>
			<ModeProvider>
				<GlobalStyle />
				<NavBar />
				<Route exact path='/' component={Main} />
				<Route path='/about' component={About} />
				<Route path='/Contact' component={Contact} />
				<Footer />
			</ModeProvider>
		</div>
	);
}

export default App;
