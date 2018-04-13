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
private Date date;
public Booking() {	
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
