package com.wedding.repository;



import org.springframework.data.mongodb.repository.MongoRepository;
import com.wedding.model.Venue;

public interface VenueRepository extends MongoRepository<Venue,String>{
}

