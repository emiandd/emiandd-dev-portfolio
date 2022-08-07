import s from '../css/NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav>
			<div className={s.logo}>
				<Link to="/">
					<img src="https://i.postimg.cc/ncYJdHfz/emiandd-logo.png" alt="emiandd dev logo" />
				</Link>
			</div>
			<div className={s.menu}>
				<Link to="/portfolio">
					<p>Portfolio</p>
				</Link>
				<Link to="/about-me">
					<p>Sobre mi</p>
				</Link>
				<Link to="/contact">
					<p>Contacto</p>
				</Link>
			</div>
		</nav>
	)
}