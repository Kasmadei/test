const { Builder, By, until } = require("selenium-webdriver");

async function authTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Start, go to registration page
    await driver.get("http://localhost:3000/");
    await (await driver.findElement(By.id("log-in-button"))).click();
    // Wait until redirect finishes.
    await driver.wait(until.urlContains("b2clogin"), 5000);

    // Inputs
    const emailInput = await driver.findElement(By.id("email"));
    emailInput.sendKeys("kasmadeix300@gmail.com");
    const passwordInput = await driver.findElement(By.id("password"));
    passwordInput.sendKeys("kirill-stom98");
    const loginButton = await driver.findElement(By.id("next"));
    await loginButton.click();
  } catch (e) {
    console.log(e, "ERROR");
    driver.quit();
  }
}

authTest();
