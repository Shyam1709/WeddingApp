package com.wedding.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Booking {
	@Id
	private String id;
	@DBRef
	private User emailId;
	@DBRef
	private Venue venueId;
	private Date date;
	private Long contactNo;

	public Booking() {

	}

	public Booking(Venue venueId, Date date, String id, User emailId, Long contactNo) {
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

	public User getEmailId() {
		return emailId;
	}

	public Venue getVenueId() {
		return venueId;
	}

	public void setEmmailId(User emailId) {
		this.emailId = emailId;
	}

	public void setVenueId(Venue venueId) {
		this.venueId = venueId;
	}

	public Long getContactNo() {
		return contactNo;
	}

	public void setContactNo(Long contactNo) {
		this.contactNo = contactNo;
	}

}
