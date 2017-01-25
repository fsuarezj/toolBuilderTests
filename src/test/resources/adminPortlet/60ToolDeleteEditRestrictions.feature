@tool-definition-portlet @DeleteEditToolDefRestrictions
Feature: Delete and Edit Management
	As the admin user
	I don't want to edit or delete a Tool Definition selected or with exisiting tool instances
	So the system should avoid it
		
	Scenario: Try to edit or delete the selected Tool Definition with tool instances associated
		Given the admin user is on the Tool Builder admin page
		When the name of the selected tool definition is "My New Tool Type"
		Then a tooltip message with text "unselect-or-delete-instances-to-configure-delete-tooldef" is shown for the buttons on tool definition "My New Tool Type"
		And the button to delete the tool definition called "My New Tool Type" is disabled
		And the button to configure the tool definition called "My New Tool Type" is disabled

	Scenario: Try to edit or delete a non-selected Tool Definition with tool instances associated
		Given the user is on the Tool Instances Navigation Page
		And a tool instance called "My New Tool Def Instance" exists
		When the admin user goes to the Tool Builder admin page
		And she selects "Test Tool 2" as default tool definition
		Then a tooltip message with text "unselect-or-delete-instances-to-configure-delete-tooldef" is shown for the buttons on tool definition "My New Tool Type"
		And the button to delete the tool definition called "My New Tool Type" is disabled
		And the button to configure the tool definition called "My New Tool Type" is disabled

	Scenario: Try to edit or delete the selected Tool Definition without tool instances associated
		Given the user is on the Tool Instances Navigation Page
		And there are no Tool Instances
		When the admin user goes to the Tool Builder admin page
		And the name of the selected tool definition is "Test Tool 2"
		Then a tooltip message with text "unselect-or-delete-instances-to-configure-delete-tooldef" is shown for the buttons on tool definition "Test Tool 2"
		And the button to delete the tool definition called "Test Tool 2" is disabled
		And the button to configure the tool definition called "Test Tool 2" is disabled

	Scenario: Delete associated tool instances, deselect and delete an existing Tool Definition
		Given the admin user is on the Tool Builder admin page
		And she selects "My New Tool Type" as default tool definition
		And she goes to the Tool Instances Navigation Page
		And a tool instance called "My New Tool Def Instance" exists
		When the user selects the tool instance "My New Tool Def Instance"
		And she deletes the current tool instance 
		And she logs out
		And the admin user goes to the Tool Builder admin page
		And a tooltip message with text "unselect-or-delete-instances-to-configure-delete-tooldef" is shown for the buttons on tool definition "My New Tool Type"
		And the user selects "Test Tool" as default tool definition
		And the button to delete the tool definition called "My New Tool Type" is enabled
		And the button to configure the tool definition called "My New Tool Type" is enabled
		And she selects to delete the tool definition called "My New Tool Type"
		And she confirms the deletion
		Then a tool definition called "My New Tool Type" does not exist