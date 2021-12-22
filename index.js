const { Builder, By, until, Key } = require("selenium-webdriver");

async function authTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Start, go to registration page
    await driver.get("http://localhost:3000/");
    await (await driver.findElement(By.id("log-in-button"))).click();
    // Wait until redirect finishes.
    await driver.manage().setTimeouts({ implicit: 2000 });
    // // Inputs
    const emailInput = await driver.findElement(By.id("email"));
    emailInput.sendKeys("kasmadeix300@gmail.com");
    const passwordInput = await driver.findElement(By.id("password"));
    passwordInput.sendKeys("kirill-stom98");
    const loginButton = await driver.findElement(By.id("next"));
    await loginButton.click();

    await driver.manage().setTimeouts({ implicit: 2000 });

    // Shared code test:
    await (await driver.findElement(By.id("Projects"))).click();
    await (await driver.findElement(By.id("Pet collection"))).click();
    await (await driver.findElement(By.id("shared-button"))).click();

    const viewLine = await driver.findElement(By.className("view-line"));
    await viewLine.click();
    driver.actions().sendKeys("123").perform();
    await (await driver.findElement(By.id("save-shared-code"))).click();
  } catch (e) {
    console.log(e, "ERROR");
    driver.quit();
  }
}

authTest();
