import { useState } from 'react';
import './TimerSwitch.css';

const TimerSwitch = () => {
	const [translateX, setTranslateX] = useState(0);

	const handleClick = (e) => {
		const x = e.target.getBoundingClientRect().left;
		setTranslateX(x - 335);
	};

	return (
		<div className="tab-container">
			<div
				className="timer-selector"
				style={{ transform: `translateX(${translateX}px)` }}
			></div>
			<div className="tab" onClick={(e) => handleClick(e)}>
				pomodero
			</div>
			<div className="tab" onClick={(e) => handleClick(e)}>
				short break
			</div>
			<div className="tab" onClick={(e) => handleClick(e)}>
				long break
			</div>
		</div>
	);
};

export default TimerSwitch;
