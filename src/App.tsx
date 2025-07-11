import { useState, type MouseEvent } from 'react';
import Modal from './components/Modal/ Modal';
import Button from './components/Button/Button';
import ProgressCircle from './components/ProgressCircle/ProgressCircle';
import settingsIcon from './assets/icon-settings.svg';
import SvgComponent from './components/Button/SvgComponent';
import TimerSwitch from './components/TimerSwitch/TimerSwitch';
import { type Customizations, type Timers, type Time } from './utils/types';
import './App.css';

const DEFAULT_TIMERS: Timers = {
	pomodero: 25,
	short: 5,
	long: 15,
};

type TimerLabel = keyof Timers; // "pomedero" | "short" | "long"

function App() {
	const [userTimers, setUserTimers] = useState<Timers>(DEFAULT_TIMERS);
	const [currentTimer, setCurrentTimer] = useState<number>(20);
	const [initialDuration, setInitialDuration] = useState<number>(currentTimer);
	const [isActive, setIsActive] = useState<boolean>(false);
	const [translateX, setTranslateX] = useState(0);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [progress, setProgress] = useState(100);

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
		const time = getFirstWord(target.innerText) as TimerLabel;
		setTranslateX(x - 335);
		const selected = userTimers[time];
		setCurrentTimer(convertMinutesToSeconds(selected));
		setInitialDuration(convertMinutesToSeconds(selected));
		// updateCustomizations({ key: 'timer', value: time });
	};

	const toggling = () => setIsOpen((prevState) => !prevState);

	const formatCountdownTime = (time: number | string): string => {
		const totalSeconds = typeof time === 'string' ? Number(time) : time;

		if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
			return '00:00';
		}

		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		const formattedMinutes = String(minutes).padStart(2, '0');
		const formattedSeconds = String(seconds).padStart(2, '0');

		return `${formattedMinutes}:${formattedSeconds}`;
	};

	const startCountdown = () => {
		//updateProgressCircle
		/////// TODO
		// if countdown says 00 then restart else pause
		setIsActive(true);
		const countdownInterval = setInterval(() => {
			setCurrentTimer((prevTimer) => {
				if (prevTimer <= 1) {
					clearInterval(countdownInterval);
					setIsActive(false);
					setProgress(0);
					return 0;
				}

				const nextTime = prevTimer - 1;
				const percent = (nextTime / initialDuration) * 100;

				setProgress(percent);
				return nextTime;
			});
		}, 1000);
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
				<ProgressCircle progress={progress} />
				<div className="progress-button">
					{formatCountdownTime(currentTimer)}
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
			{isOpen && <Modal toggle={toggling} />}
		</div>
	);
}

export default App;
