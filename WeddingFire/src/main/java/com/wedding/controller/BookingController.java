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
import com.wedding.repository.BookingRepository;

@RestController
@RequestMapping("/booking")
public class BookingController {

	BookingRepository bookingRepository;
	
	public BookingController(BookingRepository bookingRepository) {
		this.bookingRepository=bookingRepository;
	}
	
	
	// to save userdetails in the database via registration
	@RequestMapping(value = "/booking", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> add(@RequestBody Booking booking) {
		Map<String, String> response = new HashMap<String, String>();

		bookingRepository.save(booking);
		response.put("ok", "Venue Booked Succesfuly");
		return ResponseEntity.accepted().body(response);
	}
}
