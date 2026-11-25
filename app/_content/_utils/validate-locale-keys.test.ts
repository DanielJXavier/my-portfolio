import { validateLocaleKeys } from "./validate-locale-keys";

type Item = { id: string };

describe("validateLocaleKeys", () => {
  const getId = (item: Item) => item.id;

  it("accepts matching locale keys", () => {
    expect(() =>
      validateLocaleKeys("Skills", "en", [{ id: "one" }], { one: "One" }, getId),
    ).not.toThrow();
  });

  it("reports missing, unknown, and duplicate static keys", () => {
    expect(() =>
      validateLocaleKeys(
        "Skills",
        "pt",
        [{ id: "one" }, { id: "one" }, { id: "two" }],
        { extra: "Extra" },
        getId,
      ),
    ).toThrow(
      'Skills content keys do not match for locale "pt".\nMissing: one, one, two\nUnknown: extra\nStatic entries contain duplicate IDs.',
    );
  });
});
