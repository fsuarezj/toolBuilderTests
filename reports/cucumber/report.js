$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adminPortlet/10ChooseToolDef.feature");
formatter.feature({
  "line": 2,
  "name": "Choosing Tool Definition",
  "description": "As the admin user\nI want to choose the Tool Definition for the system\nSo that I can use work with it",
  "id": "choosing-tool-definition",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@chooseToolDef"
    }
  ]
});
formatter.before({
  "duration": 7440903810,
  "status": "passed"
});
formatter.before({
  "duration": 53696,
  "status": "passed"
});
formatter.before({
  "duration": 34612,
  "status": "passed"
});
formatter.before({
  "duration": 26793,
  "status": "passed"
});
formatter.before({
  "duration": 25972,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Choose an existing Tool Definition",
  "description": "",
  "id": "choosing-tool-definition;choose-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a tool definition called \"Test Tool\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a tool definition called \"Test Tool 2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user selects \"Test Tool 2\" as default tool definition",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the name of the selected tool definition is \"Test Tool 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she goes to the Tool Instances Navigation Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the name of the tool definition is \"Test Tool 2\"",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 4880434944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 163221262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 18972413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 18
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 458877144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 45
    }
  ],
  "location": "ToolBuilderAdminSteps.selectedToolDef(String)"
});
formatter.result({
  "duration": 108053384,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 320914267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 36
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolDefName(String)"
});
formatter.result({
  "duration": 61959430,
  "status": "passed"
});
formatter.after({
  "duration": 249529921,
  "status": "passed"
});
formatter.after({
  "duration": 2600168307,
  "status": "passed"
});
formatter.after({
  "duration": 642601109,
  "status": "passed"
});
formatter.after({
  "duration": 531521024,
  "status": "passed"
});
formatter.after({
  "duration": 657932583,
  "status": "passed"
});
formatter.before({
  "duration": 443552099,
  "status": "passed"
});
formatter.before({
  "duration": 23969,
  "status": "passed"
});
formatter.before({
  "duration": 9424,
  "status": "passed"
});
formatter.before({
  "duration": 9076,
  "status": "passed"
});
formatter.before({
  "duration": 9006,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Choose another existing Tool Definition",
  "description": "",
  "id": "choosing-tool-definition;choose-another-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "a tool definition called \"Test Tool\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "a tool definition called \"Test Tool 2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects \"Test Tool\" as default tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the name of the selected tool definition is \"Test Tool\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "she goes to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the name of the tool definition is \"Test Tool\"",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3342276963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 81776293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 29005504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 18
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 667171777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 45
    }
  ],
  "location": "ToolBuilderAdminSteps.selectedToolDef(String)"
});
formatter.result({
  "duration": 186072532,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 313877990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 36
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolDefName(String)"
});
formatter.result({
  "duration": 52047054,
  "status": "passed"
});
formatter.after({
  "duration": 66096853,
  "status": "passed"
});
formatter.after({
  "duration": 2054660964,
  "status": "passed"
});
formatter.after({
  "duration": 704366514,
  "status": "passed"
});
formatter.after({
  "duration": 534658349,
  "status": "passed"
});
formatter.after({
  "duration": 522503692,
  "status": "passed"
});
formatter.before({
  "duration": 510583553,
  "status": "passed"
});
formatter.before({
  "duration": 16333,
  "status": "passed"
});
formatter.before({
  "duration": 9466,
  "status": "passed"
});
formatter.before({
  "duration": 8235,
  "status": "passed"
});
formatter.before({
  "duration": 8024,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "An anonymous user canoot access tool-definition portlet",
  "description": "",
  "id": "choosing-tool-definition;an-anonymous-user-canoot-access-tool-definition-portlet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "the user goes to the page http://localhost:8080/group/control_panel/manage?p_p_id\u003dtooldefinition_WAR_toolBuilderportlet",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the login portlet is showed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/group/control_panel/manage?p_p_id\u003dtooldefinition_WAR_toolBuilderportlet",
      "offset": 26
    }
  ],
  "location": "ToolInstanceCommonSteps.goToPage(String)"
});
formatter.result({
  "duration": 1362115840,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.loginPortletExists()"
});
formatter.result({
  "duration": 17975075,
  "status": "passed"
});
formatter.after({
  "duration": 65333328,
  "status": "passed"
});
formatter.after({
  "duration": 690948077,
  "status": "passed"
});
formatter.after({
  "duration": 502537597,
  "status": "passed"
});
formatter.after({
  "duration": 512125500,
  "status": "passed"
});
formatter.after({
  "duration": 534841098,
  "status": "passed"
});
formatter.before({
  "duration": 478396896,
  "status": "passed"
});
formatter.before({
  "duration": 16789,
  "status": "passed"
});
formatter.before({
  "duration": 9040,
  "status": "passed"
});
formatter.before({
  "duration": 8656,
  "status": "passed"
});
formatter.before({
  "duration": 7879,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "A non-admin logged user cannot access tool-definition portlet",
  "description": "",
  "id": "choosing-tool-definition;a-non-admin-logged-user-cannot-access-tool-definition-portlet",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "the user goes to the Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "he logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "he goes to the page http://localhost:8080/group/control_panel/manage?p_p_id\u003dtooldefinition_WAR_toolBuilderportlet",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the page was not found",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1561331523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 25
    },
    {
      "val": "test",
      "offset": 62
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 408566824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/group/control_panel/manage?p_p_id\u003dtooldefinition_WAR_toolBuilderportlet",
      "offset": 20
    }
  ],
  "location": "ToolInstanceCommonSteps.goToPage(String)"
});
formatter.result({
  "duration": 1813093972,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.pageNotFound()"
});
formatter.result({
  "duration": 15490259,
  "status": "passed"
});
formatter.after({
  "duration": 110177412,
  "status": "passed"
});
formatter.after({
  "duration": 666802677,
  "status": "passed"
});
formatter.after({
  "duration": 617505869,
  "status": "passed"
});
formatter.after({
  "duration": 498208316,
  "status": "passed"
});
formatter.after({
  "duration": 583289286,
  "status": "passed"
});
formatter.uri("adminPortlet/20NewToolDef.feature");
formatter.feature({
  "line": 2,
  "name": "Create Tool Definition",
  "description": "As the admin user\nI want to create new Tool Definitions in the system\nSo that I can choose them as the system Tool Definition",
  "id": "create-tool-definition",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@createToolDef"
    },
    {
      "line": 1,
      "name": "@dbChecker"
    }
  ]
});
formatter.before({
  "duration": 472477622,
  "status": "passed"
});
formatter.before({
  "duration": 16856,
  "status": "passed"
});
formatter.before({
  "duration": 8470,
  "status": "passed"
});
formatter.before({
  "duration": 8261,
  "status": "passed"
});
formatter.before({
  "duration": 7932,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Create a new void Tool Definition",
  "description": "",
  "id": "create-tool-definition;create-a-new-void-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "she provides the tool definition name as \"Mock Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "a tool definition called \"Mock Tool Type\" exists",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3537374153,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 53951646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 1172142739,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 74747147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 435851522,
  "status": "passed"
});
formatter.after({
  "duration": 65405512,
  "status": "passed"
});
formatter.after({
  "duration": 656235730,
  "status": "passed"
});
formatter.after({
  "duration": 536423303,
  "status": "passed"
});
formatter.after({
  "duration": 526626316,
  "status": "passed"
});
formatter.after({
  "duration": 551249310,
  "status": "passed"
});
formatter.before({
  "duration": 450899201,
  "status": "passed"
});
formatter.before({
  "duration": 17114,
  "status": "passed"
});
formatter.before({
  "duration": 8668,
  "status": "passed"
});
formatter.before({
  "duration": 7627,
  "status": "passed"
});
formatter.before({
  "duration": 7763,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create a new Tool Definition with steps",
  "description": "",
  "id": "create-tool-definition;create-a-new-tool-definition-with-steps",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "she provides the tool definition name as \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "she adds in position 1 a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "she adds in position 2 a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "she adds in position 3 a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "a tool definition called \"My New Tool Type\" exists",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the user selects \"My New Tool Type\" as default tool definition",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3749915263,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 85809957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 1560831667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "MOCK",
      "offset": 38
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStepInPosition(int,String)"
});
formatter.result({
  "duration": 2553876459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "MOCK",
      "offset": 38
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStepInPosition(int,String)"
});
formatter.result({
  "duration": 1052884265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    },
    {
      "val": "MOCK",
      "offset": 38
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStepInPosition(int,String)"
});
formatter.result({
  "duration": 1005548497,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 71381809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 514915343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 18
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 629641998,
  "status": "passed"
});
formatter.after({
  "duration": 65180789,
  "status": "passed"
});
formatter.after({
  "duration": 501220006,
  "status": "passed"
});
formatter.after({
  "duration": 535799118,
  "status": "passed"
});
formatter.after({
  "duration": 584909198,
  "status": "passed"
});
formatter.after({
  "duration": 495501226,
  "status": "passed"
});
formatter.before({
  "duration": 447411814,
  "status": "passed"
});
formatter.before({
  "duration": 16860,
  "status": "passed"
});
formatter.before({
  "duration": 8186,
  "status": "passed"
});
formatter.before({
  "duration": 7294,
  "status": "passed"
});
formatter.before({
  "duration": 7865,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Use new Tool Definition",
  "description": "",
  "id": "create-tool-definition;use-new-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "the user is on the Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "she logs in the system as test@guerrillamail.com with password test",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the name of the tool definition is \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user creates a tool instance called \"My New Tool Def Instance\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "she selects the tool instance \"My New Tool Def Instance\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "she chooses to step forward",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "she returns to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the tool instance called \"My New Tool Def Instance\" is on step 3",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1484706372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@guerrillamail.com",
      "offset": 26
    },
    {
      "val": "test",
      "offset": 63
    }
  ],
  "location": "ToolInstanceCommonSteps.logIn(String,String)"
});
formatter.result({
  "duration": 337811301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 36
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolDefName(String)"
});
formatter.result({
  "duration": 833690087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 41
    }
  ],
  "location": "ToolInstancesNavigationSteps.createNewToolInstance(String)"
});
formatter.result({
  "duration": 1499262988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 31
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 605669148,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 46498266,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 26605736,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 24417626,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.stepForward()"
});
formatter.result({
  "duration": 16922084,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceEditSteps.exitToolInstance()"
});
formatter.result({
  "duration": 28939154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 26
    },
    {
      "val": "3",
      "offset": 63
    }
  ],
  "location": "ToolInstancesNavigationSteps.verifyToolInstanceStep(String,int)"
});
formatter.result({
  "duration": 386024953,
  "status": "passed"
});
formatter.after({
  "duration": 64254072,
  "status": "passed"
});
formatter.after({
  "duration": 511124349,
  "status": "passed"
});
formatter.after({
  "duration": 566272582,
  "status": "passed"
});
formatter.after({
  "duration": 522301321,
  "status": "passed"
});
formatter.after({
  "duration": 687257601,
  "status": "passed"
});
formatter.before({
  "duration": 399432745,
  "status": "passed"
});
formatter.before({
  "duration": 21727,
  "status": "passed"
});
formatter.before({
  "duration": 11458,
  "status": "passed"
});
formatter.before({
  "duration": 10098,
  "status": "passed"
});
formatter.before({
  "duration": 14721,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Create an existing Tool Definition",
  "description": "",
  "id": "create-tool-definition;create-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "a tool definition called \"My New Tool Type\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "she provides the tool definition name as \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "an error message with text \"Tool Definition called \"My New Tool Type\" already exists\" is shown for the new tool definition",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3633283787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 45686431,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 77529180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 238063421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tool Definition called \"My New Tool Type\" already exists",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageNewToolDefIs(String)"
});
formatter.result({
  "duration": 30009032,
  "status": "passed"
});
formatter.after({
  "duration": 65953894,
  "status": "passed"
});
formatter.after({
  "duration": 511204773,
  "status": "passed"
});
formatter.after({
  "duration": 588237015,
  "status": "passed"
});
formatter.after({
  "duration": 573318009,
  "status": "passed"
});
formatter.after({
  "duration": 481771907,
  "status": "passed"
});
formatter.before({
  "duration": 460680106,
  "status": "passed"
});
formatter.before({
  "duration": 17351,
  "status": "passed"
});
formatter.before({
  "duration": 7908,
  "status": "passed"
});
formatter.before({
  "duration": 7179,
  "status": "passed"
});
formatter.before({
  "duration": 7050,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Try to create an existing Tool Definition and change the name",
  "description": "",
  "id": "create-tool-definition;try-to-create-an-existing-tool-definition-and-change-the-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "a tool definition called \"My New Tool Type\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "she chooses to create a new tool definition",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "she provides the tool definition name as \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "an error message with text \"Tool Definition called \"My New Tool Type\" already exists\" is shown for the new tool definition",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "she provides the tool definition name as \"My New Tool Type 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "she adds in position 1 a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "she adds in position 2 a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "a tool definition called \"My New Tool Type 2\" exists",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3320707724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 617506998,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 78456935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 221921944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tool Definition called \"My New Tool Type\" already exists",
      "offset": 28
    }
  ],
  "location": "ToolInstanceCommonSteps.errorMessageNewToolDefIs(String)"
});
formatter.result({
  "duration": 30795302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 1416846278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "MOCK",
      "offset": 38
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStepInPosition(int,String)"
});
formatter.result({
  "duration": 1121921922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "MOCK",
      "offset": 38
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStepInPosition(int,String)"
});
formatter.result({
  "duration": 1495072173,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 47010231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 516239355,
  "status": "passed"
});
formatter.after({
  "duration": 80397538,
  "status": "passed"
});
formatter.after({
  "duration": 692152868,
  "status": "passed"
});
formatter.after({
  "duration": 740882799,
  "status": "passed"
});
formatter.after({
  "duration": 572384594,
  "status": "passed"
});
formatter.after({
  "duration": 851500039,
  "status": "passed"
});
formatter.uri("adminPortlet/30EditToolDef.feature");
formatter.feature({
  "line": 2,
  "name": "Edit Tool Definition",
  "description": "As the admin user\nI want to edit existing Tool Definitions in the system\nSo that I can choose them as the system Tool Definition",
  "id": "edit-tool-definition",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@editToolDef"
    }
  ]
});
formatter.before({
  "duration": 439831902,
  "status": "passed"
});
formatter.before({
  "duration": 21628,
  "status": "passed"
});
formatter.before({
  "duration": 11481,
  "status": "passed"
});
formatter.before({
  "duration": 10992,
  "status": "passed"
});
formatter.before({
  "duration": 10452,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Move a step forward without saving",
  "description": "",
  "id": "edit-tool-definition;move-a-step-forward-without-saving",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "she chooses to create a new tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "she provides the tool definition name as \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "she moves the step 2 to step 3",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the step 2 is in the position 3",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the step 3 is in the position 2",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the step 2 is not in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the step 3 is not in the position 3",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 5595774847,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 77805115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 1279963770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1080195782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1017884152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1537682708,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 79804104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 1599814630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 4582525933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 332623951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 129738629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "ToolBuilderAdminSteps.stepNotInPosition(int,int)"
});
formatter.result({
  "duration": 108585352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 34
    }
  ],
  "location": "ToolBuilderAdminSteps.stepNotInPosition(int,int)"
});
formatter.result({
  "duration": 134451199,
  "status": "passed"
});
formatter.after({
  "duration": 65448884,
  "status": "passed"
});
formatter.after({
  "duration": 1376284881,
  "status": "passed"
});
formatter.after({
  "duration": 506327214,
  "status": "passed"
});
formatter.after({
  "duration": 671468798,
  "status": "passed"
});
formatter.after({
  "duration": 601013624,
  "status": "passed"
});
formatter.before({
  "duration": 556339716,
  "status": "passed"
});
formatter.before({
  "duration": 39245,
  "status": "passed"
});
formatter.before({
  "duration": 25597,
  "status": "passed"
});
formatter.before({
  "duration": 16559,
  "status": "passed"
});
formatter.before({
  "duration": 13801,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Move a step forward and save",
  "description": "",
  "id": "edit-tool-definition;move-a-step-forward-and-save",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the steps positions are defined to compare",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "she moves the step 2 to step 3",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "she saves the steps order",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the step 1 is in the position 1",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the former step 1 is in the position 1",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the step 2 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the former step 2 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the step 3 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the former step 3 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3766664751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 801612111,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.storeStepPositions()"
});
formatter.result({
  "duration": 228877311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 1695183295,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.saveStepsOrder()"
});
formatter.result({
  "duration": 2067581855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 190313353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 192847644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 77663754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 139918927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 118055401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 195738729,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 76335221,
  "status": "passed"
});
formatter.after({
  "duration": 65072976,
  "status": "passed"
});
formatter.after({
  "duration": 659651276,
  "status": "passed"
});
formatter.after({
  "duration": 650146627,
  "status": "passed"
});
formatter.after({
  "duration": 523182114,
  "status": "passed"
});
formatter.after({
  "duration": 758349107,
  "status": "passed"
});
formatter.before({
  "duration": 427742613,
  "status": "passed"
});
formatter.before({
  "duration": 20245,
  "status": "passed"
});
formatter.before({
  "duration": 12500,
  "status": "passed"
});
formatter.before({
  "duration": 8686,
  "status": "passed"
});
formatter.before({
  "duration": 9147,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Move a step backward and save",
  "description": "",
  "id": "edit-tool-definition;move-a-step-backward-and-save",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the steps positions are defined to compare",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "she moves the step 2 to step 1",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "she saves the steps order",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the step 1 is in the position 1",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "the former step 1 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the step 2 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the former step 2 is in the position 1",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the step 3 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the former step 3 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3093393623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 1533901876,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.storeStepPositions()"
});
formatter.result({
  "duration": 192399472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 1392864283,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.saveStepsOrder()"
});
formatter.result({
  "duration": 2048835296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 112836460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 155690413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 88632238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 77226995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 82604452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 88200057,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 50908092,
  "status": "passed"
});
formatter.after({
  "duration": 66921348,
  "status": "passed"
});
formatter.after({
  "duration": 2530811201,
  "status": "passed"
});
formatter.after({
  "duration": 498104347,
  "status": "passed"
});
formatter.after({
  "duration": 761308465,
  "status": "passed"
});
formatter.after({
  "duration": 580342523,
  "status": "passed"
});
formatter.before({
  "duration": 450170710,
  "status": "passed"
});
formatter.before({
  "duration": 44682,
  "status": "passed"
});
formatter.before({
  "duration": 8059,
  "status": "passed"
});
formatter.before({
  "duration": 9508,
  "status": "passed"
});
formatter.before({
  "duration": 7116,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Move a step and do not save",
  "description": "",
  "id": "edit-tool-definition;move-a-step-and-do-not-save",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the steps positions are defined to compare",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "she moves the step 2 to step 3",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "she saves the steps order",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the step 1 is in the position 1",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "the former step 1 is in the position 1",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the step 2 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the former step 2 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the step 3 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the former step 3 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 5120579015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 818315694,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.storeStepPositions()"
});
formatter.result({
  "duration": 220444151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 1689151150,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 91120696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 967232982,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.saveStepsOrder()"
});
formatter.result({
  "duration": 2052436165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 115597642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 132239472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 69515336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 79575584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 63643176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 77304916,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 36863932,
  "status": "passed"
});
formatter.after({
  "duration": 215051630,
  "status": "passed"
});
formatter.after({
  "duration": 3333225383,
  "status": "passed"
});
formatter.after({
  "duration": 678102851,
  "status": "passed"
});
formatter.after({
  "duration": 501003201,
  "status": "passed"
});
formatter.after({
  "duration": 633642459,
  "status": "passed"
});
formatter.before({
  "duration": 502749913,
  "status": "passed"
});
formatter.before({
  "duration": 25649,
  "status": "passed"
});
formatter.before({
  "duration": 14190,
  "status": "passed"
});
formatter.before({
  "duration": 13104,
  "status": "passed"
});
formatter.before({
  "duration": 12930,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Move a step to the beginning and save",
  "description": "",
  "id": "edit-tool-definition;move-a-step-to-the-beginning-and-save",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the steps positions are defined to compare",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "she moves the step 3 to step 1",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "she saves the steps order",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the step 1 is in the position 1",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "the former step 1 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the step 2 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the former step 2 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the step 3 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the former step 3 is in the position 1",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3566337363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 840059765,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.storeStepPositions()"
});
formatter.result({
  "duration": 195165751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    },
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 1828077954,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.saveStepsOrder()"
});
formatter.result({
  "duration": 2049628718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 139412691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 202018873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 85722073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 87816083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 82306606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 118729876,
  "status": "passed"
});
formatter.after({
  "duration": 64792968,
  "status": "passed"
});
formatter.after({
  "duration": 650406538,
  "status": "passed"
});
formatter.after({
  "duration": 633281024,
  "status": "passed"
});
formatter.after({
  "duration": 494309221,
  "status": "passed"
});
formatter.after({
  "duration": 498276192,
  "status": "passed"
});
formatter.before({
  "duration": 479920834,
  "status": "passed"
});
formatter.before({
  "duration": 23198,
  "status": "passed"
});
formatter.before({
  "duration": 11540,
  "status": "passed"
});
formatter.before({
  "duration": 9849,
  "status": "passed"
});
formatter.before({
  "duration": 9085,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Move a step to the end and save",
  "description": "",
  "id": "edit-tool-definition;move-a-step-to-the-end-and-save",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the steps positions are defined to compare",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "she moves the step 1 to step 3",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "she saves the steps order",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the step 1 is in the position 1",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "the former step 1 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the step 2 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the former step 2 is in the position 1",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the step 3 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the former step 3 is in the position 2",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 5196271098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 790223128,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.storeStepPositions()"
});
formatter.result({
  "duration": 212982350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 2095884062,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.saveStepsOrder()"
});
formatter.result({
  "duration": 2053894711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 165264301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 134645917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 68431366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 76100325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 70595007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 79013914,
  "status": "passed"
});
formatter.after({
  "duration": 64252120,
  "status": "passed"
});
formatter.after({
  "duration": 826946128,
  "status": "passed"
});
formatter.after({
  "duration": 557813523,
  "status": "passed"
});
formatter.after({
  "duration": 537765094,
  "status": "passed"
});
formatter.after({
  "duration": 494952895,
  "status": "passed"
});
formatter.before({
  "duration": 448169143,
  "status": "passed"
});
formatter.before({
  "duration": 356605,
  "status": "passed"
});
formatter.before({
  "duration": 218600,
  "status": "passed"
});
formatter.before({
  "duration": 231368,
  "status": "passed"
});
formatter.before({
  "duration": 261719,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Move a step and add another step",
  "description": "",
  "id": "edit-tool-definition;move-a-step-and-add-another-step",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 93,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 94,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "the steps positions are defined to compare",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "she moves the step 3 to step 1",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the step 3 is in the position 1",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the former step 3 is in the position 1",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "the step 3 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the step 1 is in the position 1",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3557217519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 813175155,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.storeStepPositions()"
});
formatter.result({
  "duration": 183601902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    },
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 1840140834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 182547140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1053451546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 244490885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 213583627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 213720835,
  "status": "passed"
});
formatter.after({
  "duration": 65395086,
  "status": "passed"
});
formatter.after({
  "duration": 681052005,
  "status": "passed"
});
formatter.after({
  "duration": 539427519,
  "status": "passed"
});
formatter.after({
  "duration": 600511002,
  "status": "passed"
});
formatter.after({
  "duration": 500870406,
  "status": "passed"
});
formatter.before({
  "duration": 442223929,
  "status": "passed"
});
formatter.before({
  "duration": 28676,
  "status": "passed"
});
formatter.before({
  "duration": 14128,
  "status": "passed"
});
formatter.before({
  "duration": 12599,
  "status": "passed"
});
formatter.before({
  "duration": 41271,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Move a new added step",
  "description": "",
  "id": "edit-tool-definition;move-a-new-added-step",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 104,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the steps positions are defined to compare",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "she moves the step 4 to step 2",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the step 4 is in the position 2",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "the step 2 is in the position 3",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the step 3 is in the position 4",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "she selects to delete the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "she confirms the deletion",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3768285078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 818271386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1556733818,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.storeStepPositions()"
});
formatter.result({
  "duration": 321666617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "ToolBuilderAdminSteps.moveStep(int,int)"
});
formatter.result({
  "duration": 1818313843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 321010003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 275398570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "4",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.stepInPosition(int,int)"
});
formatter.result({
  "duration": 170236882,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 72968612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 738995089,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmDeletion()"
});
formatter.result({
  "duration": 1122275732,
  "status": "passed"
});
formatter.after({
  "duration": 164984685,
  "status": "passed"
});
formatter.after({
  "duration": 629433321,
  "status": "passed"
});
formatter.after({
  "duration": 456795700,
  "status": "passed"
});
formatter.after({
  "duration": 637054556,
  "status": "passed"
});
formatter.after({
  "duration": 572689481,
  "status": "passed"
});
formatter.uri("adminPortlet/40DeleteStepDef.feature");
formatter.feature({
  "line": 2,
  "name": "Delete Step Definitions",
  "description": "As the admin user\nI want to delete existing Step Definitions in Tool Definitions\nSo that the Tool Definitions are updated",
  "id": "delete-step-definitions",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@deleteStepDef"
    }
  ]
});
formatter.before({
  "duration": 439789768,
  "status": "passed"
});
formatter.before({
  "duration": 11272,
  "status": "passed"
});
formatter.before({
  "duration": 6241,
  "status": "passed"
});
formatter.before({
  "duration": 5339,
  "status": "passed"
});
formatter.before({
  "duration": 4995,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Delete an existing step definition",
  "description": "",
  "id": "delete-step-definitions;delete-an-existing-step-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "she chooses to create a new tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "she provides the tool definition name as \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the current tool definition has 3 step definitions",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the steps positions are defined to compare",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "she clicks to delete the step 2",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "she confirms the step deletion",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "she saves the steps order",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the former step 3 is in the position 2",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the current tool definition has 2 step definitions",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3364603599,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 85694240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 985581591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1066050306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1020993612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 991522028,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 81997670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 1032569895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "ToolBuilderAdminSteps.stepDefsNumber(int)"
});
formatter.result({
  "duration": 71835126,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.storeStepPositions()"
});
formatter.result({
  "duration": 108142263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteStepDef(int)"
});
formatter.result({
  "duration": 47251660,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmStepDeletion()"
});
formatter.result({
  "duration": 684792727,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.saveStepsOrder()"
});
formatter.result({
  "duration": 2050486555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "ToolBuilderAdminSteps.formerStepInPosition(int,int)"
});
formatter.result({
  "duration": 137916819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "ToolBuilderAdminSteps.stepDefsNumber(int)"
});
formatter.result({
  "duration": 42877636,
  "status": "passed"
});
formatter.after({
  "duration": 65580946,
  "status": "passed"
});
formatter.after({
  "duration": 650133172,
  "status": "passed"
});
formatter.after({
  "duration": 567686892,
  "status": "passed"
});
formatter.after({
  "duration": 658559944,
  "status": "passed"
});
formatter.after({
  "duration": 525672810,
  "status": "passed"
});
formatter.before({
  "duration": 471108419,
  "status": "passed"
});
formatter.before({
  "duration": 11742,
  "status": "passed"
});
formatter.before({
  "duration": 6053,
  "status": "passed"
});
formatter.before({
  "duration": 5276,
  "status": "passed"
});
formatter.before({
  "duration": 5182,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Delete all existing step definitions",
  "description": "",
  "id": "delete-step-definitions;delete-all-existing-step-definitions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "she clicks to delete the step 2",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "she confirms the step deletion",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "she clicks to delete the step 1",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "she confirms the step deletion",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the current tool definition has 0 step definitions",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 2902734914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 1343991602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteStepDef(int)"
});
formatter.result({
  "duration": 69189446,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmStepDeletion()"
});
formatter.result({
  "duration": 653601288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteStepDef(int)"
});
formatter.result({
  "duration": 56107725,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmStepDeletion()"
});
formatter.result({
  "duration": 605568889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "ToolBuilderAdminSteps.stepDefsNumber(int)"
});
formatter.result({
  "duration": 30278501335,
  "status": "passed"
});
formatter.after({
  "duration": 65894448,
  "status": "passed"
});
formatter.after({
  "duration": 498980489,
  "status": "passed"
});
formatter.after({
  "duration": 571038283,
  "status": "passed"
});
formatter.after({
  "duration": 543788357,
  "status": "passed"
});
formatter.after({
  "duration": 523090980,
  "status": "passed"
});
formatter.before({
  "duration": 441100393,
  "status": "passed"
});
formatter.before({
  "duration": 12532,
  "status": "passed"
});
formatter.before({
  "duration": 6983,
  "status": "passed"
});
formatter.before({
  "duration": 5750,
  "status": "passed"
});
formatter.before({
  "duration": 5657,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Delete a newly created step definition",
  "description": "",
  "id": "delete-step-definitions;delete-a-newly-created-step-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "she clicks to delete the step 1",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "she confirms the step deletion",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the current tool definition has 0 step definitions",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3386452147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 777845749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1089726003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteStepDef(int)"
});
formatter.result({
  "duration": 52985411,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmStepDeletion()"
});
formatter.result({
  "duration": 608367781,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 75133597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 959342501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "ToolBuilderAdminSteps.stepDefsNumber(int)"
});
formatter.result({
  "duration": 30071929464,
  "status": "passed"
});
formatter.after({
  "duration": 65315947,
  "status": "passed"
});
formatter.after({
  "duration": 486553649,
  "status": "passed"
});
formatter.after({
  "duration": 550576882,
  "status": "passed"
});
formatter.after({
  "duration": 542753205,
  "status": "passed"
});
formatter.after({
  "duration": 565511976,
  "status": "passed"
});
formatter.before({
  "duration": 461427249,
  "status": "passed"
});
formatter.before({
  "duration": 12513,
  "status": "passed"
});
formatter.before({
  "duration": 6231,
  "status": "passed"
});
formatter.before({
  "duration": 5739,
  "status": "passed"
});
formatter.before({
  "duration": 5487,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Delete a newly created step definition of a newly created tool definition",
  "description": "",
  "id": "delete-step-definitions;delete-a-newly-created-step-definition-of-a-newly-created-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "she chooses to create a new tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "she provides the tool definition name as \"My editTest Tool Type 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "she clicks to delete the step 1",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "she confirms the step deletion",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "she chooses to edit the tool definition called \"My editTest Tool Type 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the current tool definition has 0 step definitions",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3514982422,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 81697034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type 2",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 905916486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1063147955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteStepDef(int)"
});
formatter.result({
  "duration": 73490943,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmStepDeletion()"
});
formatter.result({
  "duration": 612928693,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 70891395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My editTest Tool Type 2",
      "offset": 48
    }
  ],
  "location": "ToolBuilderAdminSteps.editToolDef(String)"
});
formatter.result({
  "duration": 938179135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "ToolBuilderAdminSteps.stepDefsNumber(int)"
});
formatter.result({
  "duration": 30254018602,
  "status": "passed"
});
formatter.after({
  "duration": 70278524,
  "status": "passed"
});
formatter.after({
  "duration": 1886643719,
  "status": "passed"
});
formatter.after({
  "duration": 488962084,
  "status": "passed"
});
formatter.after({
  "duration": 583525946,
  "status": "passed"
});
formatter.after({
  "duration": 610499364,
  "status": "passed"
});
formatter.uri("adminPortlet/50DeleteToolDef.feature");
formatter.feature({
  "line": 2,
  "name": "Delete Tool Definition",
  "description": "As the admin user\nI want to edit existing Tool Definitions in the system\nSo that I can choose them as the system Tool Definition",
  "id": "delete-tool-definition",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@DeleteToolDef"
    }
  ]
});
formatter.before({
  "duration": 455276180,
  "status": "passed"
});
formatter.before({
  "duration": 12555,
  "status": "passed"
});
formatter.before({
  "duration": 6168,
  "status": "passed"
});
formatter.before({
  "duration": 5100,
  "status": "passed"
});
formatter.before({
  "duration": 5024,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Delete a tool definition with steps",
  "description": "",
  "id": "delete-tool-definition;delete-a-tool-definition-with-steps",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@onlyTestDeletion"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "she chooses to create a new tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "she provides the tool definition name as \"My Deleted Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she adds a step of type MOCK",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "she selects to delete the tool definition called \"My Deleted Tool Type\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "she confirms the deletion of the tool definition called \"My Deleted Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "a tool definition called \"My Deleted Tool Type\" does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 9926438724,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 72113528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Deleted Tool Type",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 1088544898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1081175959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1044962558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MOCK",
      "offset": 24
    }
  ],
  "location": "ToolBuilderAdminEditSteps.addNewStep(String)"
});
formatter.result({
  "duration": 1042921991,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 61228274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Deleted Tool Type",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 903257124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Deleted Tool Type",
      "offset": 57
    }
  ],
  "location": "ToolBuilderAdminSteps.confirmToolDefDeletion(String)"
});
formatter.result({
  "duration": 1129197585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Deleted Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.notExistingToolDef(String)"
});
formatter.result({
  "duration": 133167638,
  "status": "passed"
});
formatter.after({
  "duration": 64931721,
  "status": "passed"
});
formatter.after({
  "duration": 2391641299,
  "status": "passed"
});
formatter.after({
  "duration": 492817370,
  "status": "passed"
});
formatter.after({
  "duration": 511527188,
  "status": "passed"
});
formatter.after({
  "duration": 535575172,
  "status": "passed"
});
formatter.before({
  "duration": 447663418,
  "status": "passed"
});
formatter.before({
  "duration": 24359,
  "status": "passed"
});
formatter.before({
  "duration": 15161,
  "status": "passed"
});
formatter.before({
  "duration": 12001,
  "status": "passed"
});
formatter.before({
  "duration": 11196,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Delete a tool definition without steps",
  "description": "",
  "id": "delete-tool-definition;delete-a-tool-definition-without-steps",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@onlyTestDeletion"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "she chooses to create a new tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "she provides the tool definition name as \"My Deleted Tool Type 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "she returns to the Tool Definition admin page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "she selects to delete the tool definition called \"My Deleted Tool Type 2\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "she confirms the deletion of the tool definition called \"My Deleted Tool Type 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "a tool definition called \"My Deleted Tool Type 2\" does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3364616117,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.newToolDef()"
});
formatter.result({
  "duration": 48786973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Deleted Tool Type 2",
      "offset": 42
    }
  ],
  "location": "ToolBuilderAdminSteps.setNewToolDefName(String)"
});
formatter.result({
  "duration": 985112401,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.returnAdminPage()"
});
formatter.result({
  "duration": 69192866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Deleted Tool Type 2",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 738492248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Deleted Tool Type 2",
      "offset": 57
    }
  ],
  "location": "ToolBuilderAdminSteps.confirmToolDefDeletion(String)"
});
formatter.result({
  "duration": 1225399357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Deleted Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.notExistingToolDef(String)"
});
formatter.result({
  "duration": 109383988,
  "status": "passed"
});
formatter.after({
  "duration": 64823942,
  "status": "passed"
});
formatter.after({
  "duration": 519978548,
  "status": "passed"
});
formatter.after({
  "duration": 505099861,
  "status": "passed"
});
formatter.after({
  "duration": 608562465,
  "status": "passed"
});
formatter.after({
  "duration": 564070190,
  "status": "passed"
});
formatter.before({
  "duration": 564339274,
  "status": "passed"
});
formatter.before({
  "duration": 13548,
  "status": "passed"
});
formatter.before({
  "duration": 5862,
  "status": "passed"
});
formatter.before({
  "duration": 5178,
  "status": "passed"
});
formatter.before({
  "duration": 4724,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Delete existing tool definitions",
  "description": "",
  "id": "delete-tool-definition;delete-existing-tool-definitions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "a tool definition called \"My New Tool Type 2\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "a tool definition called \"Mock Tool Type\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "she selects to delete the tool definition called \"My New Tool Type 2\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "she confirms the deletion of the tool definition called \"My New Tool Type 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "she selects to delete the tool definition called \"Mock Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "she confirms the deletion of the tool definition called \"Mock Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "a tool definition called \"My New Tool Type 2\" does not exist",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "a tool definition called \"Mock Tool Type\" does not exist",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 5392077410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 130306965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.existingToolDef(String)"
});
formatter.result({
  "duration": 32206276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 235758722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 57
    }
  ],
  "location": "ToolBuilderAdminSteps.confirmToolDefDeletion(String)"
});
formatter.result({
  "duration": 1175178928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 236068396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 57
    }
  ],
  "location": "ToolBuilderAdminSteps.confirmToolDefDeletion(String)"
});
formatter.result({
  "duration": 1063450387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type 2",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.notExistingToolDef(String)"
});
formatter.result({
  "duration": 90989825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mock Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.notExistingToolDef(String)"
});
formatter.result({
  "duration": 65843605,
  "status": "passed"
});
formatter.after({
  "duration": 64979788,
  "status": "passed"
});
formatter.after({
  "duration": 575334579,
  "status": "passed"
});
formatter.after({
  "duration": 586725219,
  "status": "passed"
});
formatter.after({
  "duration": 637382646,
  "status": "passed"
});
formatter.after({
  "duration": 583308208,
  "status": "passed"
});
formatter.uri("adminPortlet/60ToolDeleteEditRestrictions.feature");
formatter.feature({
  "line": 2,
  "name": "Delete and Edit Management",
  "description": "As the admin user\nI don\u0027t want to edit or delete a Tool Definition selected or with exisiting tool instances\nSo the system should avoid it",
  "id": "delete-and-edit-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tool-definition-portlet"
    },
    {
      "line": 1,
      "name": "@DeleteEditToolDefRestrictions"
    }
  ]
});
formatter.before({
  "duration": 431112243,
  "status": "passed"
});
formatter.before({
  "duration": 19056,
  "status": "passed"
});
formatter.before({
  "duration": 10557,
  "status": "passed"
});
formatter.before({
  "duration": 8394,
  "status": "passed"
});
formatter.before({
  "duration": 7255,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Try to edit or delete the selected Tool Definition with tool instances associated",
  "description": "",
  "id": "delete-and-edit-management;try-to-edit-or-delete-the-selected-tool-definition-with-tool-instances-associated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the name of the selected tool definition is \"My New Tool Type\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "a tooltip message with text \"unselect-or-delete-instances-to-configure-delete-tooldef\" is shown for the buttons on tool definition \"My New Tool Type\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the button to delete the tool definition called \"My New Tool Type\" is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the button to configure the tool definition called \"My New Tool Type\" is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 3491649559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 45
    }
  ],
  "location": "ToolBuilderAdminSteps.selectedToolDef(String)"
});
formatter.result({
  "duration": 111145824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unselect-or-delete-instances-to-configure-delete-tooldef",
      "offset": 29
    },
    {
      "val": "My New Tool Type",
      "offset": 132
    }
  ],
  "location": "ToolBuilderAdminSteps.toolTipOnButtonsToolDef(String,String)"
});
formatter.result({
  "duration": 702195600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 49
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledDeleteToolDef(String)"
});
formatter.result({
  "duration": 58618040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 52
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledConfigureToolDef(String)"
});
formatter.result({
  "duration": 57708287,
  "status": "passed"
});
formatter.after({
  "duration": 65042424,
  "status": "passed"
});
formatter.after({
  "duration": 498148364,
  "status": "passed"
});
formatter.after({
  "duration": 541274709,
  "status": "passed"
});
formatter.after({
  "duration": 555696149,
  "status": "passed"
});
formatter.after({
  "duration": 516424891,
  "status": "passed"
});
formatter.before({
  "duration": 412201378,
  "status": "passed"
});
formatter.before({
  "duration": 12395,
  "status": "passed"
});
formatter.before({
  "duration": 12827,
  "status": "passed"
});
formatter.before({
  "duration": 4791,
  "status": "passed"
});
formatter.before({
  "duration": 4836,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Try to edit or delete a non-selected Tool Definition with tool instances associated",
  "description": "",
  "id": "delete-and-edit-management;try-to-edit-or-delete-a-non-selected-tool-definition-with-tool-instances-associated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the user is on the Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a tool instance called \"My New Tool Def Instance\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "she selects \"Test Tool 2\" as default tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "a tooltip message with text \"unselect-or-delete-instances-to-configure-delete-tooldef\" is shown for the buttons on tool definition \"My New Tool Type\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the button to delete the tool definition called \"My New Tool Type\" is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the button to configure the tool definition called \"My New Tool Type\" is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 1528658457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 24
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 46764845,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 1623059592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 13
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 1363562756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unselect-or-delete-instances-to-configure-delete-tooldef",
      "offset": 29
    },
    {
      "val": "My New Tool Type",
      "offset": 132
    }
  ],
  "location": "ToolBuilderAdminSteps.toolTipOnButtonsToolDef(String,String)"
});
formatter.result({
  "duration": 653003061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 49
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledDeleteToolDef(String)"
});
formatter.result({
  "duration": 45433704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 52
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledConfigureToolDef(String)"
});
formatter.result({
  "duration": 45651299,
  "status": "passed"
});
formatter.after({
  "duration": 64989163,
  "status": "passed"
});
formatter.after({
  "duration": 560230173,
  "status": "passed"
});
formatter.after({
  "duration": 589492370,
  "status": "passed"
});
formatter.after({
  "duration": 541240429,
  "status": "passed"
});
formatter.after({
  "duration": 609049981,
  "status": "passed"
});
formatter.before({
  "duration": 523095098,
  "status": "passed"
});
formatter.before({
  "duration": 13099,
  "status": "passed"
});
formatter.before({
  "duration": 5968,
  "status": "passed"
});
formatter.before({
  "duration": 14574,
  "status": "passed"
});
formatter.before({
  "duration": 5111,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Try to edit or delete the selected Tool Definition without tool instances associated",
  "description": "",
  "id": "delete-and-edit-management;try-to-edit-or-delete-the-selected-tool-definition-without-tool-instances-associated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "the user is on the Tool Instances Navigation Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "there are no Tool Instances",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the name of the selected tool definition is \"Test Tool 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "a tooltip message with text \"unselect-or-delete-instances-to-configure-delete-tooldef\" is shown for the buttons on tool definition \"Test Tool 2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the button to delete the tool definition called \"Test Tool 2\" is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the button to configure the tool definition called \"Test Tool 2\" is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 2838066510,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.emptyToolInstancesList()"
});
formatter.result({
  "duration": 54822744,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 2160501711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 45
    }
  ],
  "location": "ToolBuilderAdminSteps.selectedToolDef(String)"
});
formatter.result({
  "duration": 187893203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unselect-or-delete-instances-to-configure-delete-tooldef",
      "offset": 29
    },
    {
      "val": "Test Tool 2",
      "offset": 132
    }
  ],
  "location": "ToolBuilderAdminSteps.toolTipOnButtonsToolDef(String,String)"
});
formatter.result({
  "duration": 637788498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 49
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledDeleteToolDef(String)"
});
formatter.result({
  "duration": 81030931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool 2",
      "offset": 52
    }
  ],
  "location": "ToolBuilderAdminSteps.disabledConfigureToolDef(String)"
});
formatter.result({
  "duration": 74182749,
  "status": "passed"
});
formatter.after({
  "duration": 64443410,
  "status": "passed"
});
formatter.after({
  "duration": 511021906,
  "status": "passed"
});
formatter.after({
  "duration": 509767349,
  "status": "passed"
});
formatter.after({
  "duration": 497445583,
  "status": "passed"
});
formatter.after({
  "duration": 517223627,
  "status": "passed"
});
formatter.before({
  "duration": 431292205,
  "status": "passed"
});
formatter.before({
  "duration": 13226,
  "status": "passed"
});
formatter.before({
  "duration": 6882,
  "status": "passed"
});
formatter.before({
  "duration": 5942,
  "status": "passed"
});
formatter.before({
  "duration": 25211,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Delete associated tool instances, deselect and delete an existing Tool Definition",
  "description": "",
  "id": "delete-and-edit-management;delete-associated-tool-instances,-deselect-and-delete-an-existing-tool-definition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "the admin user is on the Tool Builder admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "she selects \"My New Tool Type\" as default tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "she goes to the Tool Instances Navigation Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "a tool instance called \"My New Tool Def Instance\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user selects the tool instance \"My New Tool Def Instance\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "she deletes the current tool instance",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "she logs out",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the admin user goes to the Tool Builder admin page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "a tooltip message with text \"unselect-or-delete-instances-to-configure-delete-tooldef\" is shown for the buttons on tool definition \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the user selects \"Test Tool\" as default tool definition",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the button to delete the tool definition called \"My New Tool Type\" is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the button to configure the tool definition called \"My New Tool Type\" is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "she selects to delete the tool definition called \"My New Tool Type\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "she confirms the deletion",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "a tool definition called \"My New Tool Type\" does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 2880389941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 13
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 1572596063,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstancesNavigationSteps.setup()"
});
formatter.result({
  "duration": 297404080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 24
    }
  ],
  "location": "ToolInstancesNavigationSteps.existingToolInstance(String)"
});
formatter.result({
  "duration": 58344135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Def Instance",
      "offset": 36
    }
  ],
  "location": "ToolInstancesNavigationSteps.selectToolInstance(String)"
});
formatter.result({
  "duration": 168428669,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.deleteToolInstance()"
});
formatter.result({
  "duration": 62464949,
  "status": "passed"
});
formatter.match({
  "location": "ToolInstanceCommonSteps.logOut()"
});
formatter.result({
  "duration": 1037695933,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.adminGoesToAdminPage()"
});
formatter.result({
  "duration": 2005776786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "unselect-or-delete-instances-to-configure-delete-tooldef",
      "offset": 29
    },
    {
      "val": "My New Tool Type",
      "offset": 132
    }
  ],
  "location": "ToolBuilderAdminSteps.toolTipOnButtonsToolDef(String,String)"
});
formatter.result({
  "duration": 674152574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Tool",
      "offset": 18
    }
  ],
  "location": "ToolBuilderAdminSteps.selectToolDef(String)"
});
formatter.result({
  "duration": 694290656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 49
    }
  ],
  "location": "ToolBuilderAdminSteps.enabledDeleteToolDef(String)"
});
formatter.result({
  "duration": 88127475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 52
    }
  ],
  "location": "ToolBuilderAdminSteps.enabledConfigureToolDef(String)"
});
formatter.result({
  "duration": 60669365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 50
    }
  ],
  "location": "ToolBuilderAdminSteps.deleteToolDef(String)"
});
formatter.result({
  "duration": 109834382,
  "status": "passed"
});
formatter.match({
  "location": "ToolBuilderAdminSteps.confirmDeletion()"
});
formatter.result({
  "duration": 1113490029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My New Tool Type",
      "offset": 26
    }
  ],
  "location": "ToolBuilderAdminSteps.notExistingToolDef(String)"
});
formatter.result({
  "duration": 68433695,
  "status": "passed"
});
formatter.after({
  "duration": 64695907,
  "status": "passed"
});
formatter.after({
  "duration": 646202932,
  "status": "passed"
});
formatter.after({
  "duration": 566887670,
  "status": "passed"
});
formatter.after({
  "duration": 571433479,
  "status": "passed"
});
formatter.after({
  "duration": 532207087,
  "status": "passed"
});
});