package com.wedding.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class User {
	@NotNull
	@Size(min=3, max=25 )
	@Pattern(regexp="^([A-Z][a-z])$")
	private String userName;
	private String emailId;
	private Long contactNo;
	private String password;
	private String role = "user";

	public String getUserName() {
		return userName;
	}

	public User() {
	}

	public User(String userName, String emailId, Long contactNo, String password) {
		this.userName = userName;
		this.emailId = emailId;
		this.contactNo = contactNo;
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
	@NotNull
	@Size(min=10, max=10)
	public Long getContactNo() {
		return contactNo;
	}

	public void setContactNo(Long contactNo) {
		this.contactNo = contactNo;
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
