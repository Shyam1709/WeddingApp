package com.wedding.controller;

import java.util.ArrayList;
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

import com.wedding.model.Booking;

import com.wedding.repository.BookingRepository;
import com.wedding.repository.CateringProviderRepository;
import com.wedding.repository.VenueRepository;

@RestController
@RequestMapping("/wed/booking")
public class BookingController {

	BookingRepository bookingRepository;
	VenueRepository venueRepository;
	CateringProviderRepository cateringProviderRepository;

	public BookingController(BookingRepository bookingRepository, VenueRepository venueRepository,
			CateringProviderRepository cateringProviderRepository) {
		this.bookingRepository = bookingRepository;
		this.venueRepository = venueRepository;
		this.cateringProviderRepository = cateringProviderRepository;
	}

	// to save userdetails in the database via booking form
	@RequestMapping(value = "/venue", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> add(@RequestBody Booking booking) {
		Map<String, String> response = new HashMap<String, String>();
		if (booking == null) {
			response.put("error", "venue not booked");
		}
		bookingRepository.save(booking);
		response.put("ok", "venue booked successfully");
		return ResponseEntity.accepted().body(response);
	}

	// to get booking details by userid
	@RequestMapping(value = "/bookingdetails/{userId}", method = RequestMethod.GET)
	public ResponseEntity<Map<String, List<?>>> getDetails(@PathVariable String userId) {
		Map<String, List<?>> response = new HashMap<String, List<?>>();
		List<Booking> selected = new ArrayList<Booking>();

		selected.addAll(bookingRepository.findByUserIdLike(userId));
		for (int i = 0; i < selected.size(); i++) {
			Booking b = selected.get(i);
			if(b.getVenueId()!=null)
			b.setVenuedetails(venueRepository.findOneById(b.getVenueId()));
			if(b.getCateringId()!="") {
			b.setCateringdetails(cateringProviderRepository.findOneById(b.getCateringId()));
		}}
		response.put("bookingres", selected);
		// selected.addAll(selectedvenue);
		return ResponseEntity.accepted().body(response);
	}

	// to get bookingdetails by userid
	// @RequestMapping(value = "/bookingdetails/{userId}", method =
	// RequestMethod.GET)
	// public ResponseEntity<Map<String, List<?>>> getDetails(@PathVariable String
	// userId) {
	// Map<String, List<?>> response = new HashMap<String, List<?>>();
	// List<Booking> selected = new ArrayList<Booking>();
	//
	// selected.addAll(bookingRepository.findByUserIdLike(userId));
	// for (int i = 0; i < selected.size(); i++) {
	// Booking b = selected.get(i);
	// b.setVenuedetails(venueRepository.findOneById(b.getVenueId()));
	//
	// }
	// response.put("bookingres", selected);
	// // selected.addAll(selectedvenue);
	// return ResponseEntity.accepted().body(response);
	// }

}
