package com.wedding.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class EnquiryForm {

	private String name;
	private String email;
	private Integer contactNo;
	private String query_message;

	public EnquiryForm() {
	}

	public EnquiryForm(String name, String email, Integer contactNo, String query_message) {
		this.name = name;
		this.email = email;
		this.contactNo = contactNo;
		this.query_message = query_message;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getContactNo() {
		return contactNo;
	}

	public void setContactNo(Integer contactNo) {
		this.contactNo = contactNo;
	}

	public String getQuery_message() {
		return query_message;
	}

	public void setQuery_message(String query_message) {
		this.query_message = query_message;
	}
}
