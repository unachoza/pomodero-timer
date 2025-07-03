import Button from '../Button/Button';
import upArrow from '../../assets/icon-arrow-up.svg';
import downArrow from '../../assets/icon-arrow-down.svg';
import SvgComponent from '../Button/SvgComponent';
import './FormInput.css';
import { useState } from 'react';

interface FormInputProps {
	label: string;
	time: number;
}

const FormInput = ({ label, time }: FormInputProps) => {
	const [value, setValue] = useState<number>(time);
	const increaseTime = () => {
		setValue((prevState) => (prevState += 1));
	};

	const decreaseTime = () => {
		setValue((prevState) => (prevState -= 1));
	};
	return (
		<div className="number-input-container">
			<label htmlFor={label}>{label}</label>
			<div className="input">
				<input
					id={label}
					type="number"
					aria-label={label}
					name={label}
					value={value}
					onChange={(e) => setValue(parseInt(e.target.value))}
				/>
				<div className="controls">
					<Button variant="icon" onChange={increaseTime}>
						<SvgComponent iconSvg={upArrow} />
					</Button>
					<Button variant="icon" onChange={decreaseTime}>
						<SvgComponent iconSvg={downArrow} />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FormInput;
