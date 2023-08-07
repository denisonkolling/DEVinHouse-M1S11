import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/notfound';
import Home from '../pages/home';
import About from '../pages/about';
import Portfolio from '../pages/portfolio';

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default RoutesApp;
