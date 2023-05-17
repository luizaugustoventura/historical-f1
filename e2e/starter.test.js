describe("Get Race information", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have the search button", async () => {
    await expect(element(by.id("search-season-button"))).toBeVisible();
  });

  // it("should look for a Formula 1 season", async () => {
  //   await element(by.id("search-season-button")).tap();

  //   await expect(element(by.id("season-results-view"))).toBeVisible();
  // });
});

