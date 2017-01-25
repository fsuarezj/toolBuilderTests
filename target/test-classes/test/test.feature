@testingFramework
Feature: Cases to test the testing environment
	As a user
	I want to blablablabla
	So that I blabalbla

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
		Then the former step 3 is in the position 2
		And the current tool definition has 2 step definitions