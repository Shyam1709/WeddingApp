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
//		Venue v = venueRepository.findById(booking.getVenueId());
//		response.put("venueName", v.getVenueName());
//		response.put("venuePrice", String.valueOf(v.getPrice()));
//		response.put("location", v.getLocation());
//		response.put("bookingDate",String.valueOf(booking.getDate()));
	response.put("ok", "venue booked successfully");
		return ResponseEntity.accepted().body(response);
	}

	
}
