@tool-definition-portlet @deleteStepDef
Feature: Delete Step Definitions
	As the admin user
	I want to delete existing Step Definitions in Tool Definitions
	So that the Tool Definitions are updated
		
	Scenario: Delete an existing step definition
		Given the admin user is on the Tool Builder admin page
		And she chooses to create a new tool definition
		And she provides the tool definition name as "My editTest Tool Type"
		And she adds a step of type MOCK
		And she adds a step of type MOCK
		And she adds a step of type MOCK
		And she returns to the Tool Definition admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		And the current tool definition has 3 step definitions
		And the steps positions are defined to compare
		When she clicks to delete the step 2
		And she confirms the step deletion
		And she saves the steps order
		And the former step 3 is in the position 2
		And the current tool definition has 2 step definitions

	Scenario: Delete all existing step definitions
		Given the admin user is on the Tool Builder admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		When she clicks to delete the step 2
		And she confirms the step deletion
		And she clicks to delete the step 1
		And she confirms the step deletion
		Then the current tool definition has 0 step definitions

	Scenario: Delete a newly created step definition
		Given the admin user is on the Tool Builder admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		And she adds a step of type MOCK
		When she clicks to delete the step 1
		And she confirms the step deletion
		And she returns to the Tool Definition admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		Then the current tool definition has 0 step definitions

	Scenario: Delete a newly created step definition of a newly created tool definition
		Given the admin user is on the Tool Builder admin page
		And she chooses to create a new tool definition
		And she provides the tool definition name as "My editTest Tool Type 2"
		And she adds a step of type MOCK
		When she clicks to delete the step 1
		And she confirms the step deletion
		And she returns to the Tool Definition admin page
		And she chooses to edit the tool definition called "My editTest Tool Type 2"
		Then the current tool definition has 0 step definitions
