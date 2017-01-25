package org.lrc.liferay.toolbuilder.tests.functional.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ToolInstanceCommonPage extends AbstractPage {
	
	private final static String TITLE = "Welcome - Mi Sitio";

	private final static String TOOL_INSTANCE_FORM = ":toolInstanceForm:";
	private final static String XPATH_TOOL_INSTANCE_NAME = "//span[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'toolInstanceName']";
	private final static String XPATH_CANCEL_TOOL_INSTANCE_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'cancelToolInstanceButton']";
	private final static String XPATH_DELETE_TOOL_INSTANCE_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'deleteToolInstanceButton']";
	private final static String XPATH_STEP_FORWARD_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'stepForwardButton']";

	@FindBy(xpath = XPATH_TOOL_INSTANCE_NAME) private WebElement toolInstanceName;
	@FindBy(xpath = XPATH_CANCEL_TOOL_INSTANCE_BUTTON) private WebElement cancelToolInstanceButton;
	@FindBy(xpath = XPATH_DELETE_TOOL_INSTANCE_BUTTON) private WebElement deleteToolInstanceButton;
	@FindBy(xpath = XPATH_STEP_FORWARD_BUTTON) private WebElement stepForwardButton;

	public ToolInstanceCommonPage(WebDriver driver) {
		super(driver);
	}
	
	public void exitToolInstance() {
		this.cancelToolInstanceButton.click();
	}
		
	public void stepForward() {
		this.stepForwardButton.click();
	}

	public boolean stepForwardButtonIsPresent() {
		return this.isElementPresent(By.xpath(XPATH_STEP_FORWARD_BUTTON));
	}

	public void deleteToolInstance() {
		this.deleteToolInstanceButton.click();
	}

	public boolean deleteInstanceButtonIsPresent() {
		return this.isElementPresent(By.xpath(XPATH_DELETE_TOOL_INSTANCE_BUTTON));
	}

	public boolean validateTitle() {
		return driver.getTitle().equals(TITLE);
	}

	public void waitSeconds(int seconds) throws InterruptedException {
		Thread.sleep(seconds*1000);
//		new WebDriverWait(this.driver, seconds);
	}

	public boolean isPageNotFound() {
		return this.isElementPresent(By.xpath("//h3[contains(@class, 'alert-error') and contains(text(), 'Not Found')]"));
	}

	public boolean loginPortletExists() {
		return this.isElementPresent(By.xpath("//span[contains(@class, 'portlet-title-text') and contains(text(), 'Sign In')]"));
	}
	
}
