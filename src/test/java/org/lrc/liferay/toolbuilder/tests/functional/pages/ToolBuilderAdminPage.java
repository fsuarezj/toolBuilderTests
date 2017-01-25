package org.lrc.liferay.toolbuilder.tests.functional.pages;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.Point;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.lrc.liferay.toolbuilder.tests.functional.pages.AbstractAdminPage;

import edu.emory.mathcs.backport.java.util.Collections;

public class ToolBuilderAdminPage extends AbstractAdminPage {
	
	static List<String> stepsOrder = new ArrayList<String>();
	
	private final static String TOOL_DEFS_LIST = ":toolDefsList";
	private final static String NEW_TOOL_DEF_NAME_FORM = ":newToolDefNameForm";
	private final static String XPATH_ADMIN_SITE_BTN = "//*[contains(@id, 'adminLinks')]";
	private final static String XPATH_ADMIN_CONTENT_BTN = "//*[contains(@id, 'site_administration.content')]";
	private final static String XPATH_TOOL_DEFS_LIST = "//*[contains(@id, '" + TOOL_DEFS_LIST + ":')]";
	private final static String XPATH_TOOL_DEFS_LIST_TABLE = "//*[substring-after(@id, '" + TOOL_DEFS_LIST + ":') = 'toolDefsListTable']";
	private final static String XPATH_NEW_TOOL_DEF_BUTTON = "//*[contains(@id, 'newToolDefButton')]";
	private final static String XPATH_NEW_TOOL_DEF_NAME_INPUT = "//*[substring-after(@id, '" + NEW_TOOL_DEF_NAME_FORM + ":') = 'newToolDefName']";
	private final static String XPATH_CREATE_TOOL_DEF_BUTTON = "//*[substring-after(@id, '" + NEW_TOOL_DEF_NAME_FORM + ":') = 'createButton']";
	private final static String XPATH_DASHBOARD_COLUMN = "//*[contains(@class, 'ui-dashboard-column')]";
	private final static String XPATH_SAVE_STEPS_ORDER = "//button[contains(@id, 'orderSteps')]";
	private final static String XPATH_CONFIRM_DELETE = "//button[contains(@id, 'confirmDelete')]";

	@FindBy(xpath = XPATH_ADMIN_SITE_BTN) private WebElement adminSiteButton;
	@FindBy(xpath = XPATH_ADMIN_CONTENT_BTN) private WebElement adminContentButton;
	@FindBy(xpath = XPATH_TOOL_DEFS_LIST) private WebElement toolDefsList;
	@FindBy(xpath = XPATH_TOOL_DEFS_LIST_TABLE) private WebElement toolDefsListTable;
	@FindBy(xpath = XPATH_NEW_TOOL_DEF_BUTTON) private WebElement newToolDefButton;
	@FindBy(xpath = XPATH_NEW_TOOL_DEF_NAME_INPUT) private WebElement newToolDefNameInput;
	@FindBy(xpath = XPATH_CREATE_TOOL_DEF_BUTTON) private WebElement createToolDefButton;
	@FindBy(xpath = XPATH_DASHBOARD_COLUMN) private WebElement dashboard;
	@FindBy(xpath = XPATH_SAVE_STEPS_ORDER) private WebElement orderStepsButton;
	@FindBy(xpath = XPATH_CONFIRM_DELETE) private WebElement confirmDeleteButton;

	public ToolBuilderAdminPage(WebDriver driver) {
		super(driver);
	}
	
//	private boolean visibilityOfAnyElement(By by) {
//		WebDriverWait wait = new WebDriverWait(driver, 10);
//		List<WebElement> elements = driver.findElements(by);
//		Predicate condition = ExpectedConditions.numberOfElementsToBe(by, elements.size()+1);
//		for (WebElement element: elements) {
//			
//		}
//		ExpectedConditions.visibilityOf(element)
//		WebElement captionTooltip = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class, 'caption-tooltip')]")));

	public void clickAdminContent() {
		this.adminSiteButton.click();
		this.adminContentButton.click();
		return;
	}

	public boolean existsToolDef(String toolDefName) {
		try {
			List<WebElement> rows = toolDefsListTable.findElements(By.xpath("//span[contains(@id, 'toolDefName')]"));
			for (WebElement row : rows) {
				if (row.getText().equals(toolDefName)) {
					return true;
				}
			}
			return false;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	public void selectToolDef(String toolDefName) {
		List<WebElement> rows = toolDefsListTable.findElements(By.xpath("//tr[contains(@class, 'toolDefRow')]"));
		for (WebElement row : rows) {
			WebElement toolDefNameWE = row.findElement(By.xpath("td//span[contains(@id, 'toolDefName')]"));
			if (toolDefNameWE.getText().equals(toolDefName)) {
				WebElement selectToolDefButton = row.findElement(By.xpath("td//button[contains(@id, 'selectToolDefButton')]"));
				selectToolDefButton.click();
				WebDriverWait wait = new WebDriverWait(driver, 10);
				wait.until(ExpectedConditions.stalenessOf(row));
				return;
			}
		}
	}

	public boolean selectedToolDef(String toolDefName) {
		System.out.println("selectedToolDef Cogiendo el elemento lista de filas");
		List<WebElement> rows = toolDefsListTable.findElements(By.xpath("//tr[contains(@class, 'toolDefRow')]"));
		WebElement toolDefNameWE;
		System.out.println("selectedToolDef Va a buscar " + toolDefName);
		for (WebElement row : rows) {
			System.out.println("selectedToolDef Entra en bucle para " + row.getText());
			toolDefNameWE = row.findElement(By.xpath("td//span[contains(@id, 'toolDefName')]"));
			System.out.println("selectedToolDef Buscándolo en " + toolDefNameWE.getText());
			if (toolDefNameWE.getText().equals(toolDefName)) {
				System.out.println("selectedToolDef Encontrado");
				try {
					row.findElement(By.xpath("td//span[contains(@id, 'selectedToolDefCaption')]"));
					return true;
				} catch (NoSuchElementException e) {
					return false;
				}
			}
			toolDefNameWE = null;
		}
		throw new NoSuchElementException(toolDefName);
	}

	public void newToolDef() {
		this.newToolDefButton.click();
	}

	public void fillNewToolDefName(String toolDefName) {
		this.clearAndSetText(newToolDefNameInput, toolDefName);
		this.createToolDefButton.click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.or(
				ExpectedConditions.presenceOfElementLocated(By.xpath("//h3[contains(@id, 'toolDefName')]")),
				ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(@class, 'ui-message-error-detail')]"))
			)
		);
//		this.driver.findElement(By.xpath(XPATH_TOOL_DEF_NAME + "[contains(text(),'" + toolDefName + "')]"));
	}

	public void editToolDef(String toolDefName) {
		List<WebElement> rows = toolDefsListTable.findElements(By.xpath("//tr[contains(@class, 'toolDefRow')]"));
		for (WebElement row : rows) {
			WebElement toolDefNameWE = row.findElement(By.xpath("td//span[contains(@id, 'toolDefName')]"));
			if (toolDefNameWE.getText().equals(toolDefName)) {
				WebElement editToolDefButton = row.findElement(By.xpath("td//button[contains(@id, 'editToolDefButton')]"));
				editToolDefButton.click();
				return;
			}
		}
	}

	public void deleteToolDef(String toolDefName) {
		List<WebElement> rows = toolDefsListTable.findElements(By.xpath("//tr[contains(@class, 'toolDefRow')]"));
		for (WebElement row : rows) {
			WebElement toolDefNameWE = row.findElement(By.xpath("td//span[contains(@id, 'toolDefName')]"));
			if (toolDefNameWE.getText().equals(toolDefName)) {
				WebElement deleteToolDefButton = row.findElement(By.xpath("td//button[contains(@id, 'deleteToolDefButton')]"));
				deleteToolDefButton.click();
				return;
			}
		}
	}
	
	public void confirmDeletion() {
		this.confirmDeleteButton.click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(ToolBuilderAdminPage.XPATH_CONFIRM_DELETE)));
	}

	public void confirmStepDeletion() {
		List<WebElement> confirmButtons = driver.findElements(By.xpath("//button[contains(@id, 'confirmDelete')]"));
		for (WebElement confirmButton : confirmButtons) {
			if (confirmButton.isDisplayed()) {
				confirmButton.click();
				System.out.println("Confirmando borrado clickando " + confirmButton.getAttribute("id"));
				WebDriverWait wait = new WebDriverWait(driver, 10);
				wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id(confirmButton.getAttribute("id"))));
			}
		}
	}

	public boolean isEnabledConfigureToolDef(String toolDefName) {
		List<WebElement> rows = toolDefsListTable.findElements(By.xpath("//tr[contains(@class, 'toolDefRow')]"));
		WebElement toolDefNameWE;
		for (WebElement row : rows) {
			toolDefNameWE = row.findElement(By.xpath("td//span[contains(@id, 'toolDefName')]"));
			if (toolDefNameWE.getText().equals(toolDefName)) {
				WebElement editToolDefButton = row.findElement(By.xpath("td//button[contains(@id, 'editToolDefButton')]"));
				return editToolDefButton.isEnabled();
			}
			toolDefNameWE = null;
		}
		throw new ElementNotVisibleException(toolDefName);
	}

	public boolean isEnabledDeleteToolDef(String toolDefName) {
		List<WebElement> rows = toolDefsListTable.findElements(By.xpath("//tr[contains(@class, 'toolDefRow')]"));
		WebElement toolDefNameWE;
		for (WebElement row : rows) {
			toolDefNameWE = row.findElement(By.xpath("td//span[contains(@id, 'toolDefName')]"));
			if (toolDefNameWE.getText().equals(toolDefName)) {
				WebElement deleteToolDefButton = row.findElement(By.xpath("td//button[contains(@id, 'deleteToolDefButton')]"));
				return deleteToolDefButton.isEnabled();
			}
			toolDefNameWE = null;
		}
		throw new ElementNotVisibleException(toolDefName);
	}

	public boolean toolTipOnButtons(String message, String toolDefName) {
		List<WebElement> rows = toolDefsListTable.findElements(By.xpath("//tr[contains(@class, 'toolDefRow')]"));
		WebElement toolDefNameWE;
		for (WebElement row : rows) {
			toolDefNameWE = row.findElement(By.xpath("td//span[contains(@id, 'toolDefName')]"));
			if (toolDefNameWE.getText().equals(toolDefName)) {
				WebElement buttonsPanel = row.findElement(By.xpath("td//div[contains(@id, 'buttonsPanel')]"));
				new Actions(this.driver).moveToElement(buttonsPanel).perform(); // Mouse over buttons
				// Prepare id to search the tooltip
				String id = toolDefNameWE.getAttribute("id");
				id = id.substring(0, id.lastIndexOf(":"));
				WebDriverWait wait = new WebDriverWait(driver, 10);
				try {
					WebElement captionTooltip = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class, 'caption-tooltip') and contains(@id, '" + id + "')]")));
					if (captionTooltip.getText().equals(message)) {
						return true;
					} else {
						return false;
					}
				} catch (TimeoutException e) {
					// When the tooltip does not appear
					return false;
				}
			}
			toolDefNameWE = null;
		}
		throw new NoSuchElementException(toolDefName);
	}

	public void moveStep(int before, int after) throws AWTException, InterruptedException {
		System.out.println("BUSCANDO div[contains(@id, 'Panel_" + (before - 1) + "_header')]");
		WebElement from = this.dashboard.findElement(By.xpath("div/div[contains(@id, 'Panel_" + (before - 1) + "_header')]"));
//		WebElement closeButton = from.findElement(By.xpath("a/span[contains(@class, 'ui-icon-close')]"));
		WebElement to = this.dashboard.findElement(By.xpath("div/div[contains(@id, 'Panel_" + (after - 1) + "_content')]"));
		Point toPoint = to.getLocation();
		Dimension toDim = to.getSize();

		Robot robot = new Robot();
		robot.setAutoDelay(50);
		robot.keyPress(KeyEvent.VK_F11);
		robot.keyRelease(KeyEvent.VK_F11);
		Thread.sleep(500);
		
		int fromXCentre = from.getSize().getWidth() / 2 + from.getLocation().getX();
		int fromYCentre = from.getSize().getHeight() / 2 + from.getLocation().getY();
		robot.mouseMove(fromXCentre, fromYCentre);
//		robot.delay(100);
		robot.mousePress(InputEvent.BUTTON1_MASK);
//		robot.delay(100);
		if (after - before > 0) {
			int yPoint = toPoint.getY() + toDim.getHeight();
			for(int y = fromYCentre; y <= yPoint; y+=10) {
				robot.mouseMove(fromXCentre, y);
//				robot.delay(100);
			}
		} else {
			int yPoint = toPoint.getY() - toDim.getHeight() / 2;
			for(int y = fromYCentre; y > yPoint; y-=10) {
				robot.mouseMove(fromXCentre, y);
//				robot.delay(100);
			}
		}
		robot.mouseRelease(InputEvent.BUTTON1_MASK);
//		robot.delay(2000);
		robot.keyPress(KeyEvent.VK_F11);
		robot.keyRelease(KeyEvent.VK_F11);

	}

	public boolean stepInPosition(int step, int position) {
		// Get all the headers
		List<WebElement> panels = new ArrayList<WebElement>();
		int i = 0;
		for(; this.isElementPresentIn(By.xpath("div/div[contains(@id, 'Panel_" + i + "_header')]"), this.dashboard); i++) {
			panels.add(this.dashboard.findElement(By.xpath("div/div[contains(@id, 'Panel_" + i + "_header')]")));
		}
		WebElement element = panels.get(step - 1);

		// Order the headers
		final Comparator<WebElement> SCREEN_VERTICAL_ORDER =
				new Comparator<WebElement>() {
			public int compare(WebElement we1, WebElement we2) {
				return Integer.compare(we1.getLocation().getY(), we2.getLocation().getY());
			}
		};
		Collections.sort(panels, SCREEN_VERTICAL_ORDER);
		
		return (panels.indexOf(element) == position - 1);
	}

	public void saveStepsOrder() throws InterruptedException {
		this.orderStepsButton.click();
		Thread.sleep(2000);
	}

	public void storeStepPositions() {
		// Get all the headers
		ToolBuilderAdminPage.stepsOrder.clear();
		for(int i = 0; this.isElementPresentIn(By.xpath("div/div/span[contains(@id, 'Panel_" + i + "_stepName')]"), this.dashboard); i++) {
			ToolBuilderAdminPage.stepsOrder.add(this.dashboard.findElement(By.xpath("div/div/span[contains(@id, 'Panel_" + i + "_stepName')]")).getText());
		}
	}

	/**
	 * Only can be used after storeStepPositions and saveStepsOrder
	 * @param step
	 * @param position
	 * @return
	 */
	public boolean formerStepInPosition(int step, int position) {
		// Get all the stepNames;
		List<String> stepNames = new ArrayList<String>();
		int i = 0;
		for(; this.isElementPresentIn(By.xpath("div/div/span[contains(@id, 'Panel_" + i + "_stepName')]"), this.dashboard); i++) {
			stepNames.add(this.dashboard.findElement(By.xpath("div/div/span[contains(@id, 'Panel_" + i + "_stepName')]")).getText());
		}

		return ToolBuilderAdminPage.stepsOrder.get(step - 1).equals(stepNames.get(position - 1));
	}
	
	public void deleteStepDef(int step) {
		this.dashboard.findElement(By.xpath("div/div[contains(@id, 'Panel_" + (step - 1) + "_header')]/a/span[contains(@class, 'ui-icon-close')]")).click();
	}

	public int numOfStepDefs() {
		int i = 0;
		for(; this.isElementPresentIn(By.xpath("div/div/span[contains(@id, 'Panel_" + i + "_stepName')]"), this.dashboard); i++);
		return i;
	}
}
