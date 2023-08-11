import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import img1 from '../../assets/images/imdb-movies-table.png';
import img2 from '../../assets/images/movie-crud-postgre.png';
import img3 from '../../assets/images/books.png';
import img4 from '../../assets/images/store.jpg';
import img5 from '../../assets/images/budget.png';
import img6 from '../../assets/images/pharmacy-store.jpg';

const Portfolio = () => {
	return (
		<>
			<Header />
			<div className="container">
				<h1 className="text-center my-5">Portfolio</h1>
				<div class="row row-cols-1 row-cols-md-3 g-4 m-4">
					<Card text="A webstore for an outdoor clothes company. #javascript #react #bootstrap" title="Outdor Web Store" image={img4} footer="Try it!" />
					<Card text="Library books control application, allow register and edit the books catalog. #javascript #react #bootstrap #java #mongo" title="Library" image={img3} footer="Try it!" />
					<Card text="An application to control your personal budget. #javascript #react #bootstrap" title="Budget Control" image={img5} footer="Try it!" />
					<Card text="Pharmacy web product registration with medicine registration form and favorite item. #javascript #react #bootstrap" title="Pharmacy Stock" image={img6} footer="Try it!" />
					<Card text="An application to create a list of your personal favorite movies. #java #posgreSQL" title="Best Movies List" image={img2} footer="Try it!" />
					<Card text="Requesting data from a database with all movie records and creating queries to filter the results. #java #posgreSQL" title="Popular Movies Database" image={img1} footer="Try it!" />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Portfolio;
