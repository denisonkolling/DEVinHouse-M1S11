import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ButtonStyled from '../../components/ButtonStyled';
import Card from '../../components/Card';
import java_logo from '../../assets/java.svg';
import react_logo from '../../assets/react.svg';
import postgres_logo from '../../assets/postgres.svg';

const Home = () => {
	return (
		<>
			<Header />
			<main className="container d-flex justify-content-center my-5">
				<div className="container m-5">
					<h1 className="text-center">Denison Kolling</h1>
					<br />
					<div className="text-end">
						<strong>Full Stack Developer</strong>
						<div className="d-flex flex-column">
							<span>JavaScript</span>
							<span>React</span>
							<span>Java</span>
							<span>Spring</span>
							<span>PostgreSQL</span>
							<span>MongoDB</span>
						</div>
					</div>

					<p className="lh-lg m-5">
						Full-time developer. Based on my experience in the logistics
						industry, I have honed my problem-solving skills to tackle
						challenges encountered in companies and businesses. I have chosen
						Java as my main programming language to develop robust and reliable
						IT solutions.
					</p>
					<h1 className='text-center'>Technologies Applied in Projects.</h1>
					<div class="row row-cols-1 row-cols-md-3 g-4 m-4">
						<div class="col">
							<Card
								title="React"
								text="React is a modern user interfaces development library, enhancing the user experience. It enables an accelerated development process. Optimized performance ensures your applications are responsive and fast. Moreover, the extensive developer community and continuous support from the React team ensure your applications stay updated and secure. React is a reliable and powerful technology that delivers excellent results."
								image={react_logo}
								footer="Front-end"
							/>
						</div>
						<div class="col">
							<Card
								title="Java"
								text="Java is a reliable, secure, and high-performance language, providing stability and scalability to the application. Its extensive community and rich library of frameworks enable rapid and efficient development. Additionally, Java's portability allows the application to run on various platforms, making it more accessible to users. With Java, your application will be well-equipped to tackle the challenges of modern web development."
								image={java_logo}
								footer="Back-end"
							/>
						</div>
						<div class="col">
							<Card
								title="PostgreSQL"
								text="The PostgreSQL database is highly reliable, robust, and secure, ensuring data consistency. Its flexibility allows the use of custom data types, functions, and stored procedures. PostgreSQL is open-source, making it economically accessible, and its active community provides continuous updates and support. The scalability and performance are excellent, making it an ideal choice for applications of any size at any time."
								image={postgres_logo}
								footer="Database"
							/>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
