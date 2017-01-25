package org.lrc.liferay.toolbuilder.tests.unit;

import org.junit.Assert;
import org.junit.Test;
import org.lrc.liferay.toolbuilder.tests.functional.utils.DBChecker;

public class DBCheckerTests {
	
	private String passwd = "durantes";
	
	@Test
	public void checkConnection() {
		new DBChecker(passwd);
	}

	@Test
	public void checkGetLastStepDefOrder() {
		Assert.assertNotEquals(-1, new DBChecker(passwd).saveLastStepDefOrder());
		new DBChecker(passwd).printTools();
	}

	@Test
	public void testDeletedSteps() {
		String toolName = "Test Tool";
		int position = 4;
		new DBChecker(passwd).createForTest(toolName, position);
		Assert.assertFalse(new DBChecker(passwd).deletedStep(position, toolName));
		new DBChecker(passwd).printTools();
		new DBChecker(passwd).deleteForTest(toolName, position);
	}
}
