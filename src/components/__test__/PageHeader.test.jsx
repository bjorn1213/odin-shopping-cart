import PageHeader from "../PageHeader";
import NavBar from "../NavBar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("PageHeader component", () => {
  it("dummy", () => {
    render(
      <MemoryRouter>
        <PageHeader>
          <NavBar />
        </PageHeader>
      </MemoryRouter>
    );

    const x = screen.getByRole("heading");
    expect(x.textContent).toBe("ShoppyShop");
  });
});
