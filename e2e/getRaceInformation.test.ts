import { expect } from 'detox';

describe("Get Race information", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("should have the search button", async () => {
    await expect(element(by.id("search-season-button"))).toBeVisible();
  });

  it("should search for a Formula 1 season", async () => {
    await element(by.id("search-season-input")).tap();
    await element(by.id("search-season-input")).typeText('2023');
    await element(by.id("search-season-input")).tapReturnKey();

    await element(by.id("search-season-button")).tap();

    await waitFor(
      element(by.id("season-results-card")).atIndex(0)
    ).toBeVisible().withTimeout(10000);
  });

  it("should search for a Formula 1 race", async () => {
    await element(by.id("season-results-card")).atIndex(0).tap();
    
    await waitFor(
      element(by.id("round-results-card")).atIndex(0)
    ).toBeVisible().withTimeout(10000);
  });
});

