
const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid justify-content-center">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse flex-grow-0"
						id="navbarNavDropdown">
						<ul className="navbar-nav text-center  font-family-sans-serif">
						<li className="nav-item h4 fw-bold mx-2">
							<a href="#" className="nav-link pe-auto">
									home
								</a>
							</li>
							<li className="nav-item h4 fw-bold mx-2">
							<a href="#" className="nav-link">
									services
								</a>
							</li>
							<li className="nav-item h4 fw-bold mx-2">
							<a href="#" className="nav-link">
									portifolio
								</a>
							</li>
							<li className="nav-item h4 fw-bold mx-2">
								<a href="#" className="nav-link">
									about
								</a>
							</li>
							<li className="nav-item h4 fw-bold mx-2">
							<a href="#" className="nav-link">
									contact
								</a>
							</li>
							<li className="nav-item dropdown"></li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Header;
