export type Timers = {
	pomodero: number;
	short: number;
	long: number;
};
export type Time = {
	label: string;
	value: number;
};

export type Customizations = {
	font: 'Kumbh Sans' | 'Roboto Slab' | 'Space Mono';
	color: '#f87070' | '#70f3f8' | '#d881f8';
	// timer: Time[];
};
