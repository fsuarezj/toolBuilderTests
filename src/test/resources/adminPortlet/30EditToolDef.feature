@tool-definition-portlet @editToolDef
Feature: Edit Tool Definition
	As the admin user
	I want to edit existing Tool Definitions in the system
	So that I can choose them as the system Tool Definition
		
	Scenario: Move a step forward without saving
		Given the admin user is on the Tool Builder admin page
		And she chooses to create a new tool definition
		And she provides the tool definition name as "My editTest Tool Type"
		And she adds a step of type MOCK
		And she adds a step of type MOCK
		And she adds a step of type MOCK
		And she returns to the Tool Definition admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		When she moves the step 2 to step 3
		Then the step 2 is in the position 3
		Then the step 3 is in the position 2
		And the step 2 is not in the position 2
		And the step 3 is not in the position 3

	Scenario: Move a step forward and save
		Given the admin user is on the Tool Builder admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		And the steps positions are defined to compare
		When she moves the step 2 to step 3
		And she saves the steps order
		Then the step 1 is in the position 1
		And the former step 1 is in the position 1
		And the step 2 is in the position 2
		And the former step 2 is in the position 3
		And the step 3 is in the position 3
		And the former step 3 is in the position 2
		And she returns to the Tool Definition admin page

	Scenario: Move a step backward and save
		Given the admin user is on the Tool Builder admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		And the steps positions are defined to compare
		When she moves the step 2 to step 1
		And she saves the steps order
		Then the step 1 is in the position 1
		And the former step 1 is in the position 2
		And the step 2 is in the position 2
		And the former step 2 is in the position 1
		And the step 3 is in the position 3
		And the former step 3 is in the position 3
		And she returns to the Tool Definition admin page

	Scenario: Move a step and do not save
		Given the admin user is on the Tool Builder admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		And the steps positions are defined to compare
		When she moves the step 2 to step 3
		And she returns to the Tool Definition admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		And she saves the steps order
		Then the step 1 is in the position 1
		And the former step 1 is in the position 1
		And the step 2 is in the position 2
		And the former step 2 is in the position 2
		And the step 3 is in the position 3
		And the former step 3 is in the position 3
		And she returns to the Tool Definition admin page

	Scenario: Move a step to the beginning and save
		Given the admin user is on the Tool Builder admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		And the steps positions are defined to compare
		When she moves the step 3 to step 1
		And she saves the steps order
		Then the step 1 is in the position 1
		And the former step 1 is in the position 2
		And the step 2 is in the position 2
		And the former step 2 is in the position 3
		And the step 3 is in the position 3
		And the former step 3 is in the position 1

	Scenario: Move a step to the end and save
		Given the admin user is on the Tool Builder admin page
		And she chooses to edit the tool definition called "My editTest Tool Type"
		And the steps positions are defined to compare
		When she moves the step 1 to step 3
		And she saves the steps order
		Then the step 1 is in the position 1
		And the former step 1 is in the position 3
		And the step 2 is in the position 2
		And the former step 2 is in the position 1
		And the step 3 is in the position 3
		And the former step 3 is in the position 2

	Scenario: Move a step and add another step
		Given the admin user is on the Tool Builder admin page
		When she chooses to edit the tool definition called "My editTest Tool Type"
		And the steps positions are defined to compare
		And she moves the step 3 to step 1
		And the step 3 is in the position 1
		And she adds a step of type MOCK
		Then the former step 3 is in the position 1
		And the step 3 is in the position 3
		And the step 1 is in the position 1
		
	Scenario: Move a new added step
		Given the admin user is on the Tool Builder admin page
		When she chooses to edit the tool definition called "My editTest Tool Type"
		And she adds a step of type MOCK
		And the steps positions are defined to compare
		And she moves the step 4 to step 2
		Then the step 4 is in the position 2
		And the step 2 is in the position 3
		And the step 3 is in the position 4
		And she returns to the Tool Definition admin page
		And she selects to delete the tool definition called "My editTest Tool Type"
		And she confirms the deletion