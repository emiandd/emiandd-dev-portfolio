import Card from '../components/Card.jsx';
import s from '../css/Projects.module.css';
import { projects } from '../assets/projects.js';


export default function Projects() {
	return (
		<div className={s.projects}>
			{projects && projects.map( (p, index) => 
				<Card 	img={p.img}
						year={p.year}
						projectName={p.projectName}
						repo={p.repo}
						demo={p.demo}
				/>
			)}
			
		</div>
	)
}