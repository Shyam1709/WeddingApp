package com.wedding.model;




import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class User {

	private String userName;
	private String emailId;
	private String password;
	private String role = "user";

	public String getUserName() {
		return userName;
	}

	public User() {
	}

	public User(String userName, String emailId, String password) {
		this.userName = userName;
		this.emailId = emailId;
		this.password = password;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return role;

	}

}
