// const ArrowSvg = ({ rotate = 0, className = '', ...props }) => {
// 	const cx = 14 / 2; // 7
// 	const cy = 7 / 2; // 3.5

// 	return (
// 		<svg
// 			className={className}
// 			width="14"
// 			height="7"
// 			viewBox="0 0 14 7"
// 			fill="none"
// 			stroke="currentColor"
// 			strokeOpacity="0.9"
// 			strokeWidth="2"
// 			xmlns="http://www.w3.org/2000/svg"
// 			{...props}
// 		>
// 			<g transform={`rotate(${rotate} ${cx} ${cy})`}>
// 				<path d="M1 6l6-4 6 4" />
// 			</g>
// 		</svg>
// 	);
// };

// export default ArrowSvg;

//change fill color?
const SvgComponent = ({ iconSvg = '', varient = '' }) => {
	const allClasses = ['icon-wrapper', varient].filter(Boolean).join(' ');
	return (
		<span className={allClasses}>
			<img src={iconSvg} alt="adjust settings" />
		</span>
	);
};

export default SvgComponent;
