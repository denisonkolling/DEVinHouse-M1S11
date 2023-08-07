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
					<h1 className="text-left">Denison Kolling</h1>
					<br />
					<div className="text-end">
						<strong>Desenvolvedor Full Stack</strong>
						<div className="d-flex flex-column">
							<span>JavaScript</span>
							<span>React</span>
							<span>Java</span>
							<span>Spring</span>
							<span>PostgreSQL</span>
							<span>MongoDB</span>
						</div>
					</div>

					<p className='lh-lg text m-5'>
						Estudante de TI em tempo integral. Com base na minha experiência no
						setor de logística, aprimorei minhas habilidades de resolução de
						problemas para enfrentar os desafios encontrados em empresas e
						negócios. Escolhi Java como principal linguagem de programação para
						desenvolver soluções de TI robustas e confiáveis.
					</p>
					<h1>Tecnologias Aplicadas em Projetos</h1>
					<div class="row row-cols-1 row-cols-md-3 g-4 m-4">
						<div class="col">
							<Card
								title="React"
								text="Com o React, sua empresa desfrutará de interfaces de usuário modernas e atraentes, que melhorarão a experiência do usuário e atraem mais clientes. Possuí processo de desenvolvimento acelerado. A performance otimizada garante que seus aplicativos sejam responsivos e rápidos. Além disso, a ampla comunidade de desenvolvedores e o suporte contínuo da equipe do React garantem que suas aplicações atualizadas e seguras. React é uma tecnologia confiável e poderosa que oferece resultados excelentes."
								image={react_logo}
								footer="Front-end"
							/>
						</div>
						<div class="col">
							<Card
								title="Java"
								text="Java é uma linguagem confiável, segura e de alto desempenho, o que proporciona estabilidade e escalabilidade para a aplicação. Sua ampla comunidade e rica biblioteca de frameworks facilitam o desenvolvimento rápido e eficiente. Além disso, a portabilidade do Java permite que a aplicação seja executada em diversas plataformas, tornando-a mais acessível para os usuários. Com Java, sua aplicação estará bem posicionada para enfrentar os desafios do desenvolvimento web moderno."
								image={java_logo}
								footer="Back-end"
							/>
						</div>
						<div class="col">
							<Card
								title="PostgreSQL"
								text="O banco de dados de alta confiabilidade, robustez e segurança. Garantindo consistência dos dados. Sua flexibilidade permite o uso de tipos de dados personalizados, funções e procedimentos armazenados. O PostgreSQL é de código aberto, o que o torna economicamente acessível, e sua comunidade ativa oferece atualizações e suporte contínuo. A escalabilidade e o desempenho são excelentes, tornando-o uma escolha ideal para aplicações de qualquer tamanho."
								image={postgres_logo}
								footer="Banco de Dados"
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
