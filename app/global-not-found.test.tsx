import GlobalNotFound from "./global-not-found";

jest.mock("next/font/google", () => ({
  Source_Code_Pro: () => ({ className: "source-code-pro" }),
}));

describe("GlobalNotFound", () => {
  it("renders the global not-found shell with its font class", () => {
    const page = GlobalNotFound();

    expect(page.props.fontClassName).toBe("source-code-pro");
  });
});
