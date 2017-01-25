package org.lrc.liferay.toolbuilder.tests.functional.steps;

import org.junit.Assert;
import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolInstanceCommonPage;
import org.lrc.liferay.toolbuilder.tests.functional.utils.DriverFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ToolInstanceCommonSteps extends AbstractStepClass {

	@Before
	public void beforeScenario() {
		this.driver = new DriverFactory().getDriver();
	}

	@After
	public void afterScenario() {
		new DriverFactory().destroyDriver();
	}

	@When("^(?:she|he|the user) logs in the system as ([^\"]*) with password ([^\"]*)$")
	public void logIn(String login, String passwd) {
//		new ToolInstanceCommonPage(this.driver).deleteToolInstance();
		new ToolInstanceCommonPage(driver).clickLogIn();
		new ToolInstanceCommonPage(driver).fillLogin(login, passwd);
	}
	
	@When("^(?:she|he|the user) logs out$")
	public void logOut() {
//		new ToolInstanceCommonPage(this.driver).deleteToolInstance();
		new ToolInstanceCommonPage(driver).clickLogOut();
	}

	@When("^(?:she|he|the user) is not logged in$")
	public void isNotLoggedIn() {
		Assert.assertTrue(new ToolInstanceCommonPage(driver).loginButtonIsPresent());
	}
	
	@When("^(?:she|he|the user|a user) goes to the page ([^\"]*)$")
	public void goToPage(String page) {
		System.out.println(page);
		this.driver.navigate().to(page);
	}
	
	@When("^(?:she|he|the user) deletes the current tool instance$")
	public void deleteToolInstance() {
//		new ToolInstanceCommonPage(this.driver).deleteToolInstance();
		new ToolInstanceCommonPage(driver).deleteToolInstance();
	}
	
	@Then("^the page was not found$")
	public void pageNotFound() {
		Assert.assertTrue(new ToolInstanceCommonPage(driver).isPageNotFound());
	}

	@Then("^the login portlet is showed$")
	public void loginPortletExists() {
		Assert.assertTrue(new ToolInstanceCommonPage(driver).loginPortletExists());
	}

	@Then("^there is no button to delete the current tool instance$")
	public void deleteInstanceButtonNotPresent() {
		Assert.assertFalse(new ToolInstanceCommonPage(driver).deleteInstanceButtonIsPresent());
	}
	
	@And("^(?:she|he|the user) waits (\\d+) seconds$")
	public void waitSeconds(int seconds) throws InterruptedException {
		new ToolInstanceCommonPage(driver).waitSeconds(seconds);
	}
	
	@And("^(?:she|he|the user) chooses to step forward$")
	public void stepForward() {
//		new ToolInstanceCommonPage(this.driver).stepForward();
		new ToolInstanceCommonPage(driver).stepForward();
	}
	
	@Then("^there is no button to step forward the current tool instance$")
	public void stepForwardButtonNotPresent() {
		Assert.assertFalse(new ToolInstanceCommonPage(driver).stepForwardButtonIsPresent());
	}
	
	@And("^(?:she|he|the user) chooses to exit the tool instance$")
	public void exitToolInstance() {
//		new ToolInstanceCommonPage(this.driver).exitToolInstance();
		new ToolInstanceCommonPage(driver).exitToolInstance();
	}
	
	@Then("^an error message with text \"(.*)\" is shown$")
	public void errorMessageIs(String errorMessage) {
		new ToolInstanceCommonPage(driver).errorMessageNewInstanceIs(errorMessage);
	}
	
	@Then("^an error message with text \"(.*)\" is shown for the new tool definition$")
	public void errorMessageNewToolDefIs(String errorMessage) {
		new ToolInstanceCommonPage(driver).errorMessageNewToolDefIs(errorMessage);
	}
}
