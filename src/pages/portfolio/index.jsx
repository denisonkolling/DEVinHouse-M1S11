import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import img1 from '../../assets/images/imdb-movies-table.png';
import img2 from '../../assets/images/movie-crud-postgre.png';

const Portfolio = () => {
	return (
		<>
			<Header />
			<div className="container">
				<h1 className="text-center my-5">Portfolio</h1>
				<div class="row row-cols-1 row-cols-md-3 g-4 m-4">
					<Card text="Requesting data from a database with all movie records and creating queries to filter the results." title="Popular Movies Database" image={img1} footer="Try it!" />
					<Card text="An application to create a list of your personal favorite movies." title="Best Movies List" image={img2} footer="Try it!" />
					<Card text="An application to create a list of your personal favorite movies." title="Best Movies List" image={img2} footer="Try it!" />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Portfolio;
