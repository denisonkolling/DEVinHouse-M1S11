import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Button from './components/ButtonStyled';
import ButtonStyled from './components/ButtonStyled';

function App() {
	return (
		<>
			<Header />
			<main className='container d-flex justify-content-center my-5'>
				<h1>Hello world...</h1>
				<ButtonStyled>Click!</ButtonStyled>
			</main>
			<Footer />
		</>
	);
}

export default App;
