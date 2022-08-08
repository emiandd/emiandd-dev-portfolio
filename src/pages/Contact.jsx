import NavBar from '../components/NavBar.jsx';
import s from '../css/Contact.module.css';
import { ReactComponent as FaEmail } from '../assets/email-icon.svg';
import { ReactComponent as FaLinkedIn } from '../assets/linkedin-icon.svg';
import { ReactComponent as FaWhatsApp } from '../assets/whatsapp-icon.svg';

export default function Contact() {
	return (
		<div>
			<NavBar />
			<main className={s.main}>
				<p>Puedes contactarme a través de</p>
				<div>
					<a href="mailto:emilandresaravena@icloud.com">
						<FaEmail className={s.icon}/>
					</a>
					<a href="https://www.linkedin.com/in/emiandd/" target="_blank" rel="noreferrer">
						<FaLinkedIn className={s.icon} />
					</a>
					<a href="https://wa.me/56947558161" target="_blank" rel="noreferrer">
						<FaWhatsApp className={s.icon} />
					</a>
				</div>
			</main>
		</div>
	)
}