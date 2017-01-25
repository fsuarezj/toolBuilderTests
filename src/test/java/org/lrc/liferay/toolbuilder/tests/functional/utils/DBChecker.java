package org.lrc.liferay.toolbuilder.tests.functional.utils;

import java.sql.*;
import java.util.Hashtable;

public class DBChecker {
	
	private final String SELECT_ALL = "SELECT * FROM ";
	private String driver = "com.mysql.cj.jdbc.Driver";
	private String url = "jdbc:mysql://localhost/liferay_db";
	private String login = "liferay";
	private String passwd = "";
	
	private static Connection connection;
	private static Hashtable<String, Hashtable<Integer, Integer>> tools =
			new Hashtable<String, Hashtable<Integer, Integer>>();

	public DBChecker() {
		this.connectDB();
	}
	
	public DBChecker(String passwd) {
		this.passwd = passwd;
		this.connectDB();
	}

	public DBChecker(String driver, String url, String login, String passwd) {
		this.driver = driver;
		this.url = url;
		this.login = login;
		this.passwd = passwd;
		this.connectDB();
	}
	
	private void connectDB() {
		try {
			Class.forName(driver);
			DBChecker.connection = DriverManager.getConnection(url, login, passwd);
		} catch (ClassNotFoundException e) {
			System.out.println("driver " + driver + " not found!!\n");
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public int saveLastStepDefOrder() {
		String table = "lrc_tb_StepDefsCompositeStepDefDBE";
		String query = SELECT_ALL + table;
		int index = -1;

		try {
			Statement stmt = DBChecker.connection.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			rs.last();
			int stepDefId = rs.getInt("stepDefDBEId");
			index = rs.getInt("stepIndex");

			String query_aux = "SELECT toolName FROM lrc_tb_ToolDefDBE WHERE compositeStepDefDBEId = (SELECT stepDefDBEId FROM lrc_tb_StepDefDBE WHERE stepTypeId = " + rs.getInt(1) + ")";
			rs = stmt.executeQuery(query_aux);
			rs.next();
			String toolDefName = rs.getString(1);

			if (!DBChecker.tools.containsKey(toolDefName)) {
				DBChecker.tools.put(toolDefName, new Hashtable<Integer,Integer>());
			}
			DBChecker.tools.get(toolDefName).put(stepDefId, index);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return index;
	}
	
	public void printTools() {
		System.out.println(tools);
	}

	public boolean deletedStep(int stepIndex, String toolDefName) {
		Hashtable<Integer,Integer> toolSteps = tools.get(toolDefName);
		for (Integer aux : (toolSteps.keySet())) {
			if (toolSteps.get(aux) == stepIndex) {
				String table = "lrc_tb_StepDefsCompositeStepDefDBE";
				String query = "SELECT * FROM " + table + " WHERE stepDefDBEId = " + aux;
				try {
					Statement stmt = DBChecker.connection.createStatement();
					ResultSet rs = stmt.executeQuery(query);
					if (!rs.first()) {
						toolSteps.remove(aux);
						return true;
					}
				} catch (SQLException e) {
					e.printStackTrace();
					break;
				}
			}
		}
		return false;
	}

	public void createForTest(String toolDefName, int index) {
		String query_aux1 = "SELECT compositeStepDefDBEId FROM lrc_tb_ToolDefDBE WHERE toolName = \"" + toolDefName + "\"";
		String query_aux2 = "SELECT stepTypeId FROM lrc_tb_StepDefDBE WHERE stepDefDBEId = (" + query_aux1 + ")";
		String query = "SELECT stepDefDBEId FROM lrc_tb_StepDefsCompositeStepDefDBE WHERE compositeStepDefDBEId = (" + query_aux2 + ") AND stepIndex = 1";
		try {
			Statement stmt = DBChecker.connection.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			rs.next();
			int stepDefId = rs.getInt(1);
			if (!DBChecker.tools.containsKey(toolDefName)) {
				DBChecker.tools.put(toolDefName, new Hashtable<Integer,Integer>());
			}
			DBChecker.tools.get(toolDefName).put(stepDefId, index);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public void deleteForTest(String toolName, int position) {
		tools.remove(toolName);
	}

	public boolean deletedToolDef(String toolDefName) {
		String table = "lrc_tb_ToolDefDBE";
		String query = "SELECT * FROM " + table + " WHERE toolName = \"" + toolDefName + "\"";
		try {
			Statement stmt = DBChecker.connection.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			if (!rs.first()) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}

}
