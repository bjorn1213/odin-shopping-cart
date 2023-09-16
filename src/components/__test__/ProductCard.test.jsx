import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";

let product;

describe("ProductCard", () => {
  beforeAll(async () => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    product = await res.json();
  });

  it("Has an element with the product title", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(product.title)).toBeInTheDocument();
  });

  it("Has an element with the product price", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(product.price)).toBeInTheDocument();
  });

  it("Has an element with the product description", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(product.description)).toBeInTheDocument();
  });

  it("Has an image element with the product image", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByRole("img").src).toBe(product.image);
  });

  it("Has an image element with the title as alt text", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByRole("img").alt).toBe(product.title);
  });
});
