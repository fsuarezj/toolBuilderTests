package org.lrc.liferay.toolbuilder.tests.functional.steps;

import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolInstanceEditPage;
import org.lrc.liferay.toolbuilder.tests.functional.utils.DriverFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;

public class ToolInstanceEditSteps extends AbstractStepClass {
	
	@Before
	public void beforeScenario() {
		this.driver = new DriverFactory().getDriver();
	}

	@After
	public void afterScenario() {
		new DriverFactory().destroyDriver();
	}

	@And("^(?:she|he|the user) provides the tool instance name as ([^\"]*)$")
	public void newToolInstanceName(String toolInstanceName) throws InterruptedException {
		new ToolInstanceEditPage(driver).newToolInstanceName(toolInstanceName);
	}
	
	@And("^(?:she|he|the user) creates the tool instance$")
	public void createToolInstance() {
//		new ToolInstanceEditPage(this.driver).createToolInstance();
		new ToolInstanceEditPage(driver).createToolInstance();
	}
	
//	@And("^(?:she|he|the user) try to create the tool instance but get an error message with text \"([^\"]*)\"$")
//	public void createToolInstanceWithError(String errorMessage) {
////		new ToolInstanceEditPage(this.driver).createToolInstance();
//		ToolInstanceEditPage toolInstanceEditPage = new ToolInstanceEditPage(driver);
//		toolInstanceEditPage.createToolInstance();
//		toolInstanceEditPage.errorMessageNewToolInstanceIs(errorMessage);
//	}

	@And("^(?:she|he|the user) returns to the Tool Instances Navigation Page$")
	public void exitToolInstance() {
//		new ToolInstanceEditPage(this.driver).cancelToolInstance();
		new ToolInstanceEditPage(driver).cancelToolInstance();
	}
}
