import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

const navItems = [
  { text: "Home", target: "/" },
  { text: "Products", target: "/products" },
  { text: "Cart", target: "/cart" },
];

describe("NavBar component", () => {
  it("Contains correct amount of entries", () => {
    render(
      <MemoryRouter>
        <NavBar navItems={navItems} />
      </MemoryRouter>
    );

    const navContents = screen.getAllByRole("listitem");
    expect(navContents.length).toBe(3);
  });
});
