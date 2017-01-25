package org.lrc.liferay.toolbuilder.tests.functional.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class AbstractAdminPage extends AbstractPage {

	private final static String XPATH_TOOL_DEFINITION_CONTENT_SECTION = "//div[contains(@id, 'panel-manage-site_administration.contentContent')]//a[contains(@id, 'portlet_tooldefinition_WAR_toolBuilderportlet')]";
	protected final static String XPATH_TOOL_DEF_NAME = "id('toolDefName')";

	@FindBy(xpath = XPATH_TOOL_DEFINITION_CONTENT_SECTION) private WebElement toolDefinitionContentSection;

	public AbstractAdminPage(WebDriver driver) {
		super(driver);
	}
	
	public void returnAdminPage() {
		this.toolDefinitionContentSection.click();
	}
	
	public void waitUntilNotDlgModal() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.not(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[contains(@id, '_dlg_modal')]"))));
//		id('_tooldefinition_WAR_toolBuilderportlet_:compositeStepsForm:newStepButton_dlg_modal')
	}
}
