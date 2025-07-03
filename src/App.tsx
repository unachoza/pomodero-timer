import { useState } from 'react';
import Modal from './components/Modal/ Modal';
import Button from './components/Button/Button';
import settingsIcon from './assets/icon-settings.svg';
import { type Customizations, type Timers } from './utils/types';
import './App.css';

const DEFAULT_STATE: Customizations = {
	font: 'Kumbh Sans',
	color: '#f87070',
	timers: { pomedero: 25, short: 5, long: 15 },
};

function App() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [customizations, setCustomizations] = useState<Customizations>(DEFAULT_STATE);
	const [currentTimer, setCurrentTimer] = useState<number>(0);
	const [isActive, setIsActive] = useState<boolean>(false);

	const toggling = () => setIsOpen((prevState) => !prevState);

	const updateCustomizations = <K extends keyof Customizations>(updateProperty: {
		key: K;
		value: Customizations[K];
	}) => {
		const newCustomizations = {
			...customizations,
			[updateProperty.key]: updateProperty.value,
		};

		setCustomizations(newCustomizations);
		console.log({ customizations });
	};

	const formatTwoDigits = (num: number): string => {
		return num.toString().padStart(2, '0');
	};

	const formatTime = (seconds: number): string => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${formatTwoDigits(mins)}:${formatTwoDigits(secs)}`;
	};

	const startCountdown = () => {
		console.log('tick tick boom!');
	};

	return (
		<div className="main">
			<h1 className="title">Pomodero</h1>
			<div className="tab-container">
				<div className="tab">pomodero</div>
				<div className="tab">short break</div>
				<div className="tab">long break</div>
			</div>
			<div className="progress-container">
				<div className="progress">
					{formatTime(currentTimer)}

					<Button variant="main" onChange={startCountdown}>
						{isActive ? 'PAUSE' : 'RESTART'}
					</Button>
				</div>
			</div>
			<div className="settings">
				<Button variant="icon" onChange={toggling}>
					<img src={settingsIcon} alt="adjust settings" />
				</Button>
			</div>
			{isOpen && <Modal toggle={toggling} update={updateCustomizations} />}
		</div>
	);
}

export default App;
