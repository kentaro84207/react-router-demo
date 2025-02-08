import { render, screen } from "@testing-library/react";
import { Welcome } from "./welcome";

describe("Welcome コンポーネントのテスト", () => {
  test("「What's next?」テキストがレンダリングされる", () => {
    render(<Welcome />);
    expect(screen.getByText("What's next?")).toBeInTheDocument();
  });
});
