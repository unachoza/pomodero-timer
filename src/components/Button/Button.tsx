import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
	type?: "submit" | "reset" | "button";
	variant: string;
	children: ReactNode;
	onChange: () => void;
}

// BUTTON VARIANTS
// classic
// setting selection
// icon

const Button = ({ children, type = "button", variant, onChange }: ButtonProps) => {
	return (
		<button type={type} className={variant} onClick={onChange}>
			{children}
		</button>
	);
};

export default Button;
