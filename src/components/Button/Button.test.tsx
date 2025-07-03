import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Button component", () => {
	it("has correct text", () => {
		render(<Button text="click me" onChange={() => console.log("was click")} />);
		const buttonText = screen.getByText("click me");
		expect(buttonText).toBeVisible();
	});
	it("on click calls correct function", () => {});
	it("hover functionality works", () => {});
});
