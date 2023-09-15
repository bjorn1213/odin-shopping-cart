import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("Contains specified text", () => {
    const specifiedText = "Some text";

    render(<Button buttonText={specifiedText} />);

    expect(screen.getByRole("button").textContent).toMatch(specifiedText);
  });

  it("Calls the correct callback", async () => {
    const buttonCallback = vi.fn();
    const user = userEvent.setup();

    render(<Button buttonText={""} buttonCallback={buttonCallback} />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(buttonCallback).toHaveBeenCalled();
  });
});
