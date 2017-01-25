@tool-definition-portlet @DeleteToolDef
Feature: Delete Tool Definition
	As the admin user
	I want to edit existing Tool Definitions in the system
	So that I can choose them as the system Tool Definition

	@onlyTestDeletion
	Scenario: Delete a tool definition with steps
		Given the admin user is on the Tool Builder admin page
		And she chooses to create a new tool definition
		And she provides the tool definition name as "My Deleted Tool Type"
		And she adds a step of type MOCK
		And she adds a step of type MOCK
		And she adds a step of type MOCK
		And she returns to the Tool Definition admin page
		When she selects to delete the tool definition called "My Deleted Tool Type"
		And she confirms the deletion of the tool definition called "My Deleted Tool Type"
		Then a tool definition called "My Deleted Tool Type" does not exist

	@onlyTestDeletion
	Scenario: Delete a tool definition without steps
		Given the admin user is on the Tool Builder admin page
		And she chooses to create a new tool definition
		And she provides the tool definition name as "My Deleted Tool Type 2"
		And she returns to the Tool Definition admin page
		When she selects to delete the tool definition called "My Deleted Tool Type 2"
		And she confirms the deletion of the tool definition called "My Deleted Tool Type 2"
		Then a tool definition called "My Deleted Tool Type 2" does not exist

	Scenario: Delete existing tool definitions
		Given the admin user is on the Tool Builder admin page
		And a tool definition called "My New Tool Type 2" exists
		And a tool definition called "Mock Tool Type" exists
		When she selects to delete the tool definition called "My New Tool Type 2"
		And she confirms the deletion of the tool definition called "My New Tool Type 2"
		And she selects to delete the tool definition called "Mock Tool Type"
		And she confirms the deletion of the tool definition called "Mock Tool Type"
		Then a tool definition called "My New Tool Type 2" does not exist
		And a tool definition called "Mock Tool Type" does not exist