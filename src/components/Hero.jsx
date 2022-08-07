import s from '../css/Hero.module.css';

export default function Hero() {
	return (
		<main className={s.hero}>
			<div className={s.left}>
				<p>Hola, soy un desarrollador Full Stack en Chile.</p>
				<p>¡Bienvenido(a) a mi portafolio!</p>
				<h1>emiandd developer</h1>
			</div>
			<div className={s.right}>
				<img src="https://i.postimg.cc/4xg0nMyh/developer.png" alt="developer" />
			</div>
		</main>
	)
}