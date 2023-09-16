import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import IconButton from "./IconButton";

describe("IconButton component", () => {
  it("Contains specified image", () => {
    const imgSrc =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/2048px-Flat_tick_icon.svg.png";

    render(<IconButton iconSrc={imgSrc} />);
    const icon = screen.getByRole("img");

    expect(icon.src).toContain(imgSrc);
  });

  it("Calls the correct callback", async () => {
    const buttonCallback = vi.fn();
    const user = userEvent.setup();

    render(<IconButton iconSrc={""} buttonCallback={buttonCallback} />);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(buttonCallback).toHaveBeenCalled();
  });

  it("Has no text", () => {
    const imgSrc = "";

    render(<IconButton iconSrc={imgSrc} />);
    const button = screen.getByRole("button");

    expect(button.textContent).toEqual("");
  });
});
