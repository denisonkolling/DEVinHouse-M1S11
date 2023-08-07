import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const About = () => {
	return (
		<>
			<Header />
			<div className="container">
				<div className="container my-4 text-center">
					<h1>Projects</h1>
					<p>
						As a full-stack developer, I have worked on a diverse range of
						projects that showcase my abilities in both front-end and back-end
						development. Here are some examples of the projects I have been
						involved in: pharmacy website, market place for neighbors sale, car
						garage management system.
					</p>
				</div>
				<div className="container my-4 text-center">
					<h1>Experience</h1>
					<p>
						As a full-stack developer, my daily experience is diverse and
						engaging. I start with planning tasks and prioritizing projects. I
						work on front-end development, designing interfaces and implementing
						interactive elements. Then, I switch to back-end development,
						handling data management and server-side logic. Throughout the day,
						I collaborate with a team, troubleshoot, test, and continuously
						improve my skills.
					</p>
				</div>
				<div className="container my-4 text-center">
					<h1>About me</h1>
					<p>
						As someone who possesses the skills of a full-stack developer, I am
						adept at handling a wide array of technologies. I have a deep
						understanding of front-end development, allowing me to create
						visually appealing and user-friendly interfaces. Simultaneously, my
						expertise in back-end development enables me to handle data and
						implement complex logic to ensure the application's functionality. I
						confidently manage databases, server configurations, and deployment
						processes. Embracing challenges and staying updated with the latest
						tech advancements excites me, as it allows me to deliver end-to-end
						solutions seamlessly. My ability to collaborate effectively with
						specialized teams and balance various project demands enables me to
						bring successful projects to fruition. Being a full-stack developer
						empowers me with a comprehensive skill set, enabling me to create
						robust and innovative applications.
					</p>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default About;
