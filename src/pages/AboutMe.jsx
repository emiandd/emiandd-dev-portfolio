import NavBar from '../components/NavBar.jsx';
import s from '../css/AboutMe.module.css';

export default function AboutMe() {
	return (
		<div>
			<NavBar />
			<main className={s.main}>
				<div className={s.left}></div>
				<div className={s.right}>
					<p>Desarrollador Web Full Stack con orientación al Frontend con capacidad de realizar proyectos web teniendo siempre en mente que sean escalables y modularizables para así poder construir en equipo software de calidad.</p>
					<p>Me apasiona el mundo de la tecnología y es por ello que ya hace un año decidí darle un vuelco a mi carrera y comenzar a estudiar programación.</p>
					<p>Tener un background en gastronomía me ha permitido desarrollar habilidades como: buena atención al cliente, control y gestión y sobre todo trabajo en equipo.</p>
					<div className={s.skills}>
						<img src="https://i.postimg.cc/R0BBRYJP/skills.png" alt="skills image" />
					</div>
				</div>
				<div className={s.mobileSkills}>
						<img src="https://i.postimg.cc/R0BBRYJP/skills.png" alt="skills image" />
				</div>
			</main>
		</div>
	)
}