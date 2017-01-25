@toolInstanceCreation @tool-implementation-portlet
Feature: Tool Instance Creation
	As a user
	I want to be able to create new Tool Instance in the system
	So that I can work with that Tool Instance

	Scenario: A logged user creates a new Tool Instance
		Given the user is on the Tool Instances Navigation Page
		And she logs in the system as test@guerrillamail.com with password test
		When she chooses to create a new tool instance
		And she provides the tool instance name as My New Instance
		And she creates the tool instance
		And she returns to the Tool Instances Navigation Page
		Then a tool instance called "My New Instance" exists
		
	Scenario: An error is shown when creating an existing Tool Instance
		Given the user is on the Tool Instances Navigation Page
		And she logs in the system as test@guerrillamail.com with password test
		And a tool instance called "My New Instance" exists
		When the user chooses to create a new tool instance
		And she provides the tool instance name as My New Instance
		And she creates the tool instance
		Then an error message with text "Existing Tool Instance" is shown

	Scenario: A logged user modifies the name when creating an existing Tool Instance
		Given the user is on the Tool Instances Navigation Page
		And she logs in the system as test@guerrillamail.com with password test
		And a tool instance called "My New Instance" exists
		When the user chooses to create a new tool instance
		And she provides the tool instance name as My New Instance
		And she creates the tool instance
		But an error message with text "Existing Tool Instance" is shown
		When the user provides the tool instance name as My New Instance 2
		And she creates the tool instance
		And she returns to the Tool Instances Navigation Page
		Then a tool instance called "My New Instance 2" exists
		
	Scenario: An anonymous user cannot create new Tool Instances
		Given the user is on the Tool Instances Navigation Page
		When he is not logged in
		Then there is no button to create a new tool instance
