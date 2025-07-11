import Button from '../Button/Button';
import closeIcon from '../../assets/icon-close.svg';
import type { ReactNode } from 'react';
import './Modal.css';
import FormInput from '../FormInput/FormInput';
import SvgComponent from '../Button/SvgComponent';
import { useTheme } from '../../contexts/ThemeContext';

interface ModalProps {
	toggle: () => void;
	update: (updateProperty: { key: string; value: string }) => void;
	// Children: ReactNode
}

const colorOptions = [
	{ name: 'peach', value: '#f87070' },
	{ name: 'cyan', value: '#70f3f8' },
	{ name: 'lilac', value: '#d881f8' },
];
const timeOptions = [
	{ label: 'pomodoro', time: 25 },
	{ label: 'short break', time: 5 },
	{ label: 'long break', time: 15 },
];
const fontOptions = [
	{ name: 'Kumbh Sans', value: 'Aa' },
	{ name: 'Roboto Slab', value: 'Aa' },
	{ name: 'Space Mono', value: 'Aa' },
];

const Modal = ({ toggle }: ModalProps) => {
	const { font, setFont, color, setColor } = useTheme();

	const handleSubmit = () => {
		localStorage.setItem('selectedFont', font);
		localStorage.setItem('selectedColor', color);
		toggle();
	};

	const renderControls = <T,>(
		title: string,
		options: T[],
		renderOption: (option: T, index: number) => ReactNode,
		variant?: string
	) => {
		return (
			<div className={`control ${variant ?? ''}`.trim()}>
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
						<SvgComponent iconSvg={closeIcon} />
					</Button>
				</div>
				<div className="controlls-container">
					<div className="time-selection">
						{renderControls(
							'Time (minutes)',
							timeOptions,
							({ label, time }) => (
								<FormInput key={label} label={label} time={time} />
							),
							'variant-style'
						)}
					</div>

					<div className="font-selection">
						{renderControls('font', fontOptions, (option) => (
							<Button
								key={option.name.toString()}
								variant="setting-selection"
								setting={option.name}
								onChange={() => setFont(option.name)}
							>
								{option.value.toString()}
							</Button>
						))}
					</div>
					<div className="color-selection">
						{renderControls('color', colorOptions, (option) => (
							<Button
								key={option.name.toString()}
								variant="setting-selection"
								setting={option.name}
								onChange={() => setColor(option.value)}
							>
								{''}
							</Button>
						))}
					</div>
				</div>
				<div className="modal-button">
					<Button type="submit" variant="classic" onChange={() => handleSubmit()}>
						Apply
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
