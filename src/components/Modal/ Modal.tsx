import Button from "../Button/Button";
import closeIcon from "../../assets/icon-close.svg";
import type { ReactNode } from "react";
import "./Modal.css";
import FormInput from "../FormInput/FormInput";

interface ModalProps {
	toggle: () => void;
	// Children: ReactNode
}

type Timer = {
	label: string;
	time: number;
};

const colorOptions = ["peach", "cyan", "lilac"];
const timeOptions = [
	{ label: "pomodoro", time: 25 },
	{ label: "short break", time: 5 },
	{ label: "long break", time: 15 },
];
const fontOptions = ["Kumbh Sans", "Roboto Slab", "Space Mono"];

const Modal = ({ toggle }: ModalProps) => {
	const renderControls = <T,>(title: string, options: T[], renderOption: (option: T, index: number) => ReactNode, variant?: string) => {
		return (
			<div className={`control ${variant ?? ""}`.trim()}>
				<div className="title">{title}</div>
				<div className="options">{options.map(renderOption)}</div>
			</div>
		);
	};

	return (
		<div className="modal-container">
			<div className="modal">
				<div className="heading">
					<h2>Settings</h2>
					<Button type="button" variant="icon" onChange={toggle}>
						<img src={closeIcon} alt="adjust settings" />
					</Button>
				</div>
				<div className="controlls-container">
					<div className="time-selection">
						{renderControls(
							"Time (minutes)",
							timeOptions,
							({ label, time }) => (
								<FormInput key={label} label={label} time={time} />
							),
							"variant-style"
						)}
					</div>

					<div className="font-selection">
						{renderControls("font", fontOptions, (option) => (
							<Button key={option.toString()} variant="setting-selection" onChange={() => console.log(`change font to ${option}`)}>
								{option.toString()}
							</Button>
						))}
					</div>
					<div className="color-selection">
						{renderControls("color", colorOptions, (option) => (
							<Button key={option.toString()} variant="setting-selection" onChange={() => console.log(`change color to ${option}`)}>
								{option.toString()}
							</Button>
						))}
					</div>
				</div>
				<div className="modal-button">
					<Button type="submit" variant="classic" onChange={() => console.log("click")}>
						Apply
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
