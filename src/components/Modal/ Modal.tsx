import Button from "../Button/Button";
import closeIcon from "../../assets/icon-close.svg";
import type { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
	toggle: () => void;
	// Children: ReactNode
}

const colorOptions = ["peach", "cyan", "lilac"];
const timeOptions = [25, 5, 15];
const fontOptions = ["Kumbh Sans", "Roboto Slab", "Space Mono"];
const Modal = ({ toggle }: ModalProps) => {
	const renderControls = (title: string, options: ReactNode[]) => {
		return (
			<div className="control">
				<div className="title">{title}</div>
				<div className="options">
					{options.map((option: any) => (
						<Button variant="setting-selection" onChange={() => console.log(`change to ${option}`)}>
							{option}
						</Button>
					))}
				</div>
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
				<hr />
				<div className="controlls-container">
					{/* <div className="time-selection">{renderControls("time (minutes)", )}</div>*/}
					<div className="font-selection">{renderControls("font", fontOptions)}</div>
					<div className="color-selection">{renderControls("color", colorOptions)}</div>
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
