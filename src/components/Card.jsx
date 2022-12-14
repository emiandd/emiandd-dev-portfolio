import s from '../css/Card.module.css';
import { ReactComponent as FaGithub } from '../assets/github-icon.svg';
import { ReactComponent as FaGlobe } from '../assets/globe-icon.svg';

export default function Card({img, year, projectName, repo, demo, technologies}) {
	return (
		<div className={s.card}>
			<img src={img} alt='project img' />
			<div className={s.mask}>

				<p className={s.year}>{year}</p>
				<p>{projectName}</p>
				<div className={s.technologies}>
					{technologies && technologies.slice(0, 7).map( t => 
						<p className={s.technology}>{t}</p>
					)}
				</div>
				<div className={s.buttons}>
					<a href={repo} target='_blank' rel="noreferrer">
						<button><FaGithub className={s.githubIcon}/>Repositorio</button>
					</a>
					<a href={demo} target='_blank' rel="noreferrer">
						<button><FaGlobe className={s.globeIcon}/>Demo</button>
					</a>
				</div>
			</div>
		</div>
	)
}