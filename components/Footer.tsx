import { useState } from 'react';
import styles from '../styles/Footer.module.sass';
import AccountTab from './AccountTab';
import SVG from './Svg';

const Footer = () => {
	const [openAccountTab, setOpenAccountTab] = useState(false);

	return (
		<>
			<AccountTab
				setStateRef={openAccountTab && setOpenAccountTab}
				stateRef={openAccountTab && openAccountTab}
				cls={openAccountTab ? 'accountTabOpen' : ''}
			/>
			<footer className={styles.container}>
				<nav>
					<button
						title="Dashboard"
						disabled={openAccountTab ? false : true}
						onClick={() => setOpenAccountTab(false)}
					>
						<SVG.Home />
					</button>
					<button
						title="Account"
						disabled={!openAccountTab ? false : true}
						onClick={() => setOpenAccountTab(!openAccountTab)}
					>
						<SVG.User />
					</button>
				</nav>
			</footer>
		</>
	);
};

export default Footer;
