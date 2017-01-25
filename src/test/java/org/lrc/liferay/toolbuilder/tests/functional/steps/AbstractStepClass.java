package org.lrc.liferay.toolbuilder.tests.functional.steps;

import org.lrc.liferay.toolbuilder.tests.functional.utils.DBChecker;
import org.openqa.selenium.WebDriver;

public abstract class AbstractStepClass {

	protected WebDriver driver;
	protected DBChecker dbChecker;
	protected String passwd = "durantes";
	protected static final String homeURL = "http://localhost:8080";

}
