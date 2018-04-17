package com.wedding.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class CateringProvider {
@Id	
private String id;
private  String cateringProvider;
private String location;
private Double rating;
private Integer contactNo;
private Integer price;
private String imagePath;

public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
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
public Integer getContactNo() {
	return contactNo;
}
public void setContactNo(Integer contactNo) {
	this.contactNo = contactNo;
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
