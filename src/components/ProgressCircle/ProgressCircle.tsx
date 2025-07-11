type ProgressCircleProps = {
	radius?: number;
	stroke?: number;
	progress: number;
};

const ProgressCircle = ({ radius = 205, stroke = 20, progress }: ProgressCircleProps) => {
	const normalizedRadius = radius - stroke / 2 - 20;
	const circumference = 2 * Math.PI * normalizedRadius;
	const offset = circumference - (progress / 100) * circumference;

	return (
		<svg height={radius * 2} width={radius * 2} style={{ transform: 'rotate(-90deg)' }}>
			<circle
				stroke="none"
				fill="none"
				strokeWidth={stroke}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
			/>
			<circle
				stroke="var(--color-theme)"
				fill="none"
				strokeWidth={stroke}
				strokeLinecap="round"
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
				style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
			/>
		</svg>
	);
};

export default ProgressCircle;
