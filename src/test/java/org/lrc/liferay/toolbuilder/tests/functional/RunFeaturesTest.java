package org.lrc.liferay.toolbuilder.tests.functional;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",
//				tags = {"@tool-implementation-portlet"},
				tags = {"@tool-definition-portlet"},
//				tags = {"@onlyTestDeletion, @DeleteEditToolDefRestrictions"},
//				tags = {"@createToolDef"},
//				tags = {"@dbChecker"},
//				tags = {"@deleteStepDef"},
//				tags = {"@deleteToolDef"},
//				tags = {"@editToolDef"},
//				tags = {"@testingFramework"},
				plugin = {"pretty", "html:reports/cucumber", "json:reports/cucumber_report.json"})
public class RunFeaturesTest {

}
