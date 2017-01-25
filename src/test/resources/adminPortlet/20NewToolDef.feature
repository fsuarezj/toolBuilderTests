@tool-definition-portlet @createToolDef @dbChecker
Feature: Create Tool Definition
	As the admin user
	I want to create new Tool Definitions in the system
	So that I can choose them as the system Tool Definition
	
	Scenario: Create a new void Tool Definition
		Given the admin user is on the Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as "Mock Tool Type"
		And she returns to the Tool Definition admin page
		Then a tool definition called "Mock Tool Type" exists

	Scenario: Create a new Tool Definition with steps
		Given the admin user is on the Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as "My New Tool Type"
		And she adds in position 1 a step of type MOCK
		And she adds in position 2 a step of type MOCK
		And she adds in position 3 a step of type MOCK
		And she returns to the Tool Definition admin page
		Then a tool definition called "My New Tool Type" exists
		And the user selects "My New Tool Type" as default tool definition

	Scenario: Use new Tool Definition
		Given the user is on the Tool Instances Navigation Page
		And she logs in the system as test@guerrillamail.com with password test
		And the name of the tool definition is "My New Tool Type"
		When the user creates a tool instance called "My New Tool Def Instance"
		And she selects the tool instance "My New Tool Def Instance"
		When she chooses to step forward
		When she chooses to step forward
		When she chooses to step forward
		When she chooses to step forward
		And she returns to the Tool Instances Navigation Page
		Then the tool instance called "My New Tool Def Instance" is on step 3

	Scenario: Create an existing Tool Definition
		Given the admin user is on the Tool Builder admin page
		And a tool definition called "My New Tool Type" exists
		When she chooses to create a new tool definition
		And she provides the tool definition name as "My New Tool Type"
		Then an error message with text "Tool Definition called "My New Tool Type" already exists" is shown for the new tool definition
		
	Scenario: Try to create an existing Tool Definition and change the name
		Given the admin user is on the Tool Builder admin page
		And a tool definition called "My New Tool Type" exists
		When she chooses to create a new tool definition
		And she provides the tool definition name as "My New Tool Type"
		Then an error message with text "Tool Definition called "My New Tool Type" already exists" is shown for the new tool definition
		And she provides the tool definition name as "My New Tool Type 2"
		And she adds in position 1 a step of type MOCK
		And she adds in position 2 a step of type MOCK
		And she returns to the Tool Definition admin page
		Then a tool definition called "My New Tool Type 2" exists