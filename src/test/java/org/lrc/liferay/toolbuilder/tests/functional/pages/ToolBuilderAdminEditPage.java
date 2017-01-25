package org.lrc.liferay.toolbuilder.tests.functional.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ToolBuilderAdminEditPage extends AbstractAdminPage {
	
	private final static String COMPOSITE_STEPS_FORM = ":compositeStepsForm";
//	private final static String XPATH_NEW_TOOL_DEF_BUTTON = "//*[contains(@id, 'newToolDefButton')]";
	private final static String XPATH_NEW_STEP_BUTTON = "//button[substring-after(@id, '" + COMPOSITE_STEPS_FORM + ":') = 'newStepButton']";
	private final static String XPATH_SELECT_STEPS_FORM_DLG = "//form[contains(@id, 'selectStepFormDlg')]";
//	private final static String XPATH_NEW_STEP_BUTTON_DLG_MODAL = "//div[substring-after(@id, '" + COMPOSITE_STEPS_FORM + ":') = 'newStepButton_dlg_modal']";

	@FindBy(xpath = XPATH_NEW_STEP_BUTTON) private WebElement newStepButton;
	@FindBy(xpath = XPATH_SELECT_STEPS_FORM_DLG) private WebElement selectStepsFormDlg;
	@FindBy(tagName = "iframe") private WebElement iframe;

	public ToolBuilderAdminEditPage(WebDriver driver) {
		super(driver);
	}

	public void createNewStep() {
		this.newStepButton.click();
	}
	
	public void closeSelectStepDialog() {
//		this.newStepButtonDlg.findElement(By.xpath("/a[contains(@class, 'ui-dialog-titlebar-close')]")).click();
	}
	
	public void selectStep(String stepType) {
//		WebElement iframe = driver.findElement(By.xpath("//iframe[contains(@src,'Dialog.xhtml')]"));
		int oldNumberSteps = driver.findElements(By.xpath("//div[contains(@id, 'Panel_') and contains(@id, '_header')]")).size();
		driver.switchTo().frame(iframe);
		List<WebElement> rows = selectStepsFormDlg.findElements(By.xpath("//tr[contains(@class, 'stepTypeRow')]"));
		for (WebElement row : rows) {
			WebElement stepTypeWE = row.findElement(By.xpath("td//span[contains(@id, 'stepType')]"));
			if (stepTypeWE.getText().equals(stepType)) {
				WebElement selectToolDefButton = row.findElement(By.xpath("td//button[contains(@id, 'selectStepButton')]"));
				selectToolDefButton.click();
			}
		}
		driver.switchTo().defaultContent();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//div[contains(@id, 'Panel_') and contains(@id, '_header')]"), oldNumberSteps));
//		wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//div[contains(@class, 'ui-dashboard-column')]/div[contains(@id, 'Panel')]"), oldNumberSteps));
//		Wait wait = new FluentWait(driver)
//				.withTimeout(10, SECONDS)
//				.pollingEvery(100, MILLISECONDS);

//		WebDriverWait wait = new WebDriverWait(driver, 10);
//		wait.until(ExpectedConditions.not(ExpectedConditions.presenceOfElementLocated(By.xpath(XPATH_NEW_STEP_BUTTON_DLG_MODAL))));
		
//		this.driver.findElement(By.xpath(XPATH_TOOL_DEF_NAME));
	}
}
