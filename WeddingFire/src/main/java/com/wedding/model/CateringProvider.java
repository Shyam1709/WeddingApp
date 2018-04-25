package com.wedding.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class CateringProvider {
@Id	
private String id;
private  String cateringProvider;
private String city;
private String location;
private Double rating;
private Long contactNo;
private Integer price;
private String description;
private String image_path;
public String getImage_path() {
	return image_path;
}
public void setImage_path(String image_path) {
	this.image_path = image_path;
}
public Long getContactNo() {
	return contactNo;
}
public void setContactNo(Long contactNo) {
	this.contactNo = contactNo;
}


public CateringProvider() {
	
}
public CateringProvider(String cateringProvider, String location, Double rating, Long contactNo, Integer price,
		String description, String imagePath) {
	super();
	this.cateringProvider = cateringProvider;
	this.location = location;
	this.rating = rating;
	this.contactNo = contactNo;
	this.price = price;
	this.description = description;
	this.imagePath = imagePath;
}
private String imagePath;

public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}

public String getCateringProvider() {
	return cateringProvider;
}
public void setCateringProvider(String cateringProvider) {
	this.cateringProvider = cateringProvider;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public Double getRating() {
	return rating;
}
public void setRating(Double rating) {
	this.rating = rating;
}

public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public Integer getPrice() {
	return price;
}
public void setPrice(Integer price) {
	this.price = price;
}
public String getImagePath() {
	return imagePath;
}
public void setImagePath(String imagePath) {
	this.imagePath = imagePath;
}

}
