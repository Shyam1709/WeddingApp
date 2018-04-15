package com.wedding.model;

import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Booking {
@Id	
private ObjectId userId;
@DBRef
private Venue venue;
private Date date;
public Booking() {
	
}
public Booking(Venue venue,Date date) {
this.venue=venue;
this.date=date;
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
