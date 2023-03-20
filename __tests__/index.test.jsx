// __tests__/index.test.jsx
import { render, screen } from "@testing-library/react";
import Main from "../src/pages/index";
import "@testing-library/jest-dom";
describe("Main", () => {
  it("renders a heading", () => {
    render(<Main />);
    const heading = screen.getByText("Martins webb");
    expect(heading).toBeInTheDocument();
  });
});