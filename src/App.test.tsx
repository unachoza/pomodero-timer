import { render, screen } from "@testing-library/react";
import App from "./App";

test("has text", () => {
	render(<App />);
	const message = screen.getByRole("heading");
	const messag = screen.getByText("Pomodero");
	expect(message).toBeVisible();
	expect(messag).toBeVisible();
});
