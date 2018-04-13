package com.wedding.model;

public class Catering {
	private String menuType;
	private String menuItem;
	public Catering() {

	}

	public Catering(String menuType, String menuItem) {
		this.menuType = menuType;
		this.menuItem = menuItem;
	}

	public String getMenuType() {
		return menuType;
	}

	public void setMenuType(String menuType) {
		this.menuType = menuType;
	}

	public String getMenuItem() {
		return menuItem;
	}

	public void setMenuItem(String menuItem) {
		this.menuItem = menuItem;
	}
}
