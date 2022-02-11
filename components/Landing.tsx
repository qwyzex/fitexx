import styles from '../styles/Landing.module.sass';
import SVG from './Svg';

const Landing = (props: any) => {
	return (
		<div className={styles.container}>
			<div>
				<h1>
					FITEX<span>X</span>
				</h1>
				<p>Secure, Fast, Stupid Todo App</p>
			</div>
			<section>
				<button onClick={() => props.setActivePage('login')}>
					<SVG.SignIn size={60} /> LOGIN
				</button>
				<button onClick={() => props.setActivePage('signup')}>
				    <SVG.Register size={60} /> SIGN UP
				</button>
			</section>
		</div>
	);
};

export default Landing;
