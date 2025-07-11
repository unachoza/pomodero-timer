import {
	useState,
	useEffect,
	useContext,
	createContext,
	type ReactNode,
	type Dispatch,
	type SetStateAction,
} from 'react';

type ThemeContextType = {
	font: string;
	setFont: Dispatch<SetStateAction<string>>;
	color: string;
	setColor: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const DEFAULT_FONT = 'Kumbh Sans';
const DEFAULT_COLOR = 'hsl(0, 91%, 71%)';

const fontMap: Record<string, string> = {
	kumbhSans: DEFAULT_FONT,
	robotoSlab: 'Roboto Slab',
	spaceMono: 'Space Mono',
};
const colorMap: Record<string, string> = {
	froly: DEFAULT_COLOR,
	malibu: 'hsl(182, 91%, 71%)',
	heliotrope: 'hsl(260, 91%, 71%)',
};

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [font, setFont] = useState(() => {
		try {
			const storedFont = localStorage.getItem('selectedFont');
			return storedFont && fontMap ? fontMap[storedFont] : DEFAULT_FONT;
		} catch (error) {
			console.error('Failed to read font from localStorage:', error);

			return DEFAULT_FONT;
		}
	});

	const [color, setColor] = useState(() => {
		try {
			const storedColor = localStorage.getItem('selectedColor');
			return storedColor && colorMap ? colorMap[storedColor] : DEFAULT_COLOR;
		} catch (error) {
			console.error('failed to read color from localStorage:', error);
			return DEFAULT_COLOR;
		}
	});

	console.log(color, font);
	useEffect(() => {
		document.documentElement.style.setProperty(
			'--font-theme',
			`'${font || DEFAULT_FONT}', sans-serif`
		);
		document.documentElement.style.setProperty('--color-theme', color || DEFAULT_COLOR);
	}, [font, color]);

	return (
		<ThemeContext.Provider value={{ font, setFont, color, setColor }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);

// export { useTheme, ThemeProvider };
