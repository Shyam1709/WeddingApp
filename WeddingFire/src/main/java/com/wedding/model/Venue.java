package com.wedding.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Venue {
@Id
private ObjectId id; 
	private String venueName;
	private String location;
	private String city;
	private Double venueRating;
	private Integer price;
	private String type;
	private Integer capacity;
	private String venueImage;
	
	public Venue() {
		
	}
	
	public Venue(ObjectId id, String venueName, String location, String city, Double venueRating, Integer price,
			String type, Integer capacity, String venueImage) {
		this.id = id;
		this.venueName = venueName;
		this.location = location;
		this.city = city;
		this.venueRating = venueRating;
		this.price = price;
		this.type = type;
		this.capacity = capacity;
		this.venueImage = venueImage;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getVenueName() {
		return venueName;
	}

	public void setVenueName(String venueName) {
		this.venueName = venueName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Double getVenueRating() {
		return venueRating;
	}

	public void setVenueRating(Double venueRating) {
		this.venueRating = venueRating;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getCapacity() {
		return capacity;
	}

	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}

	public String getVenueImage() {
		return venueImage;
	}

	public void setVenueImage(String venueImage) {
		this.venueImage = venueImage;
	}

}
