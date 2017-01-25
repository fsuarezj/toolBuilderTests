package org.lrc.liferay.toolbuilder.tests.functional.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ToolInstancesNavigationPage extends AbstractPage {
	
	private final static String TITLE = "Welcome - Mi Sitio";
//	private final String NAMESPACE = "_toolbuilder_WAR_toolbuilderportlet_";
	private final static String TOOL_INSTANCES_LIST = ":toolInstancesList";
	private final static String XPATH_NEW_TOOL_INSTANCE_BUTTON = "//*[substring-after(@id, '" + TOOL_INSTANCES_LIST + ":') = 'newToolInstanceButton']";
	private final static String XPATH_TOOL_INSTANCES_LIST = "//*[contains(@id, '" + TOOL_INSTANCES_LIST + ":')]";
	private final static String XPATH_TOOL_INSTANCES_LIST_TABLE = "//*[substring-after(@id, '" + TOOL_INSTANCES_LIST + ":') = 'toolInstancesListTable']";
	private final static String XPATH_TOOL_INSTANCES_EMPTY = "//*[substring-after(@id, '" + TOOL_INSTANCES_LIST + ":') = 'toolInstancesEmpty']";
	private final static String XPATH_TOOL_DEF_NAME = "//*[contains(@id, 'toolDefName')]";

	@FindBy(xpath = XPATH_NEW_TOOL_INSTANCE_BUTTON) private WebElement newToolInstanceButton;
	@FindBy(xpath = XPATH_TOOL_INSTANCES_LIST) private WebElement toolInstancesList;
	@FindBy(xpath = XPATH_TOOL_INSTANCES_LIST_TABLE) private WebElement toolInstancesListTable;
	@FindBy(xpath = XPATH_TOOL_INSTANCES_EMPTY) private WebElement toolInstancesEmpty;
	@FindBy(xpath = XPATH_TOOL_DEF_NAME) private WebElement toolDefName;

	public ToolInstancesNavigationPage(WebDriver driver) {
		super(driver);
	}
		
	public void newToolInstance() {
		this.newToolInstanceButton.click();
	}

	public boolean createInstanceButtonIsPresent() {
		return this.isElementPresent(By.xpath(XPATH_NEW_TOOL_INSTANCE_BUTTON));
	}

	public boolean existsToolInstance(String toolInstanceName) {
		try {
			List<WebElement> rows = toolInstancesListTable.findElements(By.xpath("//a[contains(@id, 'toolInstanceLink')]"));
			for (WebElement row : rows) {
				if (row.getText().equals(toolInstanceName)) {
					return true;
				}
			}
			return false;
		} catch (NoSuchElementException e) {
			return false;
		}
	}
	
//	public void createToolInstance(String toolInstanceName) {
//		this.newToolInstanceButton.click();
//		this.toolInstanceName.clear();
//		this.toolInstanceName.sendKeys(toolInstanceName);
//		this.createToolInstanceButton.click();
//		this.waitForVisibility(this.stepForwardButton);
//		this.cancelToolInstance();
//	}
//	
//	public void createToStep(String toolInstanceName, int step) {
//		this.newToolInstanceButton.click();
//		this.toolInstanceName.clear();
//		this.toolInstanceName.sendKeys(toolInstanceName);
//		this.createToolInstanceButton.click();
////		this.ajaxFactory = new AjaxElementLocatorFactory(driver, TIMEOUT);
////		PageFactory.initElements(this.ajaxFactory, this);
//		for (int i = 1; i < step; i++) {
//			this.stepForward();
//		}
////		this.waitForVisibility(this.cancelToolInstanceButton);
//		this.cancelToolInstance();
//	}
	
	public void selectToolInstance(String toolInstanceName) {
		List<WebElement> toolInstanceLinks = toolInstancesListTable.findElements(By.xpath("//a[contains(@id, 'toolInstanceLink')]"));
		for (WebElement toolInstanceLink : toolInstanceLinks) {
			if (toolInstanceLink.getText().equals(toolInstanceName)) {
				toolInstanceLink.click();
				WebDriverWait wait = new WebDriverWait(driver, 10);
				wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[substring-after(@id, ':toolInstanceForm:') = 'toolInstanceName']")));
				return;
			}
		}
	}
	
	public void selectFirstToolInstance() {
		List<WebElement> toolInstanceLinks = toolInstancesListTable.findElements(By.xpath("//a[contains(@id, 'toolInstanceLink')]"));
		for (WebElement toolInstanceLink : toolInstanceLinks) {
			toolInstanceLink.click();
			return;
		}
	}
	
	public boolean emptyToolInstancesList() throws Exception {
		this.waitForVisibility(this.toolInstancesList);
		if (driver.findElements(By.xpath(XPATH_TOOL_INSTANCES_EMPTY)).size() != 0) {
			System.out.println("No hay toolInstances");
			return true;
		} else if (driver.findElements(By.xpath(XPATH_TOOL_INSTANCES_LIST_TABLE)).size() != 0) {
			System.out.println("Hay toolInstances");
			return false;
		} else 
			throw new Exception("No mola");

	}
	
//	public void deleteAllToolInstances() {
//		
//		this.waitForVisibility(this.toolInstancesList);
//		if (driver.findElements(By.xpath(XPATH_TOOL_INSTANCES_EMPTY)).size() != 0) {
//			System.out.println("No hay toolInstances");
//			return;
//		}
//		System.out.println(this.toolInstancesList.getText());
//		List<WebElement> toolInstanceLinks = toolInstancesListTable.findElements(By.xpath("//a[contains(@id, 'toolInstanceLink')]"));
//		for (WebElement toolInstanceLink : toolInstanceLinks) {
//			toolInstanceLink.click();
//			this.deleteToolInstance();
//			this.deleteAllToolInstances();
//			return;
//		}
//	}

	public boolean validateTitle() {
		return driver.getTitle().equals(TITLE);
	}

	public int getStepOf(String toolInstanceName) {
		List<WebElement> toolInstanceLinks = toolInstancesListTable.findElements(By.xpath("//a[contains(@id, 'toolInstanceLink')]"));
		List<WebElement> toolInstanceSteps = toolInstancesListTable.findElements(By.xpath("//span[contains(@id, 'toolInstanceStep')]"));
		for ( int i = 0; i < toolInstanceLinks.size(); i++) {
			System.out.println("Row is " + toolInstanceLinks.get(i).getText());
			System.out.println("Step is " + toolInstanceSteps.get(i).getText());
			if (toolInstanceLinks.get(i).getText().equals(toolInstanceName)) {
				System.out.println("Which is on step " + toolInstanceSteps.get(i).getText());
				return Integer.valueOf(toolInstanceSteps.get(i).getText());
			}
		}
		return -1;
	}

	public Object getToolDefName() {
		System.out.println("toolDefName es " + this.toolDefName.getText());
		return this.toolDefName.getText();
	}
}
