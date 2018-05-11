package com.wedding.model;

import java.util.Date;
import java.util.List;

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
	@DBRef
	private List<Venue> venuedetails;
    @DBRef
    
	

	private Long contactNo;
	private String userId;

	public Booking() {

	}

	public Booking(String id, String emailId, String venueId, Date date, List<Venue> venuedetails, Long contactNo,
			String userId) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.venueId = venueId;
		this.date = date;
		this.venuedetails = venuedetails;
		this.contactNo = contactNo;
		this.userId = userId;
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

	public void setEmailId(String emailId) {
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
	public List<Venue> getVenuedetails() {
		return venuedetails;
	}

	public void setVenuedetails(List<Venue> venuedetails) {
		this.venuedetails = venuedetails;
	}
}
