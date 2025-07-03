import { useState } from "react";
import Modal from "./components/Modal/ Modal";
import Button from "./components/Button/Button";
import settingsIcon from "./assets/icon-settings.svg";
import "./App.css";

function App() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggling = () => setIsOpen((prevState) => !prevState);
	return (
		<div className="main">
			<h1 className="title">Pomodero</h1>
			<div className="tab-container">
				<div className="tab">pomodero</div>
				<div className="tab">short break</div>
				<div className="tab">long break</div>
			</div>
			<div className="progress-container">
				<div className="progress"></div>
			</div>
			<div className="settings">
				<Button type="button" variant="icon" onChange={toggling}>
					<img src={settingsIcon} alt="adjust settings" />
				</Button>
			</div>
			{isOpen && <Modal toggle={toggling} />}
		</div>
	);
}

export default App;
