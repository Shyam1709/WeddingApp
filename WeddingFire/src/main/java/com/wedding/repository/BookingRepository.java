package com.wedding.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wedding.model.Booking;

public interface BookingRepository extends MongoRepository<Booking,String> {

	
}
