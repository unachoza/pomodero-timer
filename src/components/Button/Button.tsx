import "./Button.css";

interface ButtonProps {
	text: string;
	onChange: () => void;
}

const Button = ({ text, onChange }: ButtonProps) => {
	return (
		<button type="button" onClick={() => onChange()}>
			{text}
		</button>
	);
};

export default Button;
