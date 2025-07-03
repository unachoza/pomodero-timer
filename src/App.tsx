import { useState } from "react";
import settingsIcon from "./assets/icon-settings.svg";
import "./App.css";

function App() {
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
				<img src={settingsIcon} alt="adjust settings" />
			</div>
		</div>
	);
}

export default App;
