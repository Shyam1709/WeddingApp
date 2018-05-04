package com.wedding.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Booking {
	@Id
	private String id;
	private String emailId;
	private String venueId;
	private Date date;
	private Long contactNo;
    private String userId;
	public Booking() {

	}

	public Booking(String venueId,String userId, Date date, String id, String emailId, Long contactNo) {
		this.venueId = venueId;
		this.date = date;
		this.emailId = emailId;
		this.contactNo = contactNo;

	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getId() {
		return id;
	}

	public String getEmailId() {
		return emailId;
	}

	public String getVenueId() {
		return venueId;
	}

	public void setEmmailId(String emailId) {
		this.emailId = emailId;
	}

	public void setVenueId(String venueId) {
		this.venueId = venueId;
	}

	public Long getContactNo() {
		return contactNo;
	}

	public void setContactNo(Long contactNo) {
		this.contactNo = contactNo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
}
