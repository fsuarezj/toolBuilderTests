package org.lrc.liferay.toolbuilder.tests.functional.steps;

import java.awt.AWTException;

import org.junit.Assert;
import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolBuilderAdminPage;
import org.lrc.liferay.toolbuilder.tests.functional.pages.ToolInstanceCommonPage;
import org.lrc.liferay.toolbuilder.tests.functional.utils.DBChecker;
import org.lrc.liferay.toolbuilder.tests.functional.utils.DriverFactory;
import org.lrc.liferay.toolbuilder.tests.functional.steps.AbstractStepClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ToolBuilderAdminSteps extends AbstractStepClass {
	
	@Before
	public void beforeScenario() {
		this.driver = new DriverFactory().getDriver();
	}

	@After
	public void afterScenario() {
		new DriverFactory().destroyDriver();
	}

	@Given("^the admin user (?:is on|goes to) the Tool Builder admin page$")
	public void adminGoesToAdminPage() {
		this.driver.navigate().to(homeURL);
		new ToolInstanceCommonPage(driver).clickLogIn();
		new ToolInstanceCommonPage(driver).fillLogin("test@liferay.com", "test");
		new ToolBuilderAdminPage(driver).clickAdminContent();
	}

	@Given("^(?:the user|he|she) (?:is on|goes to) the Tool Builder admin page$")
	public void userGoesToAdminPage() {
		this.driver.navigate().to(homeURL);
		new ToolBuilderAdminPage(driver).clickAdminContent();
	}

	@Then("^a tool definition called \"([^\"]*)\" exists$")
	public void existingToolDef(String toolDefName) {
//		boolean exists = new ToolInstancesNavigationPage(this.driver).existsToolInstance(toolInstanceName);
		boolean exists = new ToolBuilderAdminPage(driver).existsToolDef(toolDefName);
		Assert.assertTrue(exists);
	}

	@Then("^a tool definition called \"([^\"]*)\" does not exist$")
	public void notExistingToolDef(String toolDefName) {
//		boolean exists = new ToolInstancesNavigationPage(this.driver).existsToolInstance(toolInstanceName);
		boolean exists = new ToolBuilderAdminPage(driver).existsToolDef(toolDefName);
		Assert.assertFalse(exists);
	}
	 
	@When("^(?:the user|she|he) selects \"([^\"]*)\" as default tool definition$")
	public void selectToolDef(String toolDefName) {
		new ToolBuilderAdminPage(driver).selectToolDef(toolDefName);
	}

	@Then("^the name of the selected tool definition is \"([^\"]*)\"$")
	public void selectedToolDef(String toolDefName) {
		boolean selected = new ToolBuilderAdminPage(driver).selectedToolDef(toolDefName);
		Assert.assertTrue(selected);
	}

	@Then("^the name of the selected tool definition is not \"([^\"]*)\"$")
	public void notSelectedToolDef(String toolDefName) {
		boolean selected = new ToolBuilderAdminPage(driver).selectedToolDef(toolDefName);
		Assert.assertFalse(selected);
	}

	@When("^(?:the user|he|she) chooses to create a new tool definition$")
	public void newToolDef() {
		new ToolBuilderAdminPage(driver).newToolDef();
	}

	@When("^(?:the user|he|she) provides the tool definition name as \"([^\"]*)\"$")
	public void setNewToolDefName(String toolDefName) {
		new ToolBuilderAdminPage(driver).fillNewToolDefName(toolDefName);
	}
	
	@When("^(?:the user|she|he) returns to the Tool Definition admin page$")
	public void returnAdminPage() {
//		if(new ToolBuilderAdminPage(driver).administrationContentCollapsed()) {
//			new ToolBuilderAdminPage(driver).administrationContentExpand();
//		}
		new ToolBuilderAdminPage(driver).returnAdminPage();
	}
	
	@Then("^(?:the user|she|he) chooses to edit the tool definition called \"([^\"]*)\"$")
	public void editToolDef(String toolDefName) {
		new ToolBuilderAdminPage(driver).editToolDef(toolDefName);
	}

	@When("^(?:the user|she|he) selects to delete the tool definition called \"([^\"]*)\"$")
	public void deleteToolDef(String toolDefName) {
		new ToolBuilderAdminPage(driver).deleteToolDef(toolDefName);
	}

	@When("^(?:the user|she|he) confirms the deletion$")
	public void confirmDeletion() {
		new ToolBuilderAdminPage(driver).confirmDeletion();
	}

	@When("^(?:the user|she|he) confirms the deletion of the tool definition called \"([^\"]*)\"$")
	public void confirmToolDefDeletion(String toolDefName) {
		new ToolBuilderAdminPage(driver).confirmDeletion();
		Assert.assertTrue(new DBChecker(passwd).deletedToolDef(toolDefName));
	}

	@When("^(?:the user|she|he) confirms the step deletion")
	public void confirmStepDeletion() {
		new ToolBuilderAdminPage(driver).confirmStepDeletion();
	}

	@When("^(?:the user|she|he) confirms the step (\\d+) deletion of toolDef \"([^\"]*)\"")
	public void confirmStepDeletionDBCheck(int index, String toolDefName) {
		new DBChecker(passwd).createForTest(toolDefName, index);
		new ToolBuilderAdminPage(driver).confirmStepDeletion();
		Assert.assertTrue(new DBChecker(passwd).deletedStep(index, toolDefName));
	}

	@Then("^the button to delete the tool definition called \"([^\"]*)\" is enabled$")
	public void enabledDeleteToolDef(String toolDefName) {
		Assert.assertTrue(new ToolBuilderAdminPage(driver).isEnabledDeleteToolDef(toolDefName));
	}

	@Then("^the button to delete the tool definition called \"([^\"]*)\" is disabled$")
	public void disabledDeleteToolDef(String toolDefName) {
		Assert.assertFalse(new ToolBuilderAdminPage(driver).isEnabledDeleteToolDef(toolDefName));
	}

	@Then("^the button to configure the tool definition called \"([^\"]*)\" is enabled$")
	public void enabledConfigureToolDef(String toolDefName) {
		Assert.assertTrue(new ToolBuilderAdminPage(driver).isEnabledConfigureToolDef(toolDefName));
	}

	@Then("^the button to configure the tool definition called \"([^\"]*)\" is disabled$")
	public void disabledConfigureToolDef(String toolDefName) {
		Assert.assertFalse(new ToolBuilderAdminPage(driver).isEnabledConfigureToolDef(toolDefName));
	}
	
	@Then("^a tooltip message with text \"([^\"]*)\" is shown for the buttons on tool definition \"([^\"]*)\"$")
	public void toolTipOnButtonsToolDef(String message, String toolDefName) {
		Assert.assertTrue(new ToolBuilderAdminPage(driver).toolTipOnButtons(message, toolDefName));
	}

	@When("^(?:the user|she|he) moves the step (\\d+) to step (\\d+)$")
	public void moveStep(int before, int after) throws AWTException, InterruptedException {
		new ToolBuilderAdminPage(driver).moveStep(before, after);
	}

	@When("^the steps positions are defined to compare$")
	public void storeStepPositions() {
		new ToolBuilderAdminPage(driver).storeStepPositions();
	}

	@Then("^the step (\\d+) is in the position (\\d+)$")
	public void stepInPosition(int step, int position) {
		Assert.assertTrue(new ToolBuilderAdminPage(driver).stepInPosition(step, position));
	}

	@Then("^the step (\\d+) is not in the position (\\d+)$")
	public void stepNotInPosition(int step, int position) {
		Assert.assertFalse(new ToolBuilderAdminPage(driver).stepInPosition(step, position));
	}

	@When("^(?:the user|she|he) saves the steps order")
	public void saveStepsOrder() throws InterruptedException {
		new ToolBuilderAdminPage(driver).saveStepsOrder();
	}
	
	@When("^(?:the user|she|he) clicks to delete the step (\\d+)$")
	public void deleteStepDef(int step) {
		new ToolBuilderAdminPage(driver).deleteStepDef(step);
	}

	@Then("^step (\\d+) of \"([^\"]*)\" has been deleted from the database$")
	public void checkNoExistingStep(int stepIndex, String toolDefName) {
		Assert.assertTrue(new DBChecker(passwd).deletedStep(stepIndex, toolDefName));
	}

	@Then("^the former step (\\d+) is in the position (\\d+)$")
	public void formerStepInPosition(int step, int position) {
		Assert.assertTrue(new ToolBuilderAdminPage(driver).formerStepInPosition(step, position));
	}

	@Then("^the current tool definition has (\\d+) step definitions$")
	public void stepDefsNumber(int num) {
		Assert.assertTrue(new ToolBuilderAdminPage(driver).numOfStepDefs() == num);
	}
}
