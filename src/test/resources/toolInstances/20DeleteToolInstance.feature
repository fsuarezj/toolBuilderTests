@toolInstanceDeletion @tool-implementation-portlet
Feature: Tool Instance Deletion
	As a user
	I want to be able to delete existing Tool Instances
	So that that Tool Instance becomes deleted

	Scenario: An anonymous user cannot delete existing tool instances
		Given the user is on the Tool Instances Navigation Page
		And a tool instance called "My New Instance" exists
		When the user is not logged in
		When he selects the tool instance "My New Instance"
		Then there is no button to delete the current tool instance
		
	Scenario: A logged user deletes existing tool instances
		Given the user is on the Tool Instances Navigation Page
		And she logs in the system as test@guerrillamail.com with password test
		And a tool instance called "My New Instance" exists
		And a tool instance called "My New Instance 2" exists
		When the user selects the tool instance "My New Instance"
		And she deletes the current tool instance 
		And the user selects the tool instance "My New Instance 2"
		And she deletes the current tool instance 
		Then a tool instance called "My New Instance" does not exist
		And a tool instance called "My New Instance 2" does not exist