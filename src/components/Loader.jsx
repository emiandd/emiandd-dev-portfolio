import s from '../css/Loader.module.css';
import { useState } from 'react';

export default function Loader() {

	const [ loader, setLoader ] = useState(true);

	setTimeout( ()  => {
		setLoader(false);
	},3500)

	if(loader) document.body.style.overflow = 'hidden';
	else document.body.style.overflow = 'visible';

	return (
		<div className={loader ? s.loaderContainer : s.displayNone}>
			<div class={s.loader}></div>
		</div>
		)
}