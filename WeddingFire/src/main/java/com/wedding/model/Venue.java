package com.wedding.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Venue {
@Id
private ObjectId id; 
	public Integer getCapacity() {
	return capacity;
}
public void setCapacity(Integer capacity) {
	this.capacity = capacity;
}
public void setVenueName(String venueName) {
	this.venueName = venueName;
}

	private String venueName;
	private String location;
	private String city;
	private Double venue_rating;
	private Integer price;
	private String type;
	private Integer capacity;
	private String venue_image;
	
	public Venue() {
		
	}
	public Venue(ObjectId id, String venueName, String location, String city, Double venue_rating, Integer price,
			String type, String venue_image) {
		this.id = id;
		this.venueName = venueName;
		this.location = location;
		this.city = city;
		this.venue_rating = venue_rating;
		this.price = price;
		this.type = type;
		this.venue_image = venue_image;
	}

	public String getVenueName() {
		return venueName;
	}

	public String getVenue_image() {
		return venue_image;
	}

	public void setVenue_image(String venue_image) {
		this.venue_image = venue_image;
	}

	public void setVenue_name(String venue_name) {
		
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

	public Double getVenue_rating() {
		return venue_rating;
	}

	public void setVenue_rating(Double venue_rating) {
		this.venue_rating = venue_rating;
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

}
