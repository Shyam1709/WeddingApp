package com.wedding.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jayway.jsonpath.internal.Utils;
import com.wedding.model.Booking;
import com.wedding.model.Venue;
import com.wedding.repository.BookingRepository;
import com.wedding.repository.VenueRepository;


@RestController
@RequestMapping("/wed/booking")
public class BookingController {

	BookingRepository bookingRepository;
	VenueRepository venueRepository;

	public BookingController(BookingRepository bookingRepository, VenueRepository venueRepository) {
		this.bookingRepository = bookingRepository;
		this.venueRepository = venueRepository;
	}

	// to save userdetails in the database via booking form
	@RequestMapping(value = "/venue", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> add(@RequestBody Booking booking) {
		Map<String, String> response = new HashMap<String, String>();
		if (booking == null) {
			response.put("error", "venue not booked");
		}
		bookingRepository.save(booking);
		// Venue v = venueRepository.findById(booking.getVenueId());
		// response.put("venueName", v.getVenueName());
		// response.put("venuePrice", String.valueOf(v.getPrice()));
		// response.put("location", v.getLocation());
		// response.put("bookingDate",String.valueOf(booking.getDate()));
		response.put("ok", "venue booked successfully");
		return ResponseEntity.accepted().body(response);
	}

	// to get booking details from database
	// @RequestMapping(value = "/bookingdetails/{userid}", method =
	// RequestMethod.GET)
	// public ResponseEntity<Map<String, String>> getDetails(@PathVariable String
	// userid) {
	// Map<String, String> response = new HashMap<String, String>();
	// List<Booking> b = bookingRepository.findByUserId(userid);
	// response.put("ok", String.valueOf(b));
	// return ResponseEntity.accepted().body(response);
	// }

	@RequestMapping(value = "/bookingdetails/{userId}", method = RequestMethod.GET)
	public ResponseEntity<Map<String, List<?>>> getDetails(@PathVariable String userId) {
		 Map<String, List<?>> response = new HashMap<String, List<?>>();
		List<Booking> selected = new ArrayList<Booking>();
		
		selected.addAll(bookingRepository.findByUserIdLike(userId));
		for (int i = 0; i < selected.size(); i++) {
			Booking b = selected.get(i);
			b.setVenuedetails(venueRepository.findOneById(b.getVenueId()));
            
		}
		response.put("bookingres", selected);
	//	selected.addAll(selectedvenue);
		return ResponseEntity.accepted().body(response);
	}


}
