import type { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
	type?: 'submit' | 'reset' | 'button';
	variant: string;
	setting?: string;
	children: ReactNode;
	onChange: () => void;
}

// BUTTON VARIANTS
// classic
// main
// setting selection
// icon

const Button = ({ children, type = 'button', variant, setting, onChange }: ButtonProps) => {
	const allClasses = [variant, setting].filter(Boolean).join(' ');
	console.log({allClasses})
	return (
		<button type={type} className={allClasses} onClick={onChange}>
			{children}
		</button>
	);
	
};

export default Button;
