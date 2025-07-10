import { useState, type MouseEvent } from 'react';
import Modal from './components/Modal/ Modal';
import Button from './components/Button/Button';
import settingsIcon from './assets/icon-settings.svg';
import SvgComponent from './components/Button/SvgComponent';
import TimerSwitch from './components/TimerSwitch/TimerSwitch';
import { type Customizations, type Timers, type Time } from './utils/types';
import './App.css';

const timeOptions: Time[] = [
	{ label: 'pomodoro', value: 25 },
	{ label: 'short break', value: 5 },
	{ label: 'long break', value: 15 },
];

const DEFAULT_STATE: Customizations = {
	font: 'Kumbh Sans',
	color: '#f87070',
	// timer: timeOptions,
};

const DEFAULT_TIMERS: Timers = {
	pomodero: 25,
	short: 5,
	long: 15,
};

type TimerLabel = keyof Timers; // "pomedero" | "short" | "long"

function App() {
	const [customizations, setCustomizations] = useState<Customizations>(DEFAULT_STATE);
	const [userTimers, setUserTimers] = useState<Timers>(DEFAULT_TIMERS);
	// const [currentTimer, setCurrentTimer] = useState<Time>({ label: 'pomodero', value: 25 });
	const [currentTimer, setCurrentTimer] = useState<number>(25);
	const [isActive, setIsActive] = useState<boolean>(false);
	const [translateX, setTranslateX] = useState(0);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	console.log({ customizations });
	console.log({ currentTimer });
	console.log({ userTimers });

	const getFirstWord = (input: string): string => {
		const words = input.trim().split(/\s+/);
		if (words.length > 1) {
			return words[0];
		}
		return input;
	};

	const handleSelectTimer = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLElement;
		const x = target.getBoundingClientRect().left;
		// const time: string = target.innerHTML;
		const time = getFirstWord(target.innerText) as TimerLabel;
		setTranslateX(x - 335);
		const selected = userTimers[time];
		setCurrentTimer(selected);
		// updateCustomizations({ key: 'timer', value: time });
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

	const formatTime = (minutes: number): string => {
		const seconds = minutes * 60;
		return `${minutes}:00`;
	};

	// const startCountdown = () => {
	// 	const countdownInterval = setInterval(() => {
	// 		setCurrentTimer((prevTimer) => {
	// 			if (prevTimer <= 1) {
	// 				clearInterval(countdownInterval);
	// 				return 0;
	// 			}
	// 			return prevTimer - 1;
	// 		});
	// 	}, 1000);
	// };

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

					<Button variant="main" onChange={() => console.log('start countdown')}>
						{/* onChange={startCountdown} */}
						{isActive ? 'PAUSE' : 'RESTART'}
					</Button>
				</div>
			</div>
			<div className="settings">
				<Button variant="icon" onChange={toggling}>
					<SvgComponent iconSvg={settingsIcon} />
				</Button>
			</div>
			{/* update={updateCustomizations} */}
			{isOpen && <Modal toggle={toggling} />}
		</div>
	);
}

export default App;
