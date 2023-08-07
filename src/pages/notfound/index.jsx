import { Link } from 'react-router-dom';
import ButtonStyled from '../../components/ButtonStyled';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
Link;

const NotFound = () => {
	return (
		<>
			<Header />
			<div className="container mt-5" style={{ height: '70vh' }}>
				<div className="m-5 p-5 d-flex justify-content-center align-content-center">
					<h1>404! Page not found</h1>
				</div>
				<div className="d-flex justify-content-center align-content-center">
					<Link to="/">
						<ButtonStyled>HOME</ButtonStyled>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default NotFound;
