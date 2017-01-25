@tool-definition-portlet @createToolDef @dbChecker
Feature: Create Tool Definition
	As the admin user
	I want to create new Tool Definitions in the system
	So that I can choose them as the system Tool Definition

	Scenario: Create a new Tool Definition with composite step but without nested steps
		Given the admin user is on the Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as "My New Tool Type"
		And she adds in position 1 a step of type MOCK
		And she adds in position 2 a step of type COMPOSITE
		And she adds in position 3 a step of type MOCK
		And she returns to the Tool Definition admin page
		Then a tool definition called "My New Tool Type" exists
		And she selects to delete the tool definition called "My New Tool Type"

	Scenario: Create a new Tool Definition with composite step and not add nested steps
		Given the admin user is on the Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as "My New Tool Type"
		And she adds in position 1 a step of type MOCK
		And she adds in position 2 a step of type COMPOSITE
		And she clicks to configure step 2
		And she returns to the previous edit page
		And she adds in position 3 a step of type MOCK
		And she returns to the Tool Definition admin page
		Then a tool definition called "My New Tool Type" exists
		And she selects to delete the tool definition called "My New Tool Type"

	Scenario: Create a new Tool Definition with one level of nested steps
		Given the admin user is on the Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as "My New Tool Type"
		And she adds in position 1 a step of type MOCK
		And she adds in position 2 a step of type COMPOSITE
		And she adds in position 3 a step of type MOCK
		And she clicks to configure step 2
		And she adds in position 2.1 a step of type MOCK
		And she adds in position 2.2 a step of type MOCK
		And she returns to the previous edit page
		And she returns to the Tool Definition admin page
		Then a tool definition called "My New Tool Type" exists
		And she selects to delete the tool definition called "My New Tool Type"

	Scenario: Create a new Tool Definition with one nested composite step
		Given the admin user is on the Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as "My New Tool Type"
		And she adds in position 1 a step of type MOCK
		And she adds in position 2 a step of type COMPOSITE
		And she adds in position 3 a step of type MOCK
		And she clicks to configure step 2
		And she adds in position 2.1 a step of type COMPOSITE
		And she clicks to configure step 2.1
		And she returns to the previous edit page
		And she returns to the previous edit page
		And she returns to the Tool Definition admin page
		Then a tool definition called "My New Tool Type" exists
		And she selects to delete the tool definition called "My New Tool Type"

	Scenario: Create a new Tool Definition with two levels of nested steps
		Given the admin user is on the Tool Builder admin page
		When she chooses to create a new tool definition
		And she provides the tool definition name as "My New Tool Type"
		And she adds in position 1 a step of type MOCK
		And she adds in position 2 a step of type COMPOSITE
		And she adds in position 3 a step of type MOCK
		And she clicks to configure step 2
		And she adds in position 2.1 a step of type MOCK
		And she adds in position 2.2 a step of type COMPOSITE
		And she clicks to configure step 2.1
		And she adds in position 2.2.1 a step of type MOCK
		And she adds in position 2.2.2 a step of type MOCK
		And she returns to the previous edit page
		And she returns to the previous edit page
		And she returns to the Tool Definition admin page
		Then a tool definition called "My New Tool Type" exists
		And she selects to delete the tool definition called "My New Tool Type"

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