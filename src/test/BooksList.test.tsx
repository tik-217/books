import { render, screen } from "@testing-library/react";
import BooksList from "../components/BooksList";

test("Checking the loading of the list of books on request", () => {
  render(<BooksList />);

  const ulLength = screen.getByRole("ul");

  console.log(ulLength);

  expect(ulLength).toHa(30);
});
