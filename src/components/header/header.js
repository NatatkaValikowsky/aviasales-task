import React from 'react';
import Logo from './Logo.png';

import classes from './header.module.scss';

const Header = () => (
	<div className={classes['logo-block']}>
		<a href="/" className={classes.logo}>
			<img src={Logo} alt="Логотип" className={classes.logo__img} />
		</a>
	</div>
);

export default Header;
