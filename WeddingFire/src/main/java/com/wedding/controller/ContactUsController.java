package com.wedding.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.model.Booking;
import com.wedding.model.ContactUs;
import com.wedding.repository.ContactUsRepository;

@RestController
@RequestMapping("/wedding/contact")
public class ContactUsController {

	ContactUsRepository contactUsRepository;

	public ContactUsController(ContactUsRepository contactUsRepository) {
		this.contactUsRepository = contactUsRepository;

	}

	// to save userdetails in the database via contact us form
	@RequestMapping(value = "/user", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> addContact(@RequestBody ContactUs contactUs) {
		Map<String, String> response = new HashMap<String, String>();
		if (contactUs == null) {
			response.put("error", "venue not booked");
		}
		contactUsRepository.save(contactUs)
		response.put("ok", "user details saved successfully");
		return ResponseEntity.accepted().body(response);
	}
	
}
