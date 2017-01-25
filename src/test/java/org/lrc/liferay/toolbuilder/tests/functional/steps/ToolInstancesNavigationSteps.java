package org.lrc.liferay.toolbuilder.tests.functional.steps;

import org.junit.Assert;
import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolInstanceCommonPage;
import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolInstanceEditPage;
import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolInstancesNavigationPage;
import org.lrc.liferay.toolbuilder.tests.functional.utils.DriverFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ToolInstancesNavigationSteps extends AbstractStepClass {
	
	@Before
	public void beforeScenario() {
		this.driver = new DriverFactory().getDriver();
	}

	@After
	public void afterScenario() {
		new DriverFactory().destroyDriver();
	}

	@Given("^(?:she|he|the user) (?:is on|goes to) the Tool Instances Navigation Page$")
	public void setup() {
		this.driver.navigate().to(homeURL);
	}
	
	@Given("^(?:she|he|the user) creates a tool instance called \"([^\"]*)\"$")
	public void createNewToolInstance(String toolInstanceName) {
		this.newToolInstance();
		new ToolInstanceEditPage(driver).newToolInstanceName(toolInstanceName);
		new ToolInstanceEditPage(driver).createToolInstance();
		new ToolInstanceCommonPage(driver).exitToolInstance();
		this.existingToolInstance(toolInstanceName);
	}

	@When("^(?:she|he|the user) chooses to create a new tool instance$")
	public void newToolInstance() {
//		new ToolInstancesNavigationPage(this.driver).newToolInstance();
		new ToolInstancesNavigationPage(driver).newToolInstance();
	}

	@Then("^there is no button to create a new tool instance$")
	public void createInstanceButtonNotPresent() {
		Assert.assertFalse(new ToolInstancesNavigationPage(driver).createInstanceButtonIsPresent());
	}
	
	@When("^(?:she|he|the user) selects the tool instance \"([^\"]*)\"$")
	public void selectToolInstance(String toolInstanceName) {
//		new ToolInstancesNavigationPage(this.driver).selectToolInstance(toolInstanceName);
		new ToolInstancesNavigationPage(driver).selectToolInstance(toolInstanceName);
	}
	
	@Then("^a tool instance called \"([^\"]*)\" does not exist$")
	public void notExistingToolInstance(String toolInstanceName) throws Exception {
//		boolean exists = new ToolInstancesNavigationPage(this.driver).existsToolInstance(toolInstanceName);
		if (!(new ToolInstancesNavigationPage(driver).emptyToolInstancesList())) {
			boolean exists = new ToolInstancesNavigationPage(driver).existsToolInstance(toolInstanceName);
			Assert.assertFalse(exists);
		}
	}
	
	@Then("^a tool instance called \"([^\"]*)\" exists$")
	public void existingToolInstance(String toolInstanceName) {
//		boolean exists = new ToolInstancesNavigationPage(this.driver).existsToolInstance(toolInstanceName);
		boolean exists = new ToolInstancesNavigationPage(driver).existsToolInstance(toolInstanceName);
		Assert.assertTrue(exists);
	}
	
	@Then("^there are no Tool Instances$")
	public void emptyToolInstancesList() throws Exception {
		Assert.assertTrue(new ToolInstancesNavigationPage(driver).emptyToolInstancesList());
	}
	
	@And("^(?:she|he|the user) deletes all the existing Tool Instances")
	public void deleteAllToolInstances() throws Exception {
		while (!(new ToolInstancesNavigationPage(driver).emptyToolInstancesList())) {
			new ToolInstancesNavigationPage(driver).selectFirstToolInstance();
			new ToolInstanceCommonPage(driver).deleteToolInstance();
		}
	}

	@Then("^the tool instance called \"([^\"]*)\" is on step (\\d+)")
	public void verifyToolInstanceStep(String toolInstanceName, int stepNumber) {
		Assert.assertEquals(stepNumber, new ToolInstancesNavigationPage(driver).getStepOf(toolInstanceName));
	}
	
	@Then("^the name of the tool definition is \"([^\"]*)\"$") 
	public void verifyToolDefName(String toolDefName) {
		Assert.assertEquals(toolDefName, new ToolInstancesNavigationPage(driver).getToolDefName());
	}
}
