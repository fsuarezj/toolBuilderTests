@tool-definition-portlet @chooseToolDef
Feature: Choosing Tool Definition
	As the admin user
	I want to choose the Tool Definition for the system
	So that I can use work with it
	
	Scenario: Choose an existing Tool Definition
		Given the admin user goes to the Tool Builder admin page
		And a tool definition called "Test Tool" exists
		And a tool definition called "Test Tool 2" exists
		Then the user selects "Test Tool 2" as default tool definition
		And the name of the selected tool definition is "Test Tool 2"
		When she goes to the Tool Instances Navigation Page
		And the name of the tool definition is "Test Tool 2"

	Scenario: Choose another existing Tool Definition
		Given the admin user goes to the Tool Builder admin page
		And a tool definition called "Test Tool" exists
		And a tool definition called "Test Tool 2" exists
		When the user selects "Test Tool" as default tool definition
		When the name of the selected tool definition is "Test Tool"
		And she goes to the Tool Instances Navigation Page
		And the name of the tool definition is "Test Tool"
		
	Scenario: An anonymous user canoot access tool-definition portlet
		When the user goes to the page http://localhost:8080/group/control_panel/manage?p_p_id=tooldefinition_WAR_toolBuilderportlet
		Then the login portlet is showed

	Scenario: A non-admin logged user cannot access tool-definition portlet
		Given the user goes to the Tool Instances Navigation Page
		And he logs in the system as test@guerrillamail.com with password test
		When he goes to the page http://localhost:8080/group/control_panel/manage?p_p_id=tooldefinition_WAR_toolBuilderportlet
		Then the page was not found