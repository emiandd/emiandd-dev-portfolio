import s from '../css/NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {

	const url = window.location.href;

	return (
		<nav>
			<div className={s.logo}>
				<Link to="/">
					<img src="https://i.postimg.cc/ncYJdHfz/emiandd-logo.png" alt="emiandd dev logo" />
				</Link>
			</div>
			<div className={s.menu}>
				<Link to="/portfolio">
					<p className={ url.includes('portfolio') ? s.activeMenu : null }>Portfolio</p>
				</Link>
				<Link to="/about-me">
					<p className={ url.includes('about-me') ? s.activeMenu : null }>Sobre mi</p>
				</Link>
				<Link to="/contact">
					<p className={ url.includes('contact') ? s.activeMenu : null }>Contacto</p>
				</Link>
			</div>
		</nav>
	)
}