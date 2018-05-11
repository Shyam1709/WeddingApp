package com.wedding.model;

import org.springframework.data.annotation.Id;

public class ContactUs {
@Id
private String id;
private String userName;
private String emailId;
private String comment;
private String userId;

public ContactUs() {
	
}


public ContactUs(String id, String userName, String emailId, String comment, String userId) {
	super();
	this.id = id;
	this.userName = userName;
	this.emailId = emailId;
	this.comment = comment;
	this.userId = userId;
}





public String getId() {
	return id;
}


public String getUserName() {
	return userName;
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
public String getComment() {
	return comment;
}
public void setComment(String comment) {
	this.comment = comment;
}

public String getUserId() {
	return userId;
}

public void setUserId(String userId) {
	this.userId = userId;
}
	
	
	
}
