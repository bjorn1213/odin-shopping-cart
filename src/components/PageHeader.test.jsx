import PageHeader from "./PageHeader";
import NavBar from "./NavBar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const navItems = [
  { text: "Home", target: "/" },
  { text: "Products", target: "/products" },
  { text: "Cart", target: "/cart" },
];

const navBar = <NavBar navItems={navItems} />;

describe("PageHeader component", () => {
  it("dummy", () => {
    render(
      <MemoryRouter>
        <PageHeader>{navBar}</PageHeader>
      </MemoryRouter>
    );

    const x = screen.getByRole("heading");
    expect(x.textContent).toBe("ShoppyShop");
  });
});
