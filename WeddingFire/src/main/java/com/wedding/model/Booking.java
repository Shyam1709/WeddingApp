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
	private String cateringId;
	private Date date;
	@DBRef
	private List<Venue> venuedetails;
	@DBRef
	private List<CateringProvider> cateringdetails;
	private Long contactNo;
	private String userId;

	public Booking() {

	}

	public Booking(String id, String emailId, String venueId, String cateringId, Date date, List<Venue> venuedetails,
			List<CateringProvider> cateringdetails, Long contactNo, String userId) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.venueId = venueId;
		this.cateringId = cateringId;
		this.date = date;
		this.venuedetails = venuedetails;
		this.cateringdetails = cateringdetails;
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

	public String getCateringId() {
		return cateringId;
	}

	public void setCateringId(String cateringId) {
		this.cateringId = cateringId;
	}

	public List<CateringProvider> getCateringdetails() {
		return cateringdetails;
	}

	public void setCateringdetails(List<CateringProvider> cateringdetails) {
		this.cateringdetails = cateringdetails;
	}

}
