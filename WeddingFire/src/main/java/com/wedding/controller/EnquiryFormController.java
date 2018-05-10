package com.wedding.controller;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.model.EnquiryForm;
import com.wedding.repository.EnquiryFormRepository;

@RestController
@RequestMapping("/wedding/enquiry")
public class EnquiryFormController {

	EnquiryFormRepository enquiryFormRepository;

	public EnquiryFormController(EnquiryFormRepository enquiryFormRepository) {
		this.enquiryFormRepository = enquiryFormRepository;
	}

	// get users enquiry details from database
	@RequestMapping(value = "/get", method = RequestMethod.GET)
	public List<EnquiryForm> getAll() {
		return enquiryFormRepository.findAll();
	}

	// save enquiry details of users into the database
	@RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> updateExist(@RequestBody EnquiryForm enquiryForm) {
		try {
			enquiryFormRepository.save(enquiryForm);
			return new ResponseEntity<String>("Saved", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("Error", HttpStatus.BAD_REQUEST);
		}

	}

}
