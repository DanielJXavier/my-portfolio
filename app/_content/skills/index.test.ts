describe("resume skill validation", () => {
  afterEach(() => {
    jest.resetModules();
    jest.dontMock("./shared");
    jest.dontMock("@/app/_content/_utils/validate-locale-keys");
  });

  it("reports resume skills that are missing from the skill catalog", async () => {
    jest.resetModules();

    jest.doMock("@/app/_content/_utils/validate-locale-keys", () => ({
      validateLocaleKeys: jest.fn(),
    }));

    jest.doMock("./shared", () => ({
      hardSkills: [{ key: "known-hard" }],
      softSkills: [{ key: "known-soft", size: 1 }],
      chosenHardSkills: ["known-hard", "unknown-hard"],
      chosenSoftSkills: ["unknown-soft"],
    }));

    await expect(import("./index")).rejects.toThrow(
      "Unknown resume hard skills: unknown-hard\nUnknown resume soft skills: unknown-soft",
    );
  });
});
