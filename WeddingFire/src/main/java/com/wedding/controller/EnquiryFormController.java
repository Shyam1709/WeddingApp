package com.wedding.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
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
	public ResponseEntity<Map<String, String>> saveEnquiry(@RequestBody EnquiryForm enquiryForm) {
		Map<String, String> response = new HashMap<String, String>();
		try {
			enquiryFormRepository.save(enquiryForm);
			response.put("Success", "Enquiry Details send Successfully");
			return ResponseEntity.accepted().body(response);
		} catch (Exception e) {
			response.put("Error", "Enquiry Details send Failed");
			return ResponseEntity.badRequest().body(response);
		}

	}

}
