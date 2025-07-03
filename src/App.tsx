import { useState, type MouseEvent } from 'react';
import Modal from './components/Modal/ Modal';
import Button from './components/Button/Button';
import settingsIcon from './assets/icon-settings.svg';
import SvgComponent from './components/Button/SvgComponent';
import TimerSwitch from './components/TimerSwitch/TimerSwitch';
import { type Customizations, type Timers } from './utils/types';
import './App.css';

const DEFAULT_STATE: Customizations = {
	font: 'Kumbh Sans',
	color: '#f87070',
	timer: 'short',
};

function App() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [customizations, setCustomizations] = useState<Customizations>(DEFAULT_STATE);
	const [currentTimer, setCurrentTimer] = useState<number>(0);
	const [isActive, setIsActive] = useState<boolean>(false);
	const [translateX, setTranslateX] = useState(0);

	console.log({ customizations });
	console.log(customizations.timer);
	const handleSelectTimer = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.target as HTMLElement;
		const x = target.getBoundingClientRect().left;
		const time: string = target.innerHTML;
		console.log({ time });
		setTranslateX(x - 335);
		//@ts-ignore
		updateCustomizations({ key: 'timer', value: time });
	};

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
			{/* <TimerSwitch /> */}
			<div className="tab-container">
				<div
					className="timer-selector"
					style={{ transform: `translateX(${translateX}px)` }}
				></div>
				<div className="tab" onClick={(e) => handleSelectTimer(e)}>
					pomodero
				</div>
				<div className="tab" onClick={(e) => handleSelectTimer(e)}>
					short break
				</div>
				<div className="tab" onClick={(e) => handleSelectTimer(e)}>
					long break
				</div>
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
					<SvgComponent iconSvg={settingsIcon} />
				</Button>
			</div>
			{isOpen && <Modal toggle={toggling} update={updateCustomizations} />}
		</div>
	);
}

export default App;
