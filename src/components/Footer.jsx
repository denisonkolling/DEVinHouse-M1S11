import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className="bg-dark text-center text-white">
				<div className="container p-4">			
					<section className="">
						<div className="row">
							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">About</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white text-decoration-none">
											About me
										</a>
									</li>
                  <li>
										<a href="#!" className="text-white text-decoration-none">
											History
										</a>
									</li>
									
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">Skills</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white text-decoration-none">
											React
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											React Native
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Java Spring
										</a>
									</li>
	
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">Works</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Applications for Web
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Applications for Mobile
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Back End API
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">Contact</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Instagram
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Facebook
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											WhatsApp
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>

				<div className="text-center p-3">
					<span>© 2023 Denison Kolling. Todos os direitos reservados.</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
