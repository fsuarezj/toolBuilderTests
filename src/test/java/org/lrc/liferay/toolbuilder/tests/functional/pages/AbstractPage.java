package org.lrc.liferay.toolbuilder.tests.functional.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class AbstractPage {

//	private final static String XPATH_ALERT_MESSAGE = "//*[contains(@id, 'errorMssage')]";
	private final static String XPATH_LOGIN_FORM = "//form[contains(@id, '_58_fm')]";
	private final static String XPATH_LOGIN_INPUT = XPATH_LOGIN_FORM + "//*[contains(@id, '_58_login')]";
	private final static String XPATH_PASSWD_INPUT = XPATH_LOGIN_FORM + "//*[contains(@id, '_58_password')]";
	private final static String XPATH_LOGIN_BUTTON = XPATH_LOGIN_FORM + "//*[contains(@class, 'btn')]";
	private final static String XPATH_AVATAR_BUTTON = "//li[contains(@class, 'user-avatar')]";
	private final static String XPATH_LOGOUT_BUTTON = "//li[contains(@class, 'sign-out')]";
	private final static String XPATH_ERROR_MESSAGE = "//div[contains(@class, 'ui-message-error')]";
	private final static String XPATH_ERROR_MESSAGE_NEW_INSTANCE = "//div/ul[contains(@id, 'errorMessage')]";

//	@FindBy(xpath = XPATH_ALERT_MESSAGE) protected WebElement errorMessage;
	@FindBy(how = How.CLASS_NAME, using = "sign-in") private WebElement loginBegin;
	@FindBy(xpath = XPATH_ERROR_MESSAGE) private WebElement errorMessage;
	@FindBy(xpath = XPATH_ERROR_MESSAGE_NEW_INSTANCE) private WebElement errorMessageNewInstance;
	@FindBy(xpath = XPATH_LOGIN_INPUT) protected WebElement loginInput;
	@FindBy(xpath = XPATH_PASSWD_INPUT) protected WebElement passwdInput;
	@FindBy(xpath = XPATH_LOGIN_BUTTON) protected WebElement loginButton;
	@FindBy(xpath = XPATH_AVATAR_BUTTON) protected WebElement avatarButton;
	@FindBy(xpath = XPATH_LOGOUT_BUTTON) protected WebElement logoutButton;

	private final static int TIMEOUT = 30;
	protected WebDriver driver;

	public AbstractPage(WebDriver driver) {
		this.driver = driver;
		AjaxElementLocatorFactory ajaxFactory = new AjaxElementLocatorFactory(driver, TIMEOUT);
		PageFactory.initElements(ajaxFactory, this);
	}
	
	protected void waitForVisibility(WebElement element) {
		new WebDriverWait(driver, TIMEOUT).until(ExpectedConditions.visibilityOf(element));
	}

//	protected void TakeScreenShot(RuntimeException e, String fileName) {
//		File screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
//		try {
//			FileUtils.copyFile(screenShot, new File(fileName + ".png"));
//		} catch (IOException ioe) {
//			throw new RuntimeException(ioe.getMessage(), ioe);
//		}
//		throw e;
//	}
//	
	protected void clearAndSetText(WebElement element, String text) {
		Actions navigator = new Actions(driver);
		navigator.click(element);
		navigator.sendKeys(Keys.END);
		navigator.keyDown(Keys.SHIFT);
		navigator.sendKeys(Keys.HOME);
		navigator.keyUp(Keys.SHIFT);
		navigator.sendKeys(Keys.BACK_SPACE);
		navigator.sendKeys(text);
		navigator.perform();
	}
	
	protected boolean isElementPresent(By locatorKey) {
		try {
			this.driver.findElement(locatorKey);
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	protected boolean isElementPresentIn(By locatorKey, WebElement we) {
		try {
			we.findElement(locatorKey);
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	protected boolean isElementVisible(String cssLocator) {
		return driver.findElement(By.cssSelector(cssLocator)).isDisplayed();
	}

	public boolean errorMessageNewToolDefIs(String errorMessage) {
		System.out.println("El error message es: " + errorMessage);
		return this.errorMessage.getText().equals(errorMessage);
	}

	public boolean errorMessageNewInstanceIs(String errorMessage) {
		System.out.println("El error message es: " + errorMessage);
		return this.errorMessageNewInstance.getText().equals(errorMessage);
	}

	public void clickLogIn() {
		this.loginBegin.click();
	}
	
	public void clickLogOut() {
		Actions action = new Actions(this.driver);
		action.click(this.avatarButton);
		action.click(this.logoutButton).build().perform();;
	}
	
	public void fillLogin(String login, String passwd) {
		this.clearAndSetText(loginInput, login);
		this.clearAndSetText(passwdInput, passwd);
		this.loginButton.click();
	}
	
	public Boolean loginButtonIsPresent() {
		return this.isElementPresent(By.xpath("//li[contains(@class,'sign-in')]"));
	}
}
