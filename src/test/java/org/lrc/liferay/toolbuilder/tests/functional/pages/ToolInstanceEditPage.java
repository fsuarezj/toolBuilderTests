package org.lrc.liferay.toolbuilder.tests.functional.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ToolInstanceEditPage extends AbstractPage {
	
	private final static String TITLE = "Welcome - Mi Sitio";
//	private final String NAMESPACE = "_toolimplementation_WAR_toolBuilderportlet_";
	private final static String TOOL_INSTANCE_FORM = ":toolInstanceForm:";
	private final static String XPATH_TOOL_INSTANCE_NAME = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'toolInstanceName']";
	private final static String XPATH_CREATE_TOOL_INSTANCE_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'createToolInstanceButton']";
	private final static String XPATH_CANCEL_TOOL_INSTANCE_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCE_FORM +  "') = 'cancelToolInstanceButton']";

	@FindBy(xpath = XPATH_TOOL_INSTANCE_NAME) private WebElement toolInstanceName;
	@FindBy(xpath = XPATH_CREATE_TOOL_INSTANCE_BUTTON) private WebElement createToolInstanceButton;
	@FindBy(xpath = XPATH_CANCEL_TOOL_INSTANCE_BUTTON) private WebElement cancelToolInstanceButton;

	public ToolInstanceEditPage(WebDriver driver) {
		super(driver);
	}
	
//	private void waitForRefreshed(WebElement element) {
//		new WebDriverWait(driver, TIMEOUT).until(ExpectedConditions.refreshed(ExpectedConditions.));
//	}
	
	public void newToolInstanceName(String toolInstanceName) {
//		this.toolInstanceName.clear();
		this.clearAndSetText(this.toolInstanceName, toolInstanceName);
	}
	
	public void clearToolInstanceName() {
		this.toolInstanceName.clear();
	}
	
	public void createToolInstance() {
		this.createToolInstanceButton.click();
//		this.ajaxFactory = new AjaxElementLocatorFactory(driver, TIMEOUT);
//		PageFactory.initElements(this.ajaxFactory, this);
	}
	
	public void cancelToolInstance() {
		this.cancelToolInstanceButton.click();
//		this.ajaxFactory = new AjaxElementLocatorFactory(driver, TIMEOUT);
//		PageFactory.initElements(this.ajaxFactory, this);
	}

	public boolean validateTitle() {
		return driver.getTitle().equals(TITLE);
	}
}
